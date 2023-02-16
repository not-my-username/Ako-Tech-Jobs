import Link from 'next/link'
import { Card, Typography, Space, Button } from '@supabase/ui'
import { supabase } from '../../lib/initSupabase'

export default function Navbar(user, current_page) {
  // user.user_metadata = {"name":"Liam"}
  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
            <img src="https://raw.githubusercontent.com/AkoTechApp/Logos/main/large/light/large-160.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"></img>

        </a>
        <div className="flex md:order-2">
                {user ? 
                <Link href="/profile" className="dark:text-white">{user.email}</Link>
                :
                <Link  href="/login" > <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button></Link> 
                }
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              {current_page == "home" ? <a href="/" className="navbar-link-current" aria-current="page">Home</a> : <a href="/" className="navbar-link">Home</a>}
            </li>
            <li>
              {current_page == "about" ? <a href="/about" className="navbar-link-current" aria-current="page">About</a> : <a href="/about" className="navbar-link">About</a>}
            </li>
            <li>
              {current_page == "services" ? <a href="/about" className="navbar-link-current" aria-current="page">Services</a> : <a href="/services" className="navbar-link">Services</a>}
            </li>
            <li>
              {current_page == "contact" ? <a href="/contact" className="navbar-link-current" aria-current="page">Contact</a> : <a href="/contact" className="navbar-link">Contact</a>}
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  )
}

export async function getServerSideProps({ req }) {
    const { user } = await supabase.auth.api.getUserByCookie(req)

    console.log("navbar.js")
    console.log(user);

  // If there is a user, return it.
    return { props: { user } }
}