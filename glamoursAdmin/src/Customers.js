import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row} from 'react-bootstrap'

const Customers = () => {
  const[customerData,setcustomerData]=useState([])
  const[isShow,setIsShow]=useState(false)
  const[selectedCustomer,setSelectedCustomer]=useState({
    CustomerName:"",
    CustomerEmail:"",
    CustomerMobile:"",
    CustomerAddress:"",
    CustomerPassword:""
  })
  useEffect(()=>{
    axios.get('http://localhost:5000/api/getallcustomer')
    .then((customerData) => {
      console.table(customerData.data)
      setcustomerData(customerData.data)
    }).catch((err) => {
      console.log(err)
    });
  })
  const DeleteCustomer=(customerId)=>{
    axios.post('http://localhost:5000/api/deletecustomer',
    {
      cid:customerId
    }).then((result) => {
      alert("User deleted")
      window.location.reload(false)
    }).catch((err) => {
      
    });
  }

  const updateCustomer=()=>{
    const cdata={
      sid:selectedCustomer._id,
      CustomerPassword:selectedCustomer.CustomerPassword
    }
    axios.post("http://localhost:5000/api/updatecustomer",cdata)
    .then((result) => {
      alert("customer updated")
      setIsShow(false)
      window.location.reload(false)
    }).catch((err) => {
      alert("update fail")
    });
  }
  
  return (
    <div>
      <h1 className='chead'>Customers</h1>
      <Container>
        <Row>
         {
          customerData.map((customer)=>{
            return(
              <Col lg='4' md="6" sm="12">
                <Card className='custominfo'>
                  <Card.Title>{customer.CustomerName}</Card.Title>
                  <Card.Body>
                    <p>{customer.CustomerEmail}</p>
                    <p>{customer.CustomerMobile}</p>
                    <p>{customer.CustomerAddress}</p>
                    <p>{customer.CustomerPassword}</p>
                  </Card.Body>
                  <Card.Footer>
                    <Button onClick={()=>DeleteCustomer(customer._id)}>Block</Button>
                    <Button className='m-2' onClick={()=>{
                      setSelectedCustomer(customer)
                      setIsShow(true)
                    }}>Update</Button>
                  </Card.Footer>
                </Card>
              </Col>
            )
          })
         }
         </Row>
         
      <Modal show={isShow} onHide={()=>setIsShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control type="text" value={selectedCustomer.CustomerName}></Form.Control>
            <Form.Control type="text" value={selectedCustomer.CustomerPassword}
            onChange={(e)=>setSelectedCustomer
            ({...selectedCustomer,CustomerPassword:e.target.value})}>
            </Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>updateCustomer()}>Update</Button>
        </Modal.Footer>
      </Modal>
</Container>
    </div>
  )
}

export default Customers