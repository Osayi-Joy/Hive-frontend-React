import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

function EmailVerificationPage() {

    const token = localStorage.getItem("token");


    return (
        <div className='container'>
            <FontAwesomeIcon icon = {faSquareEnvelope} size="2x" color='green' />
            <h1>Verify your email</h1>
            <h2>Hi there, a verification link has been sent to your email.</h2>
            <h2>Please, verify your email to have full access to Hive</h2>
            
        </div>
    );
};

export default EmailVerificationPage;