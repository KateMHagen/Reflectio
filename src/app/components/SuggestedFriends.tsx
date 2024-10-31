import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export default function SuggestedFriends(){
    return (
        <>
        <div className="p-2  bg-backgroundPrimary rounded-lg shadow-md text-sm flex flex-col gap-4">
            <div className="-mb-3 flex justify-between items-center font-medium">
                <span className="text-gray-400">Friend Requests</span>
                <Link href="/" className="text-white">See all</Link>
            </div>
            <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                    <CgProfile size={30}/>
                    <span className="ml-1 font-semibold">Kate Hagen</span>
                </div>
                <span>Follow</span>
            </div>
            <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                    <CgProfile size={30}/>
                    <span className="ml-1 font-semibold">Kate Hagen</span>
                </div>
                <span>Followw</span>
            </div>
            <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                    <CgProfile size={30}/>
                    <span className="ml-1 font-semibold">Kate Hagen</span>
                </div>
                <span>Follow</span>
            </div>
        </div>
        </>
    )
}