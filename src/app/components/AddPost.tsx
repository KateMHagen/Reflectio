import { MdAddPhotoAlternate } from "react-icons/md";
import { RiVideoAddFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
export default function AddPost() {
    return (
        <div className="p-3 bg-backgroundPrimary shadow-md rounded-lg flex gap-4 justify-between text-sm">
            {/* Avatar */}
            
            <CgProfile size={35}/>
            {/* Post */}
            <div className="flex-1">
                {/* Text input */}
                <div className="flex">
                    <textarea rows={1} placeholder="Reflect on a memory here..." className="rounded-lg flex-1 p-2"></textarea>
                </div>
                {/* Post Option / Image or Video */}
                <div className="flex items-center gap-4 mt-2 text-gray-400">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <MdAddPhotoAlternate size={20} />
                        Photo
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <RiVideoAddFill size={20} />
                        Video
                    </div>
                </div>
            </div>
        </div>
    )
}