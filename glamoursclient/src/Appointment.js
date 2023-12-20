import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container,Row } from 'react-bootstrap'

const Appointment = () => {
  const [appointmentData, setAppointmentData] = useState([
    {
      ServiceId: {
        ServiceName:"",
        ServiceType:""
      }
    }
  ])
 
  useEffect(() => {
    axios.get('http://localhost:5000/api/getAllappointments')
      .then((appointmentData) => {
        console.table(appointmentData.data)
        setAppointmentData(appointmentData.data)
      }).catch((err) => {
        console.log(err)
      });
  }, [])

  const deleteAppointment = (appid) => {
    axios.post('http://localhost:5000/api/deleteAppointment',
      {
        aid: appid
      }).then((result) => {
        alert("user deleted")
        window.location.reload(false)
      }).catch((err) => {

      });
  }
 
  return (
    <div>
      <h1>Appointments</h1>
      <Container>
        <Row>
          {
            appointmentData.map((appointment) => {
              return (
                <Col lg="4" md="6" sm="12">
                  <Card>
                    <Card.Body>
                      <p>{appointment.AppointmentDate}</p>
                      <p>{appointment.AppointmentTime}</p>
                      <p>{appointment.AppointmentStatus}</p>
                      <p>{appointment.ServiceId.ServiceName}</p> 
                      <p>{appointment.ServiceId.ServiceType}</p>                               </Card.Body>
                    <Card.Footer>
                     <Button onClick={() => deleteAppointment(appointment._id)} className='bt m-2'>Cancel</Button>
                      
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>  
    </div>
  )
}
export default Appointment