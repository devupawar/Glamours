import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login } from './ReduxWork/UserSlice';
import { useDispatch } from 'react-redux';
import { PiLockKeyOpenFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import loginimg from '../src/images/loginform.jpg';
import '../src/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatcher = useDispatch();
  const navi = useNavigate();

  const handleLogin = () => {
    // Your login logic here
    const loginData = {
      CustomerEmail: email,
      CustomerPassword: password,
  };
  axios.post('http://localhost:5000/api/dologin', loginData)

  .then((response) => {
    console.log(response.data);
    alert('Login successful');
    dispatcher(login(response.data))
    navi('/home')
  })
  .catch((error) => {

    console.error('Login failed', error);
    alert('Login failed');
  });
};

  return (
    <div className="baground">
      <div className="login-container">
        <Form className='lform'>
          <div className="image-container">
            <img src={loginimg} alt="Login" />
          </div>
          <div className="form-content">
            <h1 className='fhead'>Login</h1>
            <FormGroup className='formg'>
              <FormLabel>Email</FormLabel>
              <FormControl type='email' onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com '></FormControl><FaUser />
            </FormGroup>
            <FormGroup className='formg'>
              <FormLabel>Password</FormLabel>
             <FormControl type='password'  onChange={(e) => setPassword(e.target.value)} placeholder='*********' >
              </FormControl>
              
            </FormGroup>
            <Button onClick={handleLogin} className='lbt'>Login</Button>
            <p>Don't have an Account? <span onClick={() => navi('/register')}>register</span></p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
