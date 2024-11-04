import React from "react";
import { AllTasks, CreateTask, Header } from "../";

function AdminView() {
    return (
        <>
            <div className="p-5  h-screen w-full">
                <Header />
                <CreateTask />
                <AllTasks />
            </div >
        </>
    );
}

export default AdminView;
