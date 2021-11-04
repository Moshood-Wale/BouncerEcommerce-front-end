import { Link } from 'react-router-dom';
import Laptop from './LaptopLogo';
import './styles/login.css';
import './styles/forget.css';
import NavBar from './NavBar';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from "react-router";
import { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const history = useHistory();
    const [error, setError] = useState(null)

    function submit(e) {
        e.preventDefault();

        const baseUrl = "https://bouncerb.herokuapp.com/api/v1/forgot-password/";
        const data = { email: email };

        axios
            .post(baseUrl, data)
            .then(response => {
                toast("An OTP has been sent to your Email to reset your password.", { type: "success" })
                console.log("error")
                history.push("/reset-password ");
            }, err => {
                console.log({ err });
                if (err.response.status === 400) {
                    toast("Invalid Credentials. Confirm your Email address", { type: "error" })
                }
            })
            .catch(error => {
                console.log(error);
                setError(error);
                toast("Bad request", { type: "error" })
            })

    }

    return (
        <div className="main-container">
            <NavBar />
            <div className="main">
                <Laptop />
                <div className='sub-main'>
                    <div class="heading">
                        <div>
                            <Link class="sign-in" to="/forgot">Forgot Password</Link>
                            <p class="password-in-line"></p>
                        </div>
                    </div>
                    <div className="username">
                        <label for="text" >Email:</label><br />
                        <input type="text" onChange={(e) => setEmail(e.target.value)} required /> <br />
                    </div>

                    <input type="submit" value="Submit" onClick={submit} />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;