import JoinedGroups from "./JoinedGroups"
import SuggestedFriends from "./SuggestedFriends"
import SuggestedGroups from "./SuggestedGroups"

const RightMenu = ({ userId }: { userId?: string }) => {
    return (
        <div className="flex flex-col gap-6 ml-7 p-3 mt-[74%] sticky top-20 right-0 left-0">
            <JoinedGroups/>
            <SuggestedGroups/>
            <SuggestedFriends/>
        </div>
        
    )
}

export default RightMenu
