import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Register = () => {
   const[fullname,setfullName]=useState("")
   const[email,setemail]=useState("")
   const[mobile,setmobile]=useState("")
   const[address,setaddress]=useState("")
   const[password,setPassword]=useState("")

   const navi = useNavigate()

   function submitForm(){
      const customerdata={
      CustomerName:fullname,
      CustomerEmail:email,
      CustomerMobile:mobile,
      CustomerAddress:address,
      CustomerPassword:password
    }
    PostData(customerdata)
   }
   const PostData=(customerdata)=>{
    axios.post("http://localhost:5000/api/addcustomer",customerdata)
    .then((result) => {
      alert("Customer Saved")
    }).catch((err) => {
      alert('err')
    });
   }
     return (
    <div>

      <Form className='form'>
        <h1 className='fhead'>Sign In</h1>
      <FormGroup className='formg'>
        <FormLabel >Enter Your Name</FormLabel>
        <FormControl onChange={(e)=>setfullName(e.target.value)} type='text' placeholder='Enter full name'></FormControl>
      </FormGroup>
      <FormGroup className='formg'>
        <FormLabel>Email</FormLabel>
        <FormControl onChange={(e)=>setemail(e.target.value)} type='email' placeholder='abc@gmail.com'></FormControl>
      </FormGroup>
      <FormGroup className='formg'>
        <FormLabel>Mobile Number</FormLabel>
        <FormControl onChange={(e)=>setmobile(e.target.value)} type='number' placeholder='0987646467'></FormControl>
      </FormGroup>
      <FormGroup className='formg'>
        <FormLabel>Address</FormLabel>
        <FormControl onChange={(e)=>setaddress(e.target.value)} type='text' placeholder='eg.build no,street,city'></FormControl>
      </FormGroup>
      <FormGroup className='formg'>
        <FormLabel>Password</FormLabel>
        <FormControl onChange={(e)=>setPassword(e.target.value)} placeholder='********' type='password'></FormControl>
      </FormGroup>
      <Button onClick={()=>submitForm()} className='bt'>Submit</Button><br></br>
      <span>Already Register?<p onClick={() => navi('/login')}>login</p></span>
      </Form>
    </div>
  )
}

export default Register