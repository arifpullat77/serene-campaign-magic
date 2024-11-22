import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseKey)

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Process unprocessed webhook events
    const { data: events, error: fetchError } = await supabase
      .from('instagram_webhook_events')
      .select('*')
      .eq('processed', false)
      .order('created_at', { ascending: true })
      .limit(10)

    if (fetchError) throw fetchError

    for (const event of events || []) {
      console.log('Processing event:', event.id)
      
      if (event.event_type === 'mentions') {
        const mentionData = event.raw_data.changes[0].value
        
        // Create mention record
        const { data: mention, error: mentionError } = await supabase
          .from('mentions')
          .insert({
            profile_id: event.profile_id,
            instagram_id: mentionData.id,
            profile_url: mentionData.permalink,
            followers: mentionData.from.followers_count || 0,
            estimated_reach: mentionData.from.followers_count || 0,
            upload_time: mentionData.timestamp,
            status: 'pending',
            coupon_eligible: 0
          })
          .select()
          .single()

        if (mentionError) {
          console.error('Error creating mention:', mentionError)
          continue
        }

        // Process rewards for the mention
        const { error: rewardError } = await supabase.functions.invoke('process-mention', {
          body: { mentionId: mention.id }
        })

        if (rewardError) {
          console.error('Error processing rewards:', rewardError)
        }
      }

      // Mark event as processed
      const { error: updateError } = await supabase
        .from('instagram_webhook_events')
        .update({
          processed: true,
          processed_at: new Date().toISOString()
        })
        .eq('id', event.id)

      if (updateError) {
        console.error('Error updating event status:', updateError)
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error processing webhook events:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})