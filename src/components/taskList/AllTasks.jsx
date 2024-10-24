import React from 'react'

function AllTasks() {
    return (
        <div id='allTasks' className='h-[55%] w-full flex items-center justify-start gap-5 flex-nowrap  mt-10 overflow-x-auto'>
            <div
                className='flex-shrink-0 p-5 h-full w-[300px] bg-green-500 rounded-xl'
            >
                <div
                    className='flex justify-between items-center'
                >
                    <p
                        className='bg-red-600 px-3 py1 rounded-lg text-sm'
                    >High 50:13</p>
                    <p>
                        20 feb 2024
                    </p>
                </div>
            </div>


        </div>
    )
}

export default AllTasks