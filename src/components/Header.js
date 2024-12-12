import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">Vivasea</div>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    );
    /*
        return (
        <header className="header">
            <div className="logo">Vivasea</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </header>
    );
    */
}

export default Header;
