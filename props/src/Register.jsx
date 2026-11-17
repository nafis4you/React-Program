import React, { useState } from "react";
import "./assets/Login.css";

const Register = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({...formData,[name]: value, });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Password and Confirm Password do not match!");
            return;
        }

        console.log(formData);

        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="login-container">
            <div className="login-box">

                <h2>Create Account 👋</h2>

                <p className="login-subtitle">
                    Please register your account
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label>Name</label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                   
                    <div className="input-group">
                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                   
                    <div className="input-group">
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                   
                    <div className="input-group">
                        <label>Confirm Password</label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn" >
                        Register
                    </button>

                </form>

                <p className="signup-text">
                    Already have an account? <a href="#">Login</a>
                </p>

            </div>
        </div>
    );
};

export default Register;