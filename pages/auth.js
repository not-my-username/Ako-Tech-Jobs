import { supabase } from "../lib/initSupabase";
import { useEffect, useState } from 'react'
import Router from 'next/router'



export default function Profile() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function sign_in() {
        await supabase.auth.signIn({ email, password });
        Router.push('/profile')
    }
    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (event === "PASSWORD_RECOVERY") setAuthView("update_password");
                if (event === "USER_UPDATED")
                    setTimeout(() => setAuthView("sign_in"), 1000);
                // Send session to /api/auth route to set the auth cookie.
                // NOTE: this is only needed if you're doing SSR (getServerSideProps)!
                fetch("/api/auth", {
                    method: "POST",
                    headers: new Headers({ "Content-Type": "application/json" }),
                    credentials: "same-origin",
                    body: JSON.stringify({ event, session }),
                }).then((res) => res.json());
            }
        );

        return () => {
            authListener.unsubscribe();
        };
    }, []);
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900 transition">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a
                        href="/"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        <img
                            className="w-52 mr-2"
                            src="https://raw.githubusercontent.com/AkoTechApp/Logos/main/large/light/large-320.png"
                            alt="logo"
                        />
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <div className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.currentTarget.value); }} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com"required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.currentTarget.value);
                                        }}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="remember"
                                                className="text-gray-500 dark:text-gray-300"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-white "
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    onClick={sign_in}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800 transition"
                                >
                                    Sign in
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account?{" "}
                                    <a
                                        href="#"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Sign up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
