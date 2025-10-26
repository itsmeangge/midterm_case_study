import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './LogReg.css';

const Login = () => {
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="brand-name">WearDistrict</h1>
                <h2 className="auth-title">Welcome Back</h2>
                <p className="auth-subtile">Login to continue shopping your favorites</p>

                <form className="auth-form" onSubmit={handleLogin}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your Email" required />

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" required />

                    <button type="submit" className="auth-btn">Login</button>
                </form>

                <p className="auth-footer">
                    Don’t have an account?{" "}
                    <Link to="/register" className="auth-link">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;