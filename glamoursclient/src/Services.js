import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import '../src/services.css'
import { useSelector } from 'react-redux'

const Services = () => {
  const { servicetype } = useParams()
  const { UserData } = useSelector((state) => state.user)

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
      ServiceId: selectedappointment._id,
      CustomerId: UserData._id
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

  }, []) // Corrected useEffect dependency array

  const navi = useNavigate()
  return (
    <div>
      <Container>
        <h1 className='shead'>Services</h1>
        <Row>
          {
            serviceData.map((service) => {
              return (
                <Col sm="12" md="4" lg="4"> {/* Set Col size to 4 for small, medium, and large screens */}
                  <Card className='sinfo'>
                    <Card.Img className='Simg' src={`http://localhost:5000${service.ServiceImage}`}></Card.Img>
                    <Card.Title>{service.ServiceName}</Card.Title>
                    <Card.Body>
 <h4 className="service-heading">Service Price :</h4>
  <p className="service-info">{service.ServicePrice}</p>
  <h4 className="service-heading">Service Type :</h4>
  <p className="service-info">{service.ServiceType}</p>
  <h4 className="service-heading">Service Available :</h4>
  <p className="service-info">{service.IsActive}</p>                    </Card.Body>
                    <Card.Footer className='fbtns'>
                      <Button className='sbtn' onClick={() => navi('/servicedetail')}>Service Details</Button>
                      <Button onClick={() => {
                        setSelectedappointment(service)
                        setIsShow(true)
                      }} className='sbtn' >Take Appointment</Button>
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
            <Form.Control type="date" onChange={(e) => setAppointmentDate(e.target.value)}></Form.Control>
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

export default Services;
