import { Auth } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import './styles/global.css'
import {useRouter} from "next/router"
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname == "/logout") return
    const script = document.createElement('script');

    script.src = 'https://unpkg.com/flowbite@1.5.1/dist/flowbite.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [router]); // router prop or w/e

  return (
    <main>
      {/* <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script> */}
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </main>
  )
}
