import Leaves from "./Leaves"
import Messages from "./Messages"

const Announcements =()=>{
    return(
        <div className="right">
            <div className="announcements">
                <h2>Announcements</h2>
                <div className="updates">
                    <Messages />
                </div>
            </div>
            <Leaves />
        </div>
    )
}
export default Announcements