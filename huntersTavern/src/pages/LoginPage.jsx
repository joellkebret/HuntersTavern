import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../styles/LoginPage.css'


function Login() {

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    async function submit(e) {
        e.preventDefault();
    
        try {
            const res = await axios.post("http://localhost:7000/Login", {
                email, 
                password
            });
    
            if (res.data.message === "exist") {
                localStorage.setItem("userEmail", email);
                localStorage.setItem("userName", res.data.userName); // Store username from server response
                history("/", { state: { id: res.data.userName } });
            } else if (res.data.message === "notexist") {
                alert("User does not exist!");
            } else if (res.data.message === "wrong-password") {
                alert("Incorrect password. Please try again!");
            }
        }
        catch (e) {
            console.error("Error occurred:", e);
            alert("Something went wrong!");
        }
    }
    

    return (
        <div className="login">
            
         <div className="login_content">
           <div className="testing">
           <div className="login_leftside">

<h1 className="login_h1">Login</h1>


<form className="login_btn" onSubmit={submit}>
    <div className="login_email" >
    <p className="login_p">Email</p>
    <input className="email_form" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
    </div>
    <div  className="login_password">
    <p className="login_p">Password</p>
    <input className="password_form" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
    </div>
    <button className="login_login_btn" type="submit">Login</button>
</form>

<br />
<p className="or">OR</p>
<br />

<Link className="login_signup-3" to="/Sign-up">New User? </Link>
<Link className="login_signup-2" to="/Sign-up">Sign-up</Link>
    </div>

 <div className="login_rightside login_img">
    <img src="./gonfishing-login.png" alt="login" className="gon_img"/>
 </div>
           </div>

            </div>
            </div>
       
        
    )
}

export default Login