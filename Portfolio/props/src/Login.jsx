import React, { useState } from "react";
import "./assets/Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value, });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            email: "",
            password: "",
        });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Welcome Back 👋</h2>
                <p className="login-subtitle">
                    Please login to your account
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label>Email</label>

                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>

                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="login-options">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>

                <p className="signup-text">
                    Don't have an account? <a href="#">Register</a>
                </p>
            </div>
        </div>
    );
};

export default Login;