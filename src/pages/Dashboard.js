import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const location = useLocation();
    const { username } = location.state || { username: "Guest" }; // Fallback for username

    return (
        <div className="dashboard">
            <h1>Welcome, {username}!</h1>
            <p>Here is where you can manage your account and view updates.</p>
        </div>
    );
}

export default Dashboard;
