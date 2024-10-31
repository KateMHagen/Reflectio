'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useClerk } from '@clerk/clerk-react'

import { TiHome } from "react-icons/ti";
import { FaImages, FaHeart, FaBell, FaUserFriends, FaSignOutAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { SignOutButton } from '@clerk/nextjs';

export default function SideNav() {
    const pathname = usePathname();
    const {openUserProfile} = useClerk()
    const links = [
        { name: 'Home', href: '/profile', icon: <TiHome size={25} /> },
        { name: 'Memory Wall', href: '/profile/memorywall', icon: <FaImages size={25}/> },
        { name: 'Favorites', href: '/profile/favorites', icon: <FaHeart size={25}/>},
        { name: 'Notifications', href: '/profile/notifications', icon: <FaBell size={25}/>},
        { name: 'Friends', href: '/profile/friends', icon: <FaUserFriends size={25}/>},
        { name: 'Settings', href: '/profile/settings', icon: <IoSettings size={25}/>},
        { name: 'Sign Out', href: '', icon: <FaSignOutAlt size={25}/> },
    ];

    return (
        <div className={clsx(
            'md:h-screen lg:h-screen p-3 bg-backgroundPrimary md:w-20 md:flex-col md:justify-start md:items-start xl:w-64',
            'sm:h-[10%] sm:fixed sm:bottom-0 sm:left-0 sm:w-full sm:z-50 sm:flex sm:justify-around sm:items-center'
        )}>
            <div className='sm:hidden md:block w-full h-fit mt-3 mb-5'>
                <img src="../favicon.ico" alt="your profile picture" className='sm:w-fit sm:h-fit lg:w-[50px] lg:h-[50px] xl:w-[80px] xl:h-[80px] m-auto'/>
                <p className='text-center text-xs mt-1.5'>Kate Hagen</p>
            </div>
            {links.map((link) => (
                <div className='flex w-full' key={link.name}>
                    {link.name === 'Settings' ? (
                        <button onClick={() => openUserProfile()} className='flex items-center h-[48px] xl:w-full rounded-md mb-1 p-3 hover:bg-sky-100 hover:text-blue-600'>
                        {link.icon}
                        <span className="hidden xl:block xl:pl-3 pt-0.5">Settings</span>
                    </button>
                    ) :
                    link.name === 'Sign Out' ? (
                        <SignOutButton>
                            <button className='flex items-center h-[48px] xl:w-full rounded-md mb-1 p-3 hover:bg-sky-100 hover:text-blue-600'>
                                {link.icon}
                                <span className="hidden xl:block xl:pl-3 pt-0.5">Sign Out</span>
                            </button>
                        </SignOutButton>
                    ) : (
                        <Link
                            href={link.href}
                            className={clsx(
                                'md:text-[12px] lg:text-[16px] flex h-[48px] xl:w-full rounded-md mb-1 p-3 hover:bg-sky-100 hover:text-blue-600',
                                {'bg-gray-50': pathname === link.href}
                            )}
                        >
                            <div className='flex'>
                                {link.icon}
                                <div className="hidden xl:block xl:pl-3 pt-0.5">{link.name}</div>
                            </div>
                        </Link>
                    )
                    }

                    
                </div>
            ))}
        </div>
    );
}


