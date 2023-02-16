import { Auth } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import './styles/global.css'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={'dark'}>
      <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </main>
  )
}
