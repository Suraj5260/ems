import React from "react";
import { CreateTask, Header } from "../";

function AdminView() {
    return (
        <>
            <div className="p-10  h-screen w-full">
                <Header />
                <CreateTask />
            </div >
        </>
    );
}

export default AdminView;
