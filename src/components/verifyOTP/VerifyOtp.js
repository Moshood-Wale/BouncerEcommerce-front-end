import React, { useState } from 'react';
import Laptop from "./LaptopLogo";
import { Link } from 'react-router-dom';
import VerifyOtpWrapper from "./style";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from "react-router";


function VerifyOtp() {

    const [otp_code, setOtpCode] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();
    const [error, setError] = useState(null);

    function verify(e) {
        e.preventDefault();

        const baseUrl = "https://bouncerb.herokuapp.com/api/v1/otp/verify/";
        const data = {
            otp_code: otp_code,
            email: email,
        };
        const config = {
            headers: {
                    'Content-Type': 'application/json'
                 
                }
        }
        
        axios
            .post(baseUrl, data, config)    
            .then(response => {
                    toast("Email Verfication Successful.", {type: "success"})
                    console.log("error")
                    history.push("/login");
                }, err => {
                console.log({err});
                if (err.response.status === 400) {
                    toast("Email Verfication Unsuccessful.", {type: "error"})
                }
            })
            .catch(error => {
                console.log(error);
                setError(error);
                toast("Bad request", {type: "error"})
              })
            
    }


    return (
        <div>
            <VerifyOtpWrapper>
        <div className="main-container">
            <div className="main">
                <Laptop />
                <div className='sub-main'>
                    <div className="heading">
                        <div>
                            <Link className="sign-in" to="/login">Sign in</Link>
                        </div>
                        <div className="register">
                            <Link className="veri" to="/verify">Verify otp</Link>
                            <p className="register-in-line"></p>
                        </div>
                    </div>
                    <div className="otp-code">
                        <label for="text" required>OTP code:</label><br />
                        <input type="text" onChange={(e)=>setOtpCode(e.target.value)}/> <br />
                    </div>
                    
                    <div className="email">
                        <label for="text" required>Email:</label><br />
                        <input type="email"  onChange={(e)=>setEmail(e.target.value)}/> <br />
                    </div>
                    <button className="butt" onClick={verify}>Verify</button>
                    {/* <input type="submit" value="Verify" onClick={verify} /> */}

                    <div className="bottom">
                        <div>
                            <Link className="vendor" to="/vendor">Become a vendor</Link>
                        </div>
                         <div className="forgot-password">
                            <Link className="forgot" to="/forgot-password">Forgot password</Link>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        </VerifyOtpWrapper>
        </div>
    )
}

export default VerifyOtp;
