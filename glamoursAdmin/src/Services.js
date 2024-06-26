import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../src/Services.css'

const Services = () => {
  const[serviceData,setServiceData]=useState([])
  const[isShow,setIsShow]=useState(false)
  const[selectedServices,setSelectedServices]=useState({
    ServiceName:"",
    ServicePrice:"",
    ServiceType:"",
    ServiceImage:"",
    IsActive:""
  })
  const navi=useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:5000/api/getallservices')
    .then((serviceData) => {
      console.table(serviceData.data)
      setServiceData(serviceData.data)
    }).catch((err) => {
      console.log(err)
    });
  })
  const DeleteService=(serviceId)=>{
    axios.post('http://localhost:5000/api/deleteservice',
    {
      sid:serviceId
    }).then((result) => {
      alert("User deleted")
      window.location.reload(false)
    }).catch((err) => {
      
    });
  }
  const updateService=()=>{
    const sdata={
      sid:selectedServices._id,
      ServicePrice:selectedServices.ServicePrice,
      IsActive:selectedServices.IsActive
    }
    axios.post("http://localhost:5000/api/updateservice",sdata)
    .then((result) => {
      alert("service updated")
      setIsShow(false)
      window.location.reload(false)
    }).catch((err) => {
      alert("update fail")
    });
  }
  return (
    <div>
      <h1 className='shead'>Services</h1>
      <Button onClick={()=>navi('/addservice')}>Add Service</Button>
      <Container>
        <Row>
         {
          serviceData.map((service)=>{
            return(             
              <Col lg='4' md="4" sm="12">              
                <Card className='sinfo'>   
                  <Card.Img className='Simg' src={`http://localhost:5000${service.ServiceImage}`}/>
                  <Card.Title>{service.ServiceName}</Card.Title>
                  <Card.Body>
                  <h4 className="service-heading">Service Price :</h4>
                  <p className="service-info">{service.ServicePrice}</p>
                  <h4 className="service-heading">Service Type :</h4>
                  <p className="service-info">{service.ServiceType}</p>
                  <h4 className="service-heading">Service Available :</h4>
                  <p className="service-info">{service.IsActive}</p> 
                 </Card.Body>                
                  <Card.Footer>
                    <Button onClick={()=>DeleteService(service._id)}>Delete</Button>
                    <Button className='m-2' onClick={()=>{
                      setSelectedServices(service)
                      setIsShow(true)
                    }}>Update</Button>
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
          <Modal.Title>Update Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control type="text" value={selectedServices.ServiceName}></Form.Control>
            <Form.Control className='spriceup' type="text" value={selectedServices.ServicePrice}
            onChange={(e)=>setSelectedServices
            ({...selectedServices,ServicePrice:e.target.value})}>
            </Form.Control>
            <Form.Control type="text" value={selectedServices.IsActive}
            onChange={(e)=>setSelectedServices
            ({...selectedServices,IsActive:e.target.value})}>
            </Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>updateService()}>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Services
