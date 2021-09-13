import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Drawer from './Drawer';
const UserRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Drawer/>
            </BrowserRouter>
        </div>
    )
}

export default UserRouter
