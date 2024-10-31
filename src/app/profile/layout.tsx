import SideNav from '@/app/components/SideNav';
import Events from '@/app/components/Groups';
import Header from '../components/Header';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return ( 
    <div className="sm:flex sm:justify-center h-full md:grid lg:grid md:grid-cols-[20%_60%_20%] lg:grid-cols-[20%_60%_20%]  ">
        <div >
          <SideNav />
        </div>
        <div className='md:ml-7 lg:ml-7 h-full w-full relative'>
          <Header/>
          <div className="h-full md:overflow-y-auto">{children}</div>        
        </div>
        <div className=" sm:hidden md:hidden ml-20 lg:block font-black text-3xl  ">
          <Events/>
        </div>    
    </div>
  );
}