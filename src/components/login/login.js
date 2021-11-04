import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginWrapper } from "./Login.style";
import banner from "./banner.svg";
import image from "../login/image.svg"
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        const login = { email, password }
    }

    const [passwordShown, setPasswordShown] = useState(false)
    const [passwordHidden, setPasswordHidden] = useState(true)
    const togglePasswordVisiblity = () => {
            setPasswordShown(passwordShown ? false : true);
      };
    
    const [error, setError] = useState(null)

    const signIn = (e) => {
        e.preventDefault();

        const baseURL = "https://bouncerb.herokuapp.com/api/v1/login/";
        const data = {
            email: email,
            password: password,
        };


        axios 
            .post(baseURL, data)
            .then(response => {
                history.push("/")
            }, err => {
                console.log({err});
                if (err.response.status === 400) {
                    toast("Invalid credentials", {type: "error"})
                }
            }
            )
            .catch(error => {
                console.log(error);
                setError(error);
                toast("Bad request", {type: "error"})
            })
        
    }

    return (
        <LoginWrapper>
            <div className="logo">
              <Link className="home-btn" to="/">
                <img src={image} alt="logo" />
              </Link>
            </div>
            <div className="login-head">
                <div className="image-banner">
                    <img src={banner} alt="logo" />
                </div>

                <form onSubmit={handleSubmit} method="post" >
                    <div className="sign-in">
                        <div>
                            <Link className="sign-btn" to="/login">Sign in</Link>
                        </div>
                        <div>
                            <Link className="register-btn" to="/register">Register</Link>
                        </div>
                    </div>
                    <label>email:</label>
                    <input type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                    <br />
                    <div className="password">
                        <div>
                            <label>password:</label>
                        </div>
                        <div>
                            <FaEyeSlash color="#03d7fc"  onClick={togglePasswordVisiblity}/>
                        </div>

                    </div>

                    <input type={passwordShown ? "text" : "password"} 
                        required
                        value={password}

                        onChange={(e) => setPassword(e.target.value)}
                      
                        /> <br />
                    <button type="submit" onClick={signIn}>submit</button>

                    
                    <div className="base">
                        <div>
                            <Link className="base-content" to="/">Become a vendor</Link>
                        </div>
                        <div>
                            <Link className="base-content" to="/forgot-password">Forgot Password</Link>
                        </div>
                    </div>

                </form>

            </div>
        </LoginWrapper>
    );
}

export default Login;
