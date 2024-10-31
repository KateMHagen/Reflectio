import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export default function SuggestedGroups(){
    return (
        <>
        <div className="p-2  bg-backgroundPrimary rounded-lg shadow-md text-sm flex flex-col gap-4">
            <div className="flex justify-between -mb-3 items-center font-medium">
                <span className="text-gray-400">Your Groups</span>
                <Link href="/" className="text-white">See all</Link>
            </div>
            <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                    <CgProfile size={30}/>
                    <span className="ml-1 font-semibold">Travel</span>
                </div>
            
            </div>
            
        </div>
        </>
    )
}