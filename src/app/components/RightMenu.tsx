import JoinedGroups from "./JoinedGroups"
import SuggestedFriends from "./SuggestedFriends"
import SuggestedGroups from "./SuggestedGroups"

const RightMenu = ({ userId }: { userId?: string }) => {
    return (
        <div className="ml-7">
            <div className="bg-headerPrimary sticky top-0 right-0 left-0">
                <p className="text-headerPrimary sm:text-[16px] md:text-3xl pt-12 sticky top-0 left-0 right-0">hi</p>
            </div>
            <div className="flex flex-col gap-6 p-3  right-0 left-0">
                <JoinedGroups/>
                <SuggestedGroups/>
                <SuggestedFriends/>
            </div>
        </div>
    )
}

export default RightMenu
