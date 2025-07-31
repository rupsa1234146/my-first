// src/pages/Donate.jsx
import React from 'react';

const Donate = () => {
    return (
        <section className="donate-section">
            <h2>Support Our Mission</h2>
            <p>Your donation helps us save food and feed those in need. Every contribution matters.</p>
            <form className="donate-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="number" placeholder="Amount (₹)" required />
                <button type="submit" className="btn">Donate</button>
            </form>
        </section>
    );
};

export default Donate;