import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, FormGroup, FormLabel, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../src/register.css';

const Register = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const submitForm = () => {
    const customerData = {
      CustomerName: fullname,
      CustomerEmail: email,
      CustomerMobile: mobile,
      CustomerAddress: address,
      CustomerPassword: password
    };
    postData(customerData);
  };

  const postData = (customerData) => {
    axios.post("http://localhost:5000/api/addcustomer", customerData)
      .then((result) => {
        alert("Customer Saved");
      })
      .catch((err) => {
        alert('Error');
      });
  };

  return (
    <>
      { <Container fluid className='register-container'>
        <Row className='justify-content-center'>
          <Col md={6} className='register-form-container'>
            <h1 className='register-header'>Sign Up</h1>
            <Form>
              <FormGroup>
                <FormLabel>Full Name</FormLabel>
                <Form.Control
                  type='text'
                  placeholder='Enter full name'
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <Form.Control
                  type='email'
                  placeholder='abc@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Mobile Number</FormLabel>
                <Form.Control
                  type='tel'
                  placeholder='0987646467'
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Address</FormLabel>
                <Form.Control
                  type='text'
                  placeholder='e.g. Building no, Street, City'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Password</FormLabel>
                <Form.Control
                  type='password'
                  placeholder='********'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button variant='primary' onClick={() => submitForm()} className='register-button'>Submit</Button>
            </Form>
            <p className='already-registered-text'>
              Already Registered? <span onClick={() => navigate('/login')}>Login</span>
            </p>
          </Col>
        </Row>
      </Container > }
    </>
  );
};

export default Register;
