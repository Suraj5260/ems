import React from 'react'
import { AllTasks, Header, TaskList } from '../'

function EmployeeView() {
    return (
        <>
            <div className='p-10 bg-[#1c1c1c] h-screen '>
                <Header />
                <TaskList />
                <AllTasks />
            </div>
        </>
    )
}

export default EmployeeView