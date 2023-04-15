import React from 'react'

import HeaderBar from "../Component/HeaderBar";
import UserDashboard from '../Component/Tasker/UserDashboard';
import Newpage from "../Component/Dashboard/DashboardJob";
// import TaskerView from '../Component/Tasker/TakserView';
import '../Component/Dashboard/dashboard.css'

function tasker() {
  return (
    <div className="dashboard-container">
        <HeaderBar />
        <UserDashboard />
        <Newpage />
        {/* <TaskerView /> */}
    </div>
  )
}

export default tasker