import React from 'react'

function Header() {
    return (
        <div className='flex items-center justify-between '>
            <h1 className='text-2xl font-bold'>Hello <br /><span className='text-emerald-600 text-3xl'>Suraj</span> 👋</h1>
            <button
                className=' bg-red-600 px-5 py-3 rounded-full text-white'
            > Log out</button>
        </div>
    )
}

export default Header