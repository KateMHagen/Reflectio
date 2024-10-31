import Post from "./Post";

export default function Feed() {
    return (
        
        <div className="sm:flex sm:flex-col sm:gap-10 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 lg:gap-4 ">
            <div className="p-3 bg-backgroundPrimary shadow-md rounded-lg flex gap-4 justify-between text-sm">
                <Post/>
            </div>
            <div className="p-3 bg-backgroundPrimary shadow-md rounded-lg flex-1 ">
                <Post/>
            </div>
            
            
        </div>
    )
}