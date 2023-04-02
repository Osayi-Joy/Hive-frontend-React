import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const EmailConfirmationPage = () => {

 
    return (
        <div className='container'>
            <h1>
                <FontAwesomeIcon icon = {faCheckCircle} color='green' />
                Email Verification Successful
            </h1>
            <p>Hi there, your verification was successful, login enjoy your experince using Hive.</p>
            <Link to="/login">
            <button>Login</button>
            </Link>
        </div>
    );
};

export default EmailConfirmationPage;