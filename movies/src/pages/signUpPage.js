import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { TextField, Typography, Button} from "@mui/material";

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const register = () => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const consecutiveSequence = /(.)\1\1/;
  
    if (!strongPasswordRegex.test(password)) {
      setErrorMessage("Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, a number, and a special character.");
      return;
    }
    if (consecutiveSequence.test(password)) {
      setErrorMessage("Password should not contain sequences of three or more repeated characters.");
      return;
    }
    if (password !== passwordAgain) {
      setErrorMessage("The passwords entered do not match. Please ensure both passwords are identical.");
      return;
    }
    if (!validateUsername(userName)) {
        setErrorMessage("Username must be 3-15 characters and can only contain letters and numbers.");
        return;
      }
  
    context.register(userName, password);
    setRegistered(true);
    setErrorMessage(""); 
  }

  const validateUsername = (username) => {
    const usernameRegex = /^[A-Za-z0-9]{3,15}$/;
    return usernameRegex.test(username);
  };

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: '#f5f5f5'
    }}>
      <Typography variant="h4" gutterBottom>Sign Up</Typography>
      {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
      <TextField 
          label="Username" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={userName}
          onChange={e => setUserName(e.target.value)} 
      />
      <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={password}
          onChange={e => setPassword(e.target.value)} 
      />
      <TextField 
          label="Confirm Password" 
          type="password" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={passwordAgain}
          onChange={e => setPasswordAgain(e.target.value)} 
      />
      <Button variant="contained" color="primary" onClick={register}>
          Sign Up
      </Button>
    </div>
  );
};

export default SignUpPage;