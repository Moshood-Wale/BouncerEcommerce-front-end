import React, { useState } from "react";
import Laptop from "./LaptopLogo";
import { Link } from 'react-router-dom';
import RegisterWrapper from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from "react-router";


const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

function Register() {
    
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
    const [error, setError] = useState(null)

    const [passwordShown, setPasswordShown] = useState(false);
    const [resetPasswordShown, setresetPasswordShown] = useState(false);
    
    function signUp(e) {
        e.preventDefault();

        const baseUrl = "https://bouncerb.herokuapp.com/api/v1/register/";
        const data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
        };
        const config = {
            headers: {
                    'Content-Type': 'application/json'
                }
        }

        axios
            .post(baseUrl, data, config)    
            .then(response => {
                    toast("Registration Successful. Please check your mail to verify the otp code sent to you.", {type: "success"})
                    console.log("error")
                    history.push("/verify");
                }, err => {
                console.log({err});
                if (err.response.status === 400) {
                    toast("Registration Failed because email already exists or password is too short.", {type: "error"})
                }
            })
            .catch(error => {
                console.log(error);
                setError(error);
                toast("Bad request", {type: "error"})
              })
            
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const resetTogglePassword = () => {
        setresetPasswordShown(!resetPasswordShown);
    }
    
    return (
        <RegisterWrapper>
        <div className="main-container">
            <div className="main">
                <Laptop />
                <div className='sub-main'>
                    <div className="heading">
                        <div>
                            <Link className="sign-in" to="/login">Sign in</Link>
                        </div>
                        <div className="register">
                            <Link to="/register">Register</Link>
                            <p className="register-in-line"></p>
                        </div>
                    </div>
                    <div className="first-name">
                        <label for="text" required>First name:</label><br />
                        <input type="text" onChange={(e)=>setFirstName(e.target.value)}/> <br />
                    </div>
                    <div className="last-name">
                        <label for="text" required>Last name:</label><br />
                        <input type="text"  onChange={(e)=>setLastName(e.target.value)}/> <br />
                    </div>
                    <div className="email">
                        <label for="text" required>Email:</label><br />
                        <input type="email"  onChange={(e)=>setEmail(e.target.value)}/> <br />
                    </div>
                    <div className="password">
                        <div class="password-eye">
                            <label for="password">Password:</label> 
                            <Link to="#"><i className="eye" onClick={togglePassword}>{passwordShown?eye:eyeSlash}</i></Link>
                        </div>
                        <input type={passwordShown ? "text": "password"} required  onChange={(e)=>setPassword(e.target.value)}/> <br />
                    </div>
                    <div className="password">
                        <div class="password-eye">
                            <label for="password">Confirm Password:</label> 
                            <Link to="#"><i className="eye" onClick={resetTogglePassword}>{resetPasswordShown?eye:eyeSlash}</i></Link>
                        </div>
                        <input type={resetPasswordShown ? "text": "password"} required  /> <br />
                    </div>

                    <input type="submit" value="Sign Up" onClick={signUp} />

                    <div className="bottom">
                        <div>
                            <Link className="vendor" to="/vendor">Become a vendor</Link>
                        </div>
                         <div className="forgot-password">
                             <Link to="/forgot-password">Forgot password</Link>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        </RegisterWrapper>
    );
}

export default Register;
