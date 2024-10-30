import SideNav from '@/app/ui/sidenav';
import Events from '@/app/ui/events';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
   
      
  <div>
   <div className="sm:flex sm:justify-center h-full md:grid lg:grid md:grid-cols-[20%_60%_20%] lg:grid-cols-[20%_60%_20%]  ">
      <div className="">
        <SideNav />
      </div>
            <div className='md:ml-7 lg:ml-7 h-full w-full relative'>
                <header className='bg-headerPrimary pt-12 sticky top-0 left-0 right-0  '>
                    <div className="flex items-end font-black text-3xl sm:px-7 md:px-0 lg:px-0">
                        <p>Homeeee</p>
                        <div className="text-xs font-normal flex ml-auto ">
                            <p className="pr-3">Recent Memories</p>
                            <p>Campus Highlights</p>
                        </div>
                    </div>
                </header>

                <div className="h-full md:overflow-y-auto">{children}</div>
               
            </div>
            <div className=" sm:hidden md:hidden ml-20 lg:block font-black text-3xl  ">
                <Events/>
            </div>
            
        </div>
  </div>
      
  
    
  );
}