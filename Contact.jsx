// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
    return (
        <section className="contact-section">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="4" required></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact; 