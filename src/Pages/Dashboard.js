import HeaderBar from "../Component/HeaderBar";
import SearchBar from "../Component/searchBar";
import "../";import "../Pages/CSS/dashboard.css";
const dashboard = () => {
    return <div className="dashboard-container">
        <HeaderBar />
        <SearchBar />
    </div>
}
 
export default dashboard;