import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUsers } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import '../src/dashboard.css'

const Dashboard = () => {
  const[custcount,setcustcount]=useState(0)
  const[AppointmentCount,setAppointmentCount]=useState(0)
  const[serviceCount,setserviceCount]=useState(0)

  useEffect(()=>{
    axios.get('http://localhost:5000/api/getCustomerCount')
    .then((result) => {
      setcustcount(result.data.count)
    }).catch((err) => {
      
    });

    axios.get('http://localhost:5000/api/getservicecount')
    .then((result) => {
      setserviceCount(result.data.count)
    }).catch((err) => {
      
    });

    axios.get('http://localhost:5000/api/getAppointmentCount')
    .then((result) => {
      setAppointmentCount(result.data.count)
    }).catch((err) => {
      
    });
  })
  return (
    <div className='count-container'>

    <div className='countcard'>
    <p className='count'> {custcount} </p>
    <p className='count-title'>Customers</p>
    <p className='icons'><FaUsers /></p>
    </div>

   <div className='countcard' >
     <p className='count'>{AppointmentCount}</p>
     <p className='count-title'>Appointments</p>

   </div>

   <div className='countcard'>
   <p className='count'>  {serviceCount}</p>
   <p className='count-title'>services</p>
   <p className='icons'><MdMiscellaneousServices /></p>
   </div>
    
</div>
  
  )
}

export default Dashboard