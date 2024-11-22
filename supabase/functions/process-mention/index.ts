import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { mentionId } = await req.json()
    
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Fetch mention details
    const { data: mention, error: mentionError } = await supabaseClient
      .from('mentions')
      .select('*, profiles(*)')
      .eq('id', mentionId)
      .single()

    if (mentionError) throw mentionError

    // Fetch applicable reward tier
    const { data: rewardTier, error: tierError } = await supabaseClient
      .from('reward_tiers')
      .select('*')
      .eq('profile_id', mention.profile_id)
      .lte('min_followers', mention.followers)
      .gte('max_followers', mention.followers)
      .single()

    if (tierError) throw tierError

    // Update mention with reward amount
    const { error: updateError } = await supabaseClient
      .from('mentions')
      .update({
        status: 'processed',
        coupon_eligible: rewardTier.amount,
      })
      .eq('id', mentionId)

    if (updateError) throw updateError

    // Update campaign stats
    const { data: stats, error: statsError } = await supabaseClient
      .from('campaign_stats')
      .upsert({
        profile_id: mention.profile_id,
        total_rewards_given: rewardTier.amount,
        total_reach: mention.estimated_reach,
        ad_spending_saved: mention.estimated_reach * 0.1, // Estimated cost per reach
        updated_at: new Date().toISOString()
      })

    if (statsError) throw statsError

    return new Response(
      JSON.stringify({ success: true, reward: rewardTier }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error processing mention:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})