import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const INSTAGRAM_CLIENT_ID = Deno.env.get('INSTAGRAM_CLIENT_ID')
const INSTAGRAM_CLIENT_SECRET = Deno.env.get('INSTAGRAM_CLIENT_SECRET')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

const supabase = createClient(
  SUPABASE_URL!,
  SUPABASE_SERVICE_ROLE_KEY!
)

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { code, user_id } = await req.json()
    
    if (!code || !user_id) {
      throw new Error('Missing required parameters')
    }

    // Exchange code for access token
    const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: INSTAGRAM_CLIENT_ID!,
        client_secret: INSTAGRAM_CLIENT_SECRET!,
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'http://localhost:5173/dashboard'
      })
    })

    const { access_token, user_id: instagram_user_id } = await tokenResponse.json()

    // Get Instagram business account details
    const userResponse = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${access_token}`
    )
    const { username } = await userResponse.json()

    // Update user profile with Instagram credentials
    const { error } = await supabase
      .from('profiles')
      .update({
        instagram_access_token: access_token,
        instagram_business_id: instagram_user_id,
        instagram_username: username,
        instagram_connected: true
      })
      .eq('id', user_id)

    if (error) throw error

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})