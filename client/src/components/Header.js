// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>Movie App</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add">Add Movie</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
