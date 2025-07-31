// src/pages/Logout.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
    useEffect(() => {
        // Clear any login-related local storage or session data here
        localStorage.removeItem('user'); // Optional: clear user session data
    }, []);

    return (
        <section className="logout-section">
            <h2>You have been logged out successfully.</h2><br></br>
            <Link to="/" className="btn">Back to Home</Link>
        </section>
    );
};

export default Logout; 