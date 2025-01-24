import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function SignupPage() {

    const [email,setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password,setPassword] = useState('')

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
            }
        } catch (e) {
            alert("Error signing up. Please try again.");
            console.error(e);
        }
    }

    return (
        <div className='Signup'>
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="userName" onChange={(e) => setUserName(e.target.value)} placeholder="Username" required />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/Login">Login Page</Link>
        </div>
    )
}

export default SignupPage