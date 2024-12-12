import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const registeredUser = {
    email: "user@vivasea.no",
    password: "password123",
    username: "JohnDoe", // Add a username for the registered user
};

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === registeredUser.email && password === registeredUser.password) {
            navigate("/dashboard", { state: { username: registeredUser.username } }); // Pass username as state
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="login">
            <h1>Member Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
