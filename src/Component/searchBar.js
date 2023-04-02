import "../Pages/CSS/dashboard.css";
import Emoji from "../Assets/Emoji.svg";

const search = () => {
    const username = "Omotayo";
    return <div className="search-menu">
        <div className="dashboard-content">
            <h2>Welcome {username} <img src={Emoji} alt="Hive Emoji" /></h2>
            <div className="dashboard-search-component">
                <h2>New Job Listing</h2>
                <input type="text" placeholder="Search for a user" />
            </div>
        </div>
    </div>
}
 
export default search;