import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAdverts } from '../../api/notificationSlice';

const Layout = () => {
    // const dispatch = useDispatch();

    // useEffect(
    //     async () => {
    //         await dispatch(getAdverts());
    //     },
    //     [dispatch]
    // );
    return (

        <div className="bg-white h-screen w-screen overflow-hidden flex flex-row">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <div className="flex-1 p-4 min-h-0 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default Layout