import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../styles/SignupPage.css';

function SignupPage() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        console.log("Submitting form with:", { email, userName, password });

        try {
            const res = await axios.post("http://localhost:7001/Sign-up", { 
                email, 
                password, 
                userName 
            });

            if (res.data === "exist") {
                alert("User already exists!");
            } else if (res.data === "username-exists") {
                alert("Username already taken. Please choose another one.");
            } else if (res.data === "signup-success") {
                alert("Signup successful!");
                history("/Login");
            }
        } catch (e) {
            alert("Error signing up. Please try again.");
            console.error("Signup error:", e);
        }
    }

    return (
        <div className="signup">
            <div className="signup_content">
                <div className="signup_leftside">
                    <h1 className="signup_h1">Sign Up</h1>
                    <form className="signup_form" onSubmit={submit}>
                        <div className="signup_email">
                            <p className="signup_p">Email</p>
                            <input 
                                className="email_input" 
                                type="email" 
                                placeholder="Email" 
                                required 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div> 

                        <div className="signup_username">
                            <p className="signup_p">Username</p>
                            <input 
                                className="username_input" 
                                type="text" 
                                placeholder="Username" 
                                required 
                                onChange={(e) => setUserName(e.target.value)} 
                            />
                        </div>

                        <div className="signup_password">
                            <p className="signup_p">Password</p>
                            <input 
                                className="password_input" 
                                type="password" 
                                placeholder="Password" 
                                required 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>

                        <button className="signup_button" type="submit">Sign Up</button>
                    </form>

                    <div className="signup_bottom">
                        <p className="or">OR</p>
                        <Link className="login_signup" to="/Login">
                            Already have an account? <span className="underline">Login</span>
                        </Link>
                    </div>
                </div>

                <div className="signup_rightside">
                    <img src="./leoriokuripika-signup.png" alt="signup" className="signup_img" />
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
