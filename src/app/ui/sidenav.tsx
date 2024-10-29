'use client';
import Link from 'next/link'

import { usePathname } from 'next/navigation';
import clsx from 'clsx'

export default function SideNav() {
    const pathname = usePathname()
    const links = [
        { name: 'Home', href: '/home'},
        { name: 'Memory Wall', href: '/home/memorywall' },
        { name: 'Favorites', href: '/home/favorites'},
        { name: 'Notifications', href: '/home/notifications'},
        { name: 'Friends', href: '/home/friends'},
        { name: 'Settings', href: '/home/settings'},
      ];
    return (
        <div className="sm:h-16 md:h-screen lg:h-screen p-3 bg-backgroundPrimary sm:fixed sm:bottom-0 sm:left-0 sm:w-full  sm:z-50 md:w-28 lg:w-28 xl:w-64">
            <div className='w-full h-fit mt-3 mb-5'>
                <img src="../favicon.ico" alt="your profile picture" className='w-[80px] h-[80px] m-auto'></img>
                <p className='text-center text-xs mt-1.5'>Kate Hagen</p>
            </div>
            {links.map((link) => {
               
                return (
                    
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'flex h-[48px] w-auto rounded-md mb-1 p-3  hover:bg-sky-100 hover:text-blue-600',
                        {'bg-gray-50': pathname === link.href},
                    )}
                    
                >
                    {/* Legg til link icon her */}
                    <p className="hidden md:block">{link.name}</p>
                </Link>
                );
            })}
        
        </div>
        
    )
}

