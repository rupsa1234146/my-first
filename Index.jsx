// src/pages/Index.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <>
            <section className="hero">
                <h2>Saving Food, Feeding Lives</h2>
                <p>Join our mission to reduce food waste and fight hunger.</p>
                <Link to="/donate" className="btn">Donate Now</Link>
            </section>
        </>
    );
};

export default Index;