import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import AuthService from '../services/Auth';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const token = await AuthService.login(username, password);
            
            document.cookie = `token=${token}; path=/`;
            
            navigate("/feature-toggles");
            window.location.reload();
        } catch (error) {
            console.error("Error during login: ", error);
        }
    };
    

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Username: 
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br/><br/>
                <label>
                    Password: 
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
