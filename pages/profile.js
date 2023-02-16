import Link from 'next/link'
import { Card, Typography, Space, Button } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import Navbar  from './components/navbar'

export default function Profile({ user }) {
  // user.user_metadata = {"name":"Liam"}
  return (
    <>
      {Navbar(user)}
      <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <h1>Hi, {user.email}</h1>
        <Card>
          <Space direction="vertical" size={6}>
            <Typography.Text>You're signed in</Typography.Text>
            <Typography.Text strong>Email: {user.email}</Typography.Text>
            <Typography.Text type="success">
              User data retrieved server-side (from Cookie in getServerSideProps):
            </Typography.Text>

            <Typography.Text>
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </Typography.Text>
            <Link href="/logout">
              <button className="text-white">Log out</button>
            </Link>
          </Space>
        </Card>
      </div>
    </>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: '/auth', permanent: false } }
  }

  // If there is a user, return it.
  return { props: { user } }
}
