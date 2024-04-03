import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './Appointment.css'

const Appointment = () => {
  const { UserData } = useSelector((state) => state.user)
  const [appointmentData, setAppointmentData] = useState([])

  useEffect(() => {
    const data = {
      CustomerId: UserData._id
    }
    axios.post('http://localhost:5000/api/getAppointmentById', data)
      .then((result) => {
        console.log("DATA", result.data)
        setAppointmentData(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }, [])

  const deleteAppointment = (appid) => {
    axios.post('http://localhost:5000/api/deleteAppointment',
      {
        aid: appid
      }).then((result) => {
        alert("Appointment deleted")
        // Filter out the deleted appointment from appointmentData
        setAppointmentData(appointmentData.filter(appointment => appointment._id !== appid))
      }).catch((err) => {

      });
  }

  return (
    <div>
      <h1 className='Ahead'>Appointments</h1>
      <Container>
        <Row>
          {
            appointmentData.map((appointment) => {
              return (
                <Col lg="4" md="6" sm="12" key={appointment._id}> {/* Add key prop */}
                  <Card>
                    <Card.Body>
                      <p>Appointment Date : {appointment.AppointmentDate}</p>
                      <p>Appointment Time : {appointment.AppointmentTime}</p>
                      <p>Appointment Status : {appointment.AppointmentStatus}</p>
                      <p>Service Name : {appointment.ServiceId.ServiceName}</p>
                      <p>Service Type : {appointment.ServiceId.ServiceType}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => deleteAppointment(appointment._id)} className='cancel-button'>Cancel</Button>
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
