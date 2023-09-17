"use client"

import Link from "next/link";
import {useState} from "react";
import {axiosWithBase} from "../../../utils";
import {useRouter} from "next/navigation";
import useAuthContext from "../../context/AuthContext";


export default function UserRegistration() {


    const [profileLoader, setProfileLoader] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")

    const {register} = useAuthContext()

    const handleRegister = async (event) => {
        event.preventDefault();
        setProfileLoader(true)
        setError(false)
        let attempt = await register({name, email, address, password, password_confirmation: retypePassword})
        console.log(attempt.err.response.data.message)

        let errMsg = attempt.err.response.data.message;

        setProfileLoader(false);

        if (!attempt.status) {
            setError(true);
            setErrorMsg(errMsg)
        } else {
            setError(false)
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-between p-20">

            <Link href="/"
                className="rounded p-5 bg-gradient-to-r from-cyan-500 to-blue-500 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert font-bold text-5xl cursor-pointer"
            >
                News Aggregator
            </Link>

            <div className=" text-center border-l px-20">
                <div className="">
                    <form className="px-4 rounded mx-auto max-w-3xl w-full my-32 inputs space-y-6" onSubmit={handleRegister}>
                        <div>
                            <h1 className="text-4xl font-bold">Reader Registration</h1>
                            <p className="text-gray-600">
                                Registration to save your preferences and settings.
                            </p>
                            <p className="text-red-500 font-bold">
                                {errorMsg}
                            </p>
                        </div>

                        <div>
                            <label htmlFor="address">Name</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Email</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Address</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text"
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="address">Password</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="address">Retype Password</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="password"
                                value={retypePassword}
                                onChange={(e)=>setRetypePassword(e.target.value)}
                            />
                        </div>

                        <div>

                            <div className="font-bold text-2xl m-8 text-red-400">{error ? 'Error...': null}</div>
                            <div className="font-bold text-2xl m-8 text-green-500">{profileLoader ? 'loading...': null}</div>

                            <button className="btn-primary">Save</button>
                        </div>

                    </form>
                </div>


            </div>


        </main>
    )
};
