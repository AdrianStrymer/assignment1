import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";

const LoginPage = props => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(userName, password);
    };

    let location = useLocation();

    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <div className="form-container" style={{ maxWidth: '400px', margin: 'auto', padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" gutterBottom>Login Page</Typography>
            <TextField 
                id="username" 
                label="Username" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                value={userName}
                onChange={e => setUserName(e.target.value)} 
            />
            <TextField 
                id="password" 
                label="Password" 
                type="password" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                value={password}
                onChange={e => setPassword(e.target.value)} 
            />
            <Button variant="contained" color="primary" onClick={login}>
                Log in
            </Button>
            <Typography variant="body1">Not Registered? <Link to="/signup">Sign Up!</Link></Typography>
        </div>
    );
};

export default LoginPage;