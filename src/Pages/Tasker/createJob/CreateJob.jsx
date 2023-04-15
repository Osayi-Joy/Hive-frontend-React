import React, { useState, useEffect } from "react";
import "./CreateJob.css";
import DisplayImage from "../../../Assets/create-task-image_svg.svg";
import WelcomeIcon from "../../../Assets/welcome-icon.svg";
import NotificationBox from "../../../Component/NotificationBox/NotificationBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ProfileModal } from "../../../Component/profileModal/ProfileModal";
import jwt_decode from "jwt-decode";
import "react-datepicker/dist/react-datepicker.css";

function CreateJob() {
 
  const [jobType, setJobType] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [budgetRate, setBudgetRate] = useState("");
  const [taskAddress, setTaskAddress] = useState("");
  const [taskDeliveryAddress, setTaskDeliveryAddress] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [taskDuration, setTaskDuration] = useState("");
  const [walletBalance, setWalletBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();



  const token = localStorage.getItem("token");

  const handleBudgetChangeChange = (event) => {
    const value = event.target.value;
    const numberValue = parseFloat(value);
    setBudgetRate(numberValue);
  };

  const handleEstimatedTimeChange = (event) => {
    const value = event.target.value;
    const numberValue = parseFloat(value);
    setEstimatedTime(numberValue);
  };

  useEffect(() => {
    // console.log(openNotification)
    setLoading(true);
    axios
      .get("http://localhost:8080/transaction/walletBalance", {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setWalletBalance(response.data.result.accountBalance);
        const decodedToken = jwt_decode(token);
        const fullName = decodedToken.fullName;
        console.log(walletBalance);
        setUsername(fullName);
  
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [token, walletBalance]);

  const handleSubmit = async (event) => {
    console.log("handleSubmit trigger");
    event.preventDefault();
    const taskDto = {
      jobType,
      taskDescription,
      budgetRate,
      taskAddress,
      taskDeliveryAddress,
      estimatedTime,
      taskDuration,
    };
    console.log();
    if (walletBalance < taskDto.budgetRate) {
      navigate("/wallet");
    } else {
      axios
        .post("http://localhost:8080/tasks/", taskDto, {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // Handle successful task creation
          console.log(response.data.result);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="create-job-ccontainer">
      {/* <NotificationBox toggleNotification={toggleNotification} settoggleNotification={settoggleNotification} /> */}
      {/* <ProfileModal/> */}
      <div className="task-creation-template">
        <div className="welocome-text-logo">
          <h5>Welcome, {username} </h5>
          <img src={WelcomeIcon} alt="" />
        </div>
        <div className="form-image-container">
          <div className="task-form">
            <div className="form-header">
              <h6>Everyday life made easier</h6>
              <p>Create Job Post for Service providers</p>
            </div>
            {/* start task form  */}
            <form action="">
              <div className="service-type">
                <label htmlFor="">What Type of Service</label>
                <select
                  id=""
                  name="jobType"
                  value={jobType}
                  onChange={(event) => setJobType(event.target.value)}
                >
                  <option value="">select</option>
                  <option value="home_cleaning">Home Cleaning</option>
                  <option value="grocery shopping">Grocery Shopping</option>
                  <option value="gardening">Gardening</option>
                  <option value="delivery service">Delivery Service</option>
                  <option value="painting">Painting</option>
                  <option value="electrical_wiring">Electrical / Wiring</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="service-address">
                <label htmlFor="">Service Address</label>
                <div className="input-get-address">
                  <input
                    type="text"
                    id="taskAddress"
                    name="taskAddress"
                    placeholder="Type Location"
                    value={taskAddress}
                    onChange={(event) => setTaskAddress(event.target.value)}
                  />
                  <button>Use current address</button>
                </div>
              </div>
              <div className="delivery-address">
                <label htmlFor="">Delivery Address</label>
                <div className="input-get-address">
                  <input
                    type="text"
                    id="taskDeliveryAddress"
                    name="taskDeliveryAddress"
                    placeholder="Type Location"
                    value={taskDeliveryAddress}
                    onChange={(event) =>
                      setTaskDeliveryAddress(event.target.value)
                    }
                  />
                  <button>Use current address</button>
                </div>
              </div>
              <div className="service-rate">
                <label htmlFor="">Service Rate</label>
                <div className="rate-inputs">
                  <input
                    type="text"
                    id="budgetRate"
                    name="budgetRate"
                    className="min-amout"
                    placeholder="Enter amount"
                    value={budgetRate}
                    onChange={handleBudgetChangeChange}
                  />
                  <select name="" id="">
                    <option value="NGN">NGN</option>
                    <option value="GBP">GBP</option>
                    <option value="DOLLAR">DOLLAR</option>
                    <option value="EURO">EURO</option>
                    <option value="YEN">YEN</option>
                  </select>
                </div>
              </div>
              <div className="task-validity-period">
                <label htmlFor="">
                  Task Validity Date <span>(optional)</span>
                </label>

                <input
                  type="datetime-local"
                  id="taskDuration"
                  name="taskDuration"
                  value={taskDuration}
                  onChange={(event) => setTaskDuration(event.target.value)}
                />
              </div>
              <div className="task-duration">
                <label htmlFor="">
                  Task Estimated Period <span>(optional)</span>
                </label>
                <input
                  type="text"
                  id=""
                  name="estimatedPeriod"
                  value={estimatedTime}
                  onChange={handleEstimatedTimeChange}
                  placeholder="Enter estimated time for task perfromance"
                />
              </div>
              <div className="task-description">
                <label htmlFor="">Task description</label>
                <textarea
                  cols="30"
                  rows="10"
                  name="taskDescription"
                  id="taskDescription"
                  value={taskDescription}
                  onChange={(event) => setTaskDescription(event.target.value)}
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                id="create-task-button"
                type="submit"
              >
                Add Task
              </button>
            </form>
          </div>
          {/* RIGHT COLUMN SECTIONS  */}
          <div className="display-image-section">
            <div className="image-container">
              <img src={DisplayImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateJob;
