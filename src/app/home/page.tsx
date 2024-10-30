import Events from '@/app/ui/events';
export default function Page() {
    return (
        <>
        <div className='overflow-hidden min-w-[90%] flex flex-wrap w-full sm:justify-center lg:justify-between mt-4 '>
                    <div className='border-solid border-4 sm:w-[80%] lg:w-[48%] lg:float-left h-[450px] sm:m-2 lg:m-0 lg:mt-6'></div>
                    <div className='border-solid border-4 sm:w-[80%] lg:w-[48%] lg:float-right h-[450px] sm:m-2 lg:m-0 lg:mt-6'></div>
                    <div className='border-solid border-4 sm:w-[80%] lg:w-[48%] lg:float-left h-[450px] sm:m-2 lg:m-0 lg:mt-6'></div>
                    <div className='border-solid border-4 sm:w-[80%] lg:w-[48%] lg:float-right h-[450px] sm:m-2 lg:m-0 lg:mt-6'></div>
                    <div className='border-solid border-4 sm:w-[80%] lg:w-[48%] lg:float-right h-[450px] sm:m-2 lg:m-0 lg:mt-6'></div>
                    
                </div>
        {/* // <div className="sm:flex md:flex lg:grid md:grid-cols-[80%_20%] lg:grid-cols-[80%_20%] gap-7 w-full ">
            
        //     <div>
        //         <header className='sticky top-0 bg-headerPrimary pt-12 '>
        //             <div className="flex items-end">
        //                 <p>Home</p>
        //                 <div className="text-xs font-normal flex ml-auto pr-3">
        //                     <p className="pr-3">Recent Memories</p>
        //                     <p>Campus Highlights</p>
        //                 </div>
        //             </div>
        //         </header>
                
        //     </div>
        //     <div className=" sm:hidden md:hidden lg:block  ">
        //         <Events/>
        //     </div>
            
        // </div> */}
        </>
    )
    
}