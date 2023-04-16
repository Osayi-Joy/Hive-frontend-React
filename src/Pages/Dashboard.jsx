import HeaderBar from "../Component/HeaderBar";
import SearchBar from "../Component/Dashboard/searchBar"
import Newpage from "../Component/Dashboard/DashboardJob";
import '../Component/Dashboard/dashboard.css'
const dashboard = () => {
    return <div className="dashboard-container">
        <HeaderBar />
        <SearchBar />
        <Newpage />
        
    </div>
}
 
export default dashboard;