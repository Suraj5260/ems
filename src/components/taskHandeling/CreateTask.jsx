import React from 'react'

function CreateTask() {
    return (
        <div>
            <div className="mt-10 bg-[#1c1c1c] rounded p-10">
                <form className="flex items-start w-full  justify-center gap-10">
                    <div className=" flex flex-col  sm:w-2/5 w-full">
                        <h3  >Task Title</h3>
                        <input className="mt-3 bg-gray-200 text-black outline-none px-5 py-3 rounded-sm placeholder:text-black" type="text" placeholder="Task Title" />

                        <h3 className='mt-2' >Task Description</h3>
                        <input name="" id="" col='30' row='100' type="text" placeholder="Task Description"
                            className="mt-3 bg-gray-200 text-black outline-none px-5 py-3 rounded-sm placeholder:text-black "
                        />

                        <h3 className='mt-2' >Task Due Date</h3>
                        <input className="mt-3 bg-gray-200  text-black outline-none px-5 py-3 rounded-sm placeholder:text-black" type="date" />

                        <h3 className='mt-2' >Task status</h3>
                        <input className="mt-3 bg-gray-200  text-black outline-none px-5 py-3 rounded-sm placeholder:text-black" type="text" placeholder="Task Priority" />

                        <h3 className='mt-2' >Assign to</h3>
                        <input className="mt-3 bg-gray-200  text-black outline-none px-5 py-3 rounded-sm placeholder:text-black" type="text" placeholder="Assign to" />


                        <button
                            className="mt-5   outline-none bg-emerald-600 px-5 py-3 rounded-full clicked:bg-red-600 "
                        >Create task</button>

                    </div>
                    <div className="w-3/5 bg-grey-600">
                        <img className=" w-full  px-4 hidden sm:block " src="/undraw_contrast_re_hc7k.svg" alt="" />
                    </div>

                </form>
            </div >
        </div>
    )
}

export default CreateTask