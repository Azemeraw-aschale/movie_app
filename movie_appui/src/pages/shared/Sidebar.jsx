import React from 'react'
import logo from '../../assets/images/deliverylogo.png'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'
import { MdPayment } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { PiShoppingCartBold } from "react-icons/pi";
import { MdOutlineSupervisorAccount } from "react-icons/md";

const linkClasses =
    'flex items-center gap-2 font-light px-3 py-2 no-underline hover:bg-neutral-200 hover:no-underline active:bg-neutral-200 rounded-sm text-base'

const Sidebar = () => {
    const { pathname } = useLocation()
    return (
        <div className='bg-neutral-100 w-60 p-3 flex flex-col text-black'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <img src={logo} width="65px" height="56px" alt="Yene Mekina" />
                <span className='text-gray-dark text-lg' >Yene Delivery</span>
            </div>
            <div className="py-8 flex flex-1 flex-col gap-0.5">
                <Link to='/' className={classNames(pathname === '/' ? 'bg-white text-gray-dark' : 'text-neutral-400', linkClasses)}>
                    <span className='text-xl'> 
                    <CiHome/>
                    </span>
                    Home
                </Link>
                <Link to='/paymet_managment' className={classNames(pathname === '/paymet_managment' ? 'bg-white text-gray-dark' : 'text-neutral-400', linkClasses)}>
                    <span className='text-xl'>
                    <MdPayment />
                    </span>
                   Payment Managment
                </Link>
                <Link to='/user_managment' className={classNames(pathname === '/user_managment' ? 'bg-white text-gray-dark' : 'text-neutral-400', linkClasses)}>
                    <span className='text-xl'> 
                    <FaUsers />
                    </span>
                   User Managment
                </Link>
                <Link to='/order_tracking' className={classNames(pathname === '/order_tracking' ? 'bg-white text-gray-dark' : 'text-neutral-400', linkClasses)}>
                    <span className='text-xl'> 
                    <PiShoppingCartBold/>
                    </span>
                   Order Tracking
                </Link>
                <Link to='/staff_managment' className={classNames(pathname === '/staff_managment' ? 'bg-white text-gray-dark' : 'text-neutral-400', linkClasses)}>
                    <span className='text-xl'>
                    <MdOutlineSupervisorAccount/>
                    </span>
                   Staff Managment
                </Link>
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-200'>
                <div className={classNames(linkClasses, 'cursor-pointer text-red-500')}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                   Logout
                </div>
            </div>
        </div>
    )
}
function SidebarLink({ item }) {
    return (
        <Link to='/info' className={classNames('text-white', linkClasses)}>
            <span className='text-xl'> <svg class="h-8 w-8 text-black-low" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="16" x2="12" y2="12" />  <line x1="12" y1="8" x2="12.01" y2="8" /></svg></span>
            Infos
        </Link>
    );
}

export default Sidebar