import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(email, password)

        setEmail('')
        setPassword('')
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className='border-2 border-gray-600 rounded-lg p-20'>
                <form
                    onSubmit={(e) => submitHandler(e)}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required className='mt-3 border-2 bg-transparent text-gray-400 outline-none border-emerald-600 px-5 py-3 rounded-full placeholder:text-gray-600 ' type="email" placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required className=' mt-3 border-2 bg-transparent text-gray-400 outline-none border-emerald-600 px-5 py-3 rounded-full placeholder:text-gray-600 ' type="password" placeholder='Enter your password' />
                    <button
                        className=' mt-5 bg-transparent  outline-none bg-emerald-600 px-5 py-3 rounded-full  '
                    >Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login