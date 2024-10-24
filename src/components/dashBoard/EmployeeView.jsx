import React from 'react'
import { AssignedTasks, Header, TaskList } from '../'

function EmployeeView() {
    return (
        <>
            <div className='p-10 bg-[#1c1c1c] h-screen'>
                <Header />
                <TaskList />
                <AssignedTasks />
            </div>
        </>
    )
}

export default EmployeeView