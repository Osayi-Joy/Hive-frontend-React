import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

function ResendEmailVerification() {

    const handleSenderVerificationLink = async () => {
        // Call API to send the verification link to the user's email address
        try {
            const response = await axios.get('/resendVerificationtoken');
            console.log(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className='container'>
            <FontAwesomeIcon icon={faSquareEnvelope} size="2x" color='green' />
            <h1>Verify your email</h1>
            <h2>Hi there, use the link below to send verification link to your email and start enjoying Hive.</h2>
            <button onClick={handleSenderVerificationLink}>Verify email</button>
        </div>
    );
}

export default ResendEmailVerification;