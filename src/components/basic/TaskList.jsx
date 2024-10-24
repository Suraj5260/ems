import React from 'react'

function TaskList() {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className=' rounded-xl w-[45%] px-10 py-6 bg-emerald-600'>
                <h2 className='text-3xl font-semibold'>1</h2>
                <h3 className='text-xl font-medium'>New Tasks</h3>
            </div>
            <div className=' rounded-xl w-[45%] px-10 py-6 bg-red-600'>
                <h2 className='text-3xl font-semibold'>1</h2>
                <h3 className='text-xl font-medium'>New Tasks</h3>
            </div>
            <div className=' rounded-xl w-[45%] px-10 py-6 bg-yellow-500'>
                <h2 className='text-3xl font-semibold'>1</h2>
                <h3 className='text-xl font-medium'>New Tasks</h3>
            </div>
            <div className=' rounded-xl w-[45%] px-10 py-6 bg-blue-600'>
                <h2 className='text-3xl font-semibold'>1</h2>
                <h3 className='text-xl font-medium'>New Tasks</h3>
            </div>

        </div>
    )
}

export default TaskList