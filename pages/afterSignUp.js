import { supabase } from "../lib/initSupabase";
import { useEffect, useState } from "react";
import Router from "next/router";

export default function Profile() {
    const [email, setFirst] = useState("");
    const [password, setLast] = useState("");

    function setValues() {

    }

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
                                Welcome To AkoTech
                            </h1>
                            <div className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        htmlFor="first"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="first"
                                        value={email}
                                        onChange={(e) => {
                                            setFirst(e.currentTarget.value);
                                        }}
                                        className="input-box"
                                        placeholder="First Name"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="last"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="last"
                                        value={password}
                                        onChange={(e) => {
                                            setLast(e.currentTarget.value);
                                        }}
                                        placeholder="Last Name"
                                        className=" input-box"
                                        required=""
                                    />
                                </div>
                                <button onClick={setValues} className=" button">
                                        Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
