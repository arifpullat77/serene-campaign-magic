import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { code, redirect_uri } = await req.json()
    
    if (!code) {
      throw new Error('No authorization code provided')
    }

    console.log('Received auth code, preparing to exchange for token')
    console.log('Using redirect URI:', redirect_uri)

    const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: Deno.env.get('INSTAGRAM_CLIENT_ID')!,
        client_secret: Deno.env.get('INSTAGRAM_CLIENT_SECRET')!,
        grant_type: 'authorization_code',
        redirect_uri,
        code,
      })
    })

    const tokenData = await tokenResponse.json()
    
    if (tokenData.error) {
      console.error('Token exchange error:', tokenData)
      throw new Error(tokenData.error_message || 'Failed to exchange code for token')
    }

    console.log('Successfully exchanged code for token')

    // Get user details using the access token
    const userResponse = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${tokenData.access_token}`
    )
    const userData = await userResponse.json()

    if (userData.error) {
      console.error('User data fetch error:', userData)
      throw new Error(userData.error.message || 'Failed to fetch user data')
    }

    console.log('Successfully fetched user data')

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
      JSON.stringify({ 
        error: error.message,
        details: error.toString()
      }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})