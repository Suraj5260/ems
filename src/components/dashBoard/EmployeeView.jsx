import React from 'react'
import { AssignedTasks, Header, TaskList } from '../'

function EmployeeView() {
    return (
        <>
            <div className='p-5 w-full h-screen'>
                <Header />
                <TaskList />
                <AssignedTasks />
            </div>
        </>
    )
}

export default EmployeeView