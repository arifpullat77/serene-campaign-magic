import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const INSTAGRAM_CLIENT_ID = Deno.env.get('INSTAGRAM_CLIENT_ID')
const INSTAGRAM_CLIENT_SECRET = Deno.env.get('INSTAGRAM_CLIENT_SECRET')
const REDIRECT_URI = 'http://localhost:5173/dashboard'

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { code } = await req.json()
    
    if (!code) {
      throw new Error('No authorization code provided')
    }

    console.log('Exchanging code for access token...')

    // Exchange code for access token
    const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: INSTAGRAM_CLIENT_ID!,
        client_secret: INSTAGRAM_CLIENT_SECRET!,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
        code,
      })
    })

    const tokenData = await tokenResponse.json()
    
    if (tokenData.error) {
      console.error('Token exchange error:', tokenData)
      throw new Error(tokenData.error_message || 'Failed to exchange code for token')
    }

    // Get user details using the access token
    const userResponse = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${tokenData.access_token}`
    )
    const userData = await userResponse.json()

    if (userData.error) {
      console.error('User data fetch error:', userData)
      throw new Error(userData.error.message || 'Failed to fetch user data')
    }

    return new Response(
      JSON.stringify({
        access_token: tokenData.access_token,
        user_id: userData.id,
        username: userData.username
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Error in instagram-auth function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})