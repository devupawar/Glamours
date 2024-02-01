import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const Services = () => {
  const { servicetype } = useParams()

  const [serviceData, setServiceData] = useState([])
  const [isShow, setIsShow] = useState(false)
  const [appointmentDate, setAppointmentDate] = useState("")
  const [appointmentTime, setAppointmentTime] = useState("")
  const [selectedappointment, setSelectedappointment] = useState({
    AppointmentDate: "",
    AppointmentTime: "",
  })
  function makeappointment() {
    const appointment = {
      AppointmentDate: appointmentDate,
      AppointmentTime: appointmentTime,
      ServiceId: selectedappointment._id
    }
    PostAppointment(appointment)
  }

  const PostAppointment = (AppointmentData) => {
    axios.post("http://localhost:5000/api/addappointment", AppointmentData)
      .then((result) => {
        alert("Appointment post")
      }).catch((err) => {
        alert("Err")
      });
  }
  useEffect(() => {
    if (!servicetype) {
      axios.get('http://localhost:5000/api/getallservices')
        .then((serviceData) => {
          console.table(serviceData.data)
          setServiceData(serviceData.data)
        }).catch((err) => {
          console.log(err)
        });
    } else {
      const data = {
        servicetype: servicetype
      }
      axios.post('http://localhost:5000/api/serviceByType', data)
        .then((serviceData) => {
          console.table(serviceData.data)
          setServiceData(serviceData.data)
        }).catch((err) => {
          console.log(err)
        });
    }

  })

  return (
    <div>
      <Container>
        <h1 className='shead'>Services</h1>
        <Row>
          {
            serviceData.map((service) => {
              return (
                <Col lg="3" md="6" sm="12">
                  <Card className='sinfo'>
                    <Card.Img className='cImg' src={`http://localhost:5000${service.ServiceImage}`}></Card.Img>
                    <Card.Title>{service.ServiceName}</Card.Title>
                    <Card.Body>
                      <p>{service.ServicePrice}</p>
                      <p>{service.ServiceType}</p>
                      <p>{service.IsActive}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => {
                        setSelectedappointment(service)
                        setIsShow(true)
                      }} >Take Appointment</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <Modal show={isShow} onHide={() => setIsShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control  type="date" onChange={(e) => setAppointmentDate(e.target.value)}></Form.Control>
            <Form.Control className='apptime' type="time" onChange={(e) => setAppointmentTime(e.target.value)}></Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='bt' onClick={() => makeappointment()}>Take Appointment</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Services