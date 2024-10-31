import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
export default function Post() {
    return (
        <div className="flex flex-col gap-4 ">
            {/* User */}
            <div className='flex items-center flex-nowrap justify-between'>
                <div className="flex items-center gap-4 cursor-pointer">
                    <CgProfile size={35}/>
                    <span className="font-medium mr-1">Kate Hagen</span>
                </div>
                <div className="cursor-pointer">
                    <CiHeart size={35}/>
                </div>
             
            </div>
            {/* Description */}
            <div className="flex flex-col">
                <div className="w-full min-h-96 ">
                    <img src='/assets/images/nature.jpg' className="cover rounded-md" alt=""/>
                </div>
                {/* <p>Vil at denne descp skal vises når man hover over bildet, eller på mobil så kan man swipe for å se den </p> */}
            </div>
            {/* Interaction */}
            <div></div>
        </div>
    )
}