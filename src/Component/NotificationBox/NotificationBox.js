import React from "react";
import "./NotificationBox.css";

const NotificationBox = () => {
  return (
    <div className="notification-box">
      <div className="title">
        <h4>Notification</h4>
      </div>
      <div className="time">Feb 6, 2023 - 10:30AM </div>
      <div className="notifications">
        <div className="taskInfo">
          <div className="doer_taskInfo_container">
            <h2 className="doer-name">Chigozie Eminike</h2>
            <h2 className="task-comment">
              {" "}
              He is workiing on your cleaning task
            </h2>
          </div>
          <div className="taskStatus">
            <p>Ongoing</p>
          </div>
        </div>
        <hr />
        <div className="taskInfo">
          <div className="doer_taskInfo_container">
            <h2 className="doer-name">Chigozie Eminike</h2>
            <h2 className="task-comment">
              {" "}
              He is workiing on your cleaning task
            </h2>
          </div>
          <div className="taskStatus">
            <p>Ongoing</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default NotificationBox;
