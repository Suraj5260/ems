import React from 'react'

function AllTasks() {
    return (
        <div className='mt-5 p-5 bg-[#1c1c1c] h-50 rounded overflow-auto '>
            <h1 className='text-2xl font-bold text-center mb-5'>All Tasks</h1>
            <div className='bg-red-400 mb-2 rounded flex  py-2 px-4 justify-between'>
                <h2>Suraj</h2>
                <h3>Make a React Project</h3>
                <h5>Status</h5>
            </div>
            <div className='bg-green-400 mb-2 rounded flex  py-2 px-4 justify-between'>
                <h2>Suraj</h2>
                <h3>Make a React Project</h3>
                <h5>Status</h5>
            </div>
            <div className='bg-purple-400 mb-2 rounded flex  py-2 px-4 justify-between'>
                <h2>Suraj</h2>
                <h3>Make a React Project</h3>
                <h5>Status</h5>
            </div>
            <div className='bg-blue-400 mb-2 rounded flex  py-2 px-4 justify-between'>
                <h2>Suraj</h2>
                <h3>Make a React Project</h3>
                <h5>Status</h5>

            </div>
        </div>
    )
}

export default AllTasks