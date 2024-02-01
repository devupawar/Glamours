import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { login } from './ReduxWork/UserSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatcher = useDispatch()

  const navi = useNavigate()

  const handleLogin = () => {
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
    <div>
      <Form className='lform'>
        <h1 className='fhead'>Login</h1>
        <FormGroup className='formg'>
          <FormLabel>Email</FormLabel>
          <FormControl type='email' onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com'></FormControl>
        </FormGroup>
        <FormGroup className='formg'>
          <FormLabel>Password</FormLabel>
          <FormControl type='password' onChange={(e) => setPassword(e.target.value)} placeholder='*********'></FormControl>
        </FormGroup>

        <Button onClick={handleLogin} className='bt'>Login</Button>
        <p>Don't have an Account? <span onClick={() => navi('/register')}>register</span>
</p>
      </Form>
    </div>
  )
}

export default Login