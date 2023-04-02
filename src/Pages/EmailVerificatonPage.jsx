import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const EmailVerificationPage = ({ email }) => {

    const handleSenderVerificationLink = () => {
        // Call API to send the verification link to the user's email address
    };

    return (
        <div className='container'>
            <FontAwesomeIcon icon = {faSquareEnvelope} size="2x" color='green' />
            <h1>Verify your email</h1>
            <p>Hi there, use the link below to verify your email and start enjoying Hive.</p>
            <button onClick={handleSenderVerificationLink}>Verify email</button>
        </div>
    );
};

export default EmailVerificationPage;