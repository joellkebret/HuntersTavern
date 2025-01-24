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
        try {
            const res = await axios.post("http://localhost:7000/Sign-up", { email, password, userName });
            
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
            console.error(e);
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
                            <input className="email_input" type="email" placeholder="Email" required />
                        </div>
                        <div className="signup_username">
                            <p className="signup_p">Username</p>
                            <input className="username_input" type="text" placeholder="Username" required />
                        </div>
                        <div className="signup_password">
                            <p className="signup_p">Password</p>
                            <input className="password_input" type="password" placeholder="Password" required />
                        </div>
                        <button className="signup_button" type="submit">Sign Up</button>
                    </form>
                    <p className="or">OR</p>
                    <Link className="signup_login-link" to="/Login">Already have an account? Log in</Link>
                </div>

                <div className="signup_rightside">
                    <img src="./leoriokuripika-signup.png" alt="signup" className="signup_img" />
                </div>
            </div>


        </div>
    );
}

export default SignupPage;
