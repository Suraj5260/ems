import React from 'react'

function TaskList() {
    return (
        <div id='taskList' className='flex mt-10 justify-between sm:flex-nowrap gap-5  flex-wrap'>
            <div className=' rounded-xl w-[45%] px-10 py-6 bg-blue-500'>
                <h2 className='text-3xl font-semibold'>1</h2>
                <h3 className='text-xl font-medium'>New Tasks</h3>
            </div>
            <div className=' rounded-xl w-[45%] px-10 py-6 bg-green-500'>
                <h2 className='text-3xl font-semibold'>1</h2>
                <h3 className='text-xl font-medium'>Completed Tasks</h3>
            </div>
            <div className=' rounded-xl w-[45%] px-10 py-6 bg-yellow-500'>
                <h2 className='text-3xl font-semibold'>1</h2>
                <h3 className='text-xl font-medium'>Accepted Tasks</h3>
            </div>
            <div className=' rounded-xl w-[45%] px-10 py-6 bg-red-500'>
                <h2 className='text-3xl font-semibold'>1</h2>
                <h3 className='text-xl font-medium'>Failed Tasks</h3>
            </div>

        </div>
    )
}

export default TaskList