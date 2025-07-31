// src/pages/About.jsx
import React from 'react';

const About = () => {
    return (
        <section className="about-section">
            <h2>About Our NGO</h2>
            <p>
                Hopeful Harvests is dedicated to rescuing surplus food and redistributing it to those in need.
                Our goal is to eliminate food waste and hunger, one meal at a time.
            </p>

            <div className="connect-section">
                <h3>Connect With Us</h3><br></br>
                <a href="/contact" className="btn">Get in Touch</a>
            </div>
        </section>
    );
};

export default About; 