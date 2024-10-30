export default function Header(){
    return (
        <header className='bg-headerPrimary pt-12 sticky top-0 left-0 right-0  '>
                    <div className="flex items-end sm:px-7 md:px-0 lg:px-0">
               
                        <p className="sm:text-[16px] md:text-3xl font-black">Home</p>
                       
                        
                        <div className="sm:text-[10px] md:text-xs font-normal flex ml-auto ">
                            <p className="pr-3">Recent Memories</p>
                            <p>Campus Highlights</p>
                        </div>
                    </div>
                </header>
    )
}