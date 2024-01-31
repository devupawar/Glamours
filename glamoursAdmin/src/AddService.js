import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import Serviceimage from '../src/front-desk.png'
import { useNavigate } from 'react-router-dom'


const AddService = () => {
    const [servicename, setServiceName] = useState("")
    const [serviceprice, setServicePrice] = useState("")
    const [servicetype, setServiceType] = useState("")
    const [serviceImage, setServiceImage] = useState("")
    const [serviceAvailable, setServiceAvailable] = useState("")

    function SubmitForm() {
        const Servicedata = {
            ServiceName: servicename,
            ServicePrice: serviceprice,
            ServiceType: servicetype,
            ServiceImage: serviceImage,
            IsActive: serviceAvailable
        }
        PostService(Servicedata)
    }

    const PostService = (ServiceData) => {
        axios.post("http://localhost:5000/api/addservice", ServiceData)
            .then((result) => {
                alert("SERVICE SAVED")
            }).catch((err) => {
                alert("ERR")
            });
    }
    const navi = useNavigate()

    async function handlechangeimage(e) {
        const imgData = new FormData();
        imgData.append(
            'image',
            e.target.files[0]
        );
        axios.post("http://localhost:5000/uploadfile", imgData)
            .then((res) => {
                console.log("Res : ", res.data);
                setServiceImage(res.data.filepath)
                alert("image Uploaded")
            }).catch((err) => {
                console.log("Err", err);
            });
    }

    return (
        <div>
            <container>
                <h1 className='AShead'>Add Service</h1>

                <Row>
                    <Col lg="6" md="6" sm="12">
                        <img className='asimg' src={Serviceimage}></img>
                    </Col>
                    <Col lg="6" md="6" sm="12" >
                        <Form className='form'>

                            <FormGroup className='formg '>
                                <FormLabel>Service Name</FormLabel>
                                <FormControl onChange={(e) => setServiceName(e.target.value)} type='text'></FormControl>
                            </FormGroup>

                            <FormGroup className='formg'>
                                <FormLabel>Service Price</FormLabel>
                                <FormControl onChange={(e) => setServicePrice(e.target.value)} type='number'></FormControl>
                            </FormGroup>

                            <FormGroup className='formg'>
                                <FormLabel>Service Type</FormLabel>
                                <Form.Select onChange={(e) => setServiceType(e.target.value)}>
                                    <option value="Haircut">HairCut</option>
                                    <option value="Facial">Facial</option>
                                    <option value="Makeups">Makeups</option>
                                    <option value="Bleach">Bleach</option>
                                    <option value="waxing">waxing</option>
                                    <option value="CleanUp">CleanUp</option>
                                    <option value="Threading">Threading</option>
                                    <option value="Menicure">Menicure</option>
                                    <option value="pedicure">pedicure</option>

                                </Form.Select>
                            </FormGroup>

                            <FormGroup className='formg'>
                                <FormLabel>Service Image</FormLabel>
                                <FormControl onChange={handlechangeimage} type='file'></FormControl>
                            </FormGroup>

                            <FormGroup className='formg'>
                                <FormLabel>Available</FormLabel>
                                <FormControl onChange={(e) => setServiceAvailable(e.target.value)} type='string'></FormControl>
                            </FormGroup>
                            <Button className='bt' onClick={() => SubmitForm()} >Add Service</Button>
                            <Button className='btn' onClick={() => navi('/services')}>All services</Button>
                        </Form>
                    </Col>
                </Row>
            </container>
        </div>
    )
}
export default AddService
