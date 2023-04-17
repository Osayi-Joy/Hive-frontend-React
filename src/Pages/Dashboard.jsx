import HeaderBar from "../Component/HeaderBar";
import SearchBar from "../Component/Dashboard/searchBar"
import Newpage from "../Component/Dashboard/DashboardJob";
import '../Component/Dashboard/dashboard.css'
import {useNavigate} from "react-router-dom";


const Dashboard = () => {

    const  navigate = useNavigate();

    const role = localStorage.getItem("userRole");
    if (role !== "DOER") {
        navigate("/fund-wallet");
    }
    return <div className="dashboard-container">
        {/*<HeaderBar />*/}
        <SearchBar />
        <Newpage />
        
    </div>
}
 
export default Dashboard;