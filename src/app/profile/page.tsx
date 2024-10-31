import AddPost from "@/app/components/AddPost";
import Feed from "@/app/components/Feed";

export default function ProfilePage() {
    return (
        <div className="flex flex-col items-center gap-6 mt-6 p-4">
            <div className="sm:w-[300px] md:w-[400px]">
                <AddPost/>
            </div>
            <div className="w-full">
                <Feed/>
            </div>
            
        </div>
    )
}