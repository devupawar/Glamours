import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
      setAppointmentCount(result.data.count)
    }).catch((err) => {
      
    });

    axios.get('http://localhost:5000/api/AppointmentCount')
    .then((result) => {
      setserviceCount(result.data.count)
    }).catch((err) => {
      
    });
  })
  return (
    <div>
     <h1> {custcount}</h1>
     <h2>{serviceCount}</h2>
    </div>

    
  )
}

export default Dashboard