import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header>
            <nav>
                <h1>Hopeful Harvests</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/donate">Donate</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;