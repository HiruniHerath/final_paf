import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from '../components/nav'
import axios from "axios"


export default function CreateOffer() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [title, settitle] = useState(" ");
    const [description, setdescription] = useState(" ");
    const [start_date, setstart_date] = useState(" ");
    const [image_url, setimage_url] = useState("");
    const [end_date, setend_date] = useState("");
    const [id, setid] = useState(0);
    const [search, setSearch] = useState("");
    const userId = 1;
    const [offer, setoffer] = useState([]);


    const handleShow = (id, title, description, start_date, image_url, end_date, userId) => {
        setShow(true);
        setid(id);
        settitle(title);
        setdescription(description);
        setstart_date(start_date);
        setimage_url(image_url);
        setend_date(end_date);
    }


    // send data
    function sendData(e) {

        const newoffer = {
            userId,
            id:0,
            title,
            description,
            start_date,
            image_url,
            end_date
        }

        axios.post("http://localhost:8092/offer-service/offers/create", JSON.stringify(newoffer)).then(() => {
            ("New offer added")
            settitle('');
            setdescription('');
            setstart_date('');
            setimage_url('');
            setend_date('');

            window.location.reload();

        }).catch((err) => {
            alert("error");
        })
    }
    return (
        <div>

            <Nav></Nav>
            <div style={{ backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1667226425853-GFTZP1P5PWAME97VPC6M/AD011219-21_original.jpg"})`, width: "100%", objectFit: "cover", height: "200px" }}>
            </div>
            <Row>
                <Col style={{ paddingLeft: "320px" }} >
                    <h2 style={{ paddingLeft: "320px" }} >Add offers</h2>
                    <div style={{ paddingBottom: '4vh', paddingTop: "6vh", paddingLeft: "7vh" }}>
                        <Card border="dark" style={{ width: '45rem' }}>
                            <Card.Body>
                                <Form onSubmit={sendData} >
                                    <span className="error-message" style={{ color: "blue" }}></span>
                                    <br />
                                    <div >
                                        <Row >
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Enter offer title: </Form.Label>
                                                <Form.Control type="text"
                                                    value={title} rows={3} onChange={(e) => settitle(e.target.value)}
                                                    placeholder=" Enter Title .." />
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Description : </Form.Label>
                                                <Form.Control type="text"
                                                    value={description} rows={3} onChange={(e) => setdescription(e.target.value)}
                                                    placeholder=" Enter your description .." />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Date from  : </Form.Label>
                                                <Form.Control type="text"
                                                    value={start_date} rows={3} onChange={(e) => setstart_date(e.target.value)}
                                                    placeholder=" Enter your description .." />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Date to  : </Form.Label>
                                                <Form.Control type="text"
                                                    value={end_date} rows={3} onChange={(e) => setend_date(e.target.value)}
                                                    placeholder=" Enter your description .." />
                                            </Form.Group>


                                        </Row>
                                        <Row>

                                            <Form.Group controlId="fileupload">
                                                <Form.Label>Post offer image</Form.Label>
                                                <Form.Control type="text"
                                                    value={image_url} rows={3} onChange={(e) => setimage_url(e.target.value)}
                                                    placeholder=" Enter your image Url" />

                                            </Form.Group>
                                        </Row>
                                    </div>
                                    <div style={{ paddingLeft: "40%" }}>
                                        <Button type="submit" variant="outline-dark" style={{ width: "120px" }}> Save </Button>{' '} {' '}<Button variant="outline-dark" style={{ width: "120px" }} > Clear </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    );
};