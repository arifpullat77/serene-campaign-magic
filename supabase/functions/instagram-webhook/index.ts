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
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Verify the webhook signature
    const rawBody = await req.text()
    console.log('Received webhook:', rawBody)

    const data = JSON.parse(rawBody)
    
    // Handle webhook verification challenge
    if (data['hub.mode'] === 'subscribe' && data['hub.challenge']) {
      console.log('Responding to webhook verification challenge')
      return new Response(data['hub.challenge'], {
        status: 200,
        headers: corsHeaders,
      })
    }

    // Process webhook events
    const events = data.entry?.map((entry: any) => ({
      profile_id: entry.id, // This needs to be mapped to the correct profile
      event_type: entry.changes[0]?.field || 'unknown',
      object_type: entry.changes[0]?.value?.item || 'unknown',
      object_id: entry.changes[0]?.value?.id || 'unknown',
      raw_data: entry,
      processed: false,
    })) || []

    // Store events in the database
    if (events.length > 0) {
      const { error } = await supabase
        .from('instagram_webhook_events')
        .insert(events)

      if (error) throw error
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    })
  }
})