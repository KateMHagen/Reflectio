'use client';

import RightMenu from '@/app/components/RightMenu';
import SideNav from '@/app/components/SideNav';
import { useUser } from '@clerk/clerk-react';
import { usePathname } from 'next/navigation';
import Header from '../../components/Header';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { user } = useUser()
  const username = user?.username 
  const rightMenuPaths = [
    `/profile/${username}`,
    `/profile/${username}/notifications`,
    `/profile/${username}/friends`
  ]

  const showRightMenu = rightMenuPaths.includes(pathname)

  return ( 
    <div className=" sm:flex sm:justify-center h-full md:grid lg:grid md:grid-cols-[20%_55%_25%] lg:grid-cols-[20%_60%_20%]">
        <div className=''>
          <SideNav />
        </div>
        <div className='md:ml-7 lg:ml-7 md:mr-7 lg:mr-7 h-full w-full relative '>
          <Header/>
          <div className="h-full md:overflow-y-auto">{children}</div>        
        </div>

        {showRightMenu && (
            <div className="sm:hidden md:hidden lg:hidden xl:block">
            <span className='w-full h'></span>
            <RightMenu/>
          </div>
        )}
    </div>
  );
}