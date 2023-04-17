import React from 'react';
import Modal from '../Modal/Model'
import "./ServiceText.css";

function ServiceText(props) {
    
    return (
        <div className="service-text-service-text" >
            <div className="service-text-card-text-work">
                    <p className="service-text-home-cleaning-servic">{props.jobType}</p>
                    <div className="service-text-home-text">
                        <div className="service-text-frame-16472x">
                            <p className="service-text-request-date">Request Date</p>
                            <p className="service-text-feb-620200750x">{props.taskDuration}</p>
                        </div>
                        <div className="service-text-frame-16473x">
                            <p className="service-text-budget-rate">Budget Rate</p>
                            <p className="service-text-n8000x">N{props.budgetRate}</p>
                        </div>
                        <div className="service-text-frame-16474x">
                            <p className="service-text-job-type">Job Type</p>
                            <p className="service-text-cleaning">{props.jobType}</p>
                        </div>
                        <div className="service-text-frame-16475x">
                            <p className="service-text-posted">Posted</p>
                            <p className="service-text-client">{props.status}</p>
                        </div>
                        <div className="service-text-frame-16476x">
                            <p className="service-text-location">Location</p>
                            <p className="service-text-festac-lagos">{props.taskAddress}</p>
                        </div>
                        <div className="service-text-frame-16477x">
                            <p className="service-text-task-duration">Task Duration</p>
                            <p className="service-text-hrs">{props.estimatedTime}hrs</p>
                        </div>
                    </div>
                </div>
            
            <Modal {...props}/>
        </div>
    );
}

export default ServiceText;
