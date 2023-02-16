import { supabase } from '../lib/initSupabase'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Logout() {
  const router = useRouter()

  useEffect(() => {
    async function initialize() {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                fetch('/api/auth', {
                    method: 'POST',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    credentials: 'same-origin',
                    body: JSON.stringify({ event, session }),
                }).then((res) => res.json())
            }
            )
        await supabase.auth.signOut()
        router.push('/')
        
    }
    initialize()
  })
  return <></>
}