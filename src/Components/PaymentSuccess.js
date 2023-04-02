import './PaymentSuccess.css'

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const PayButton = () => {
    let navigate = useNavigate();


    const redirect = async (e) => {
        const response = await fetch("http://localhost:5000/users/verify-payment", {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI4NDA3MDM5N2FlMjQxZTkyY2ZlZDMiLCJ1c2VybmFtZSI6InJhbmppdCIsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjgwMzU5NTQzfQ.nTiGUKsGh_euiUhVTeyssZnCfWKI4akJ_LRtl-bm-yI'
            }
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // const response = await fetch("http://localhost:5000/users/register", {
            //     method: 'POST',

            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI4NDA3MDM5N2FlMjQxZTkyY2ZlZDMiLCJ1c2VybmFtZSI6InJhbmppdCIsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjgwMzU5NTQzfQ.nTiGUKsGh_euiUhVTeyssZnCfWKI4akJ_LRtl-bm-yI'
            //     },
            // });
            // const json = await response.json();
            navigate("/login/register");
        }
        else {
            navigate("/");//navigate to home page
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            redirect();
        }, 5000);

        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <div id="paymentSuccessBody">
                <div id="paymentSuccessContainer">
                    <div id="tickBox">
                        <div id="tick"></div>
                    </div>
                    <div id="paymentSuccessText">Your payment was successful</div>

                </div>
            </div>
        </>
    );
};

export default PayButton;