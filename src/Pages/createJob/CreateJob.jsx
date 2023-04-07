import React from "react";
import "./CreateJob.css";
import DisplayImage from "../../Assets/create-task-image_svg.svg";
import WelcomeIcon from "../../Assets/welcome-icon.svg";
import NotificationBox from "../../Component/NotificationBox/NotificationBox";

const CreateJob = () => {
  
  return (
    <div className="create-job-container">
      <NotificationBox/>
      <div className="task-creation-template">
        <div className="welocome-text-logo">
          <h5>Welcome, Judith </h5>
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
                <select name="" id="">
                  <option value="">select</option>
                  <option value="">Home Cleaning</option>
                  <option value="">Grocery Shopping</option>
                  <option value="">Gardening</option>
                  <option value="">Delivery Service</option>
                  <option value="">Painting</option>
                  <option value="">Electical / Wiring</option>
                  <option value="">Other</option>
                </select>
              </div>
              <div className="service-request-type">
                <label htmlFor="">Service Request Type</label>
                <div className="check-text">
                  <input type="checkbox" name="" id="" /> <span>Right now</span>
                </div>
                <div className="check-text">
                  <input type="checkbox" name="" id="" />{" "}
                  <span>Later Request</span>
                </div>
              </div>
              <div className="service-address">
                <label htmlFor="">Service Address</label>
                <div className="input-get-address">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Type Location"
                  />
                  <button>Use current address</button>
                </div>
              </div>
              <div className="delivery-address">
                <label htmlFor="">Delivery Address</label>
                <div className="input-get-address">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Type Location"
                  />
                  <button>Use current address</button>
                </div>
              </div>
              <div className="service-rate">
                <label htmlFor="">Service Rate</label>
                <div className="rate-inputs">
                  <input
                    type="text"
                    className="min-amout"
                    placeholder="Enter min amt"
                  />
                  <input
                    type="text"
                    className="min-amout"
                    placeholder="Enter max amt"
                  />
                  <select name="" id="">
                    <option value="">NGN</option>
                    <option value="">GBP</option>
                    <option value="">DOLLAR</option>
                    <option value="">EURO</option>
                    <option value="">YEN</option>
                  </select>
                </div>
              </div>
              <div className="task-validity-period">
                <label htmlFor="">
                  Task Validity Period <span>(optional)</span>
                </label>
                <input type="date" name="" id="" />
              </div>
              <div className="task-duration">
                <label htmlFor="">
                  Task Duration <span>(optional)</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter estimated time for task perfromance"
                />
              </div>
              <div className="task-description">
                <label htmlFor="">Task description</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button id="create-task-button" type="submit">
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
};

export default CreateJob;
