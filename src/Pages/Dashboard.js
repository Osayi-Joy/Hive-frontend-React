import HeaderBar from "../Component/HeaderBar";
import SearchBar from "../Component/searchBar";
import Newpage from "../Component/DashboardJob";
import ServiceJob from "../Component/DashboardService";
import "../";import "../Pages/CSS/dashboard.css";
const dashboard = () => {
    return <div className="dashboard-container">
        <HeaderBar />
        <SearchBar />
        <Newpage />
        <ServiceJob />
        
    </div>
}
 
export default dashboard;