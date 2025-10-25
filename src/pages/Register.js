import React from "react";
import { Link } from "react-router-dom";
import './LogReg.css';

const Register = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="brand-name">WearDistrict</h1>
                <h2 className="auth-title">Create Account</h2>
                <p className="auth-subtitle">Join us and elevate your wardrobe today</p>

                <form className="auth-form">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" required />

                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />

                    <label>Password</label>
                    <input type="password" placeholder="Create a password" required />

                    <button type="submit" className="auth-btn">Register</button>
                </form>

                <p className="auth-footer">
                    Already have an account?{" "}
                    <Link to="/login" className="auth-link">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;