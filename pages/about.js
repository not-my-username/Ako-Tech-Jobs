import { Card, Typography, Space } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import Navbar from './components/navbar';

export default function Profile({ user }) {
  return (   
    <section className="bg-gray-50 dark:bg-gray-900 transition h-screen">
       {Navbar(user, "about")}
    </section>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  // if (!user) {
  //   // If no user, redirect to index.
  //   return { props: {}, redirect: { destination: '/', permanent: false } }
  // }

  // If there is a user, return it.
  return { props: { user } }
}
