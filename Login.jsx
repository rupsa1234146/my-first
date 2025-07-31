// src/pages/Login.jsx
import React from 'react';

const Login = () => {
    return (
        <section className="auth-section">
            <h2>Login</h2>
            <form className="auth-form">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" className="btn">Login</button>
            </form>
        </section>
    );
};

export default Login;