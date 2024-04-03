import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'
 
const Appointment = () => {
  const[appointmentData,setAppointmentData]=useState([
    
     { ServiceId:
       {
        ServiceName:"",
        ServiceType:""
      }
    }
    
  ])
  const[isShow,setIsShow]=useState(false)
  const[selectedAppointment,setselectedAppointment]=useState({
    AppointmentDate:"",
    AppointmentTime:"",
    AppointmentStatus:""
  })

  useEffect(()=>{
    axios.get('http://localhost:5000/api/getAllappointments')
    .then((appointmentData) => {
      console.table(appointmentData.data)
      setAppointmentData(appointmentData.data)
    }).catch((err) => {
      console.log(err)
    });
  },[])
  
  const deleteAppointment=(appid)=>{
    axios.post('http:localhost:5000/api/deleteAppointment',
    {
      aid:appid
    }).then((result) => {
      alert("Cancel appointment")
      window.location.reload(false)
    }).catch((err) => {
      
    });
    
  }
  const updateAppointment=()=>{
    const upAppointment={
      aid:selectedAppointment._id,
      AppointmentStatus:selectedAppointment.AppointmentStatus
    }
    axios.post("http://localhost:5000/api/updateAppointment",upAppointment)
    .then((result) => {
      alert("Appointment Updated")
      setIsShow(false)
      window.location.reload(false)
    }).catch((err) => {
      alert("update fail")
    });
  }
  return (
    <div>
     <h1 className='appointments'>Appointments</h1>
     <Container>
      <Row>
        {
          appointmentData.map((appointment)=>{
            return(
              <Col lg="4" md="6" sm="12" >
              <Card>
                <Card.Body>
                  <p>{appointment.AppointmentDate}</p>
                  <p>{appointment.AppointmentTime}</p>
                  <p>{appointment.AppointmentStatus}</p>  
                  <p>{appointment.ServiceId.ServiceName}</p>
                  <p>{appointment.ServiceId.ServiceType}</p>
           </Card.Body>
                <Card.Footer>
                  <Button onClick={()=>deleteAppointment(appointment._id)}>delete</Button>
                  <Button className="m-2" onClick={()=>{
                    setselectedAppointment(appointment)
                    setIsShow(true)}}>Verify Appointment</Button>
                </Card.Footer>
              </Card>
              </Col>
            )
          })
        }
      </Row>
     </Container>
     <Modal show={isShow} onHide={()=>setIsShow(false)}>
     <Modal.Header closeButton>
      <Modal.Title>
        Update Appointment
      </Modal.Title>
     </Modal.Header>
     <Modal.Body>
      <Form>
        <Form.Control type="text" value={selectedAppointment.AppointmentStatus}
        onChange={(e)=>setselectedAppointment(
        {...selectedAppointment,AppointmentStatus:e.target.value})}>
        </Form.Control>
      </Form>
     </Modal.Body>
     <Modal.Footer>
      <Button onClick={()=>updateAppointment()}>verify</Button>
     </Modal.Footer>
     </Modal>
    </div>
  )
}

export default Appointment