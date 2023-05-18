import React from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from '../components/nav'
import Carousel from 'react-bootstrap/Carousel';






export default function editAccount() {
    return (
        <div>
            <Nav></Nav>
            <Row>
                <h2 style={{ paddingLeft: "10vh", paddingTop: "2vh" }}>Edit Account </h2>
                <Col span={12}>

                    <div style={{ paddingBottom: '4vh', paddingTop: "6vh", paddingLeft: "7vh" }}>
                        <Card border="dark" style={{ width: '45rem' }}>
                            <Card.Body>
                                <Form >
                                    <span className="error-message" style={{ color: "blue" }}></span>

                                    <br />
                                    <div >

                                        <Row >


                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Name: </Form.Label>
                                                <Form.Control type="text"


                                                    placeholder=" Enter Name .." />
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Contact Number : </Form.Label>
                                                <Form.Control type="number"

                                                    placeholder=" Enter Contact Num: .." />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Email : </Form.Label>
                                                <Form.Control type="text"

                                                    placeholder=" Enter Email .." />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Bio : </Form.Label>
                                                <Form.Control type="text"

                                                    placeholder=" Enter Bio .." />
                                            </Form.Group>


                                        </Row>
                                        <Row>

                                            <Form.Group controlId="fileupload">
                                                <Form.Label>Profile Picture</Form.Label>
                                                <Form.Control type="file" multiple />
                                                

                                            </Form.Group>
                                        </Row>


                                    </div>
                                <br></br>
                                    <div style={{ paddingLeft: "40%" }}>
                                        <Button type="submit" variant="outline-dark" style={{ width: "120px" }}> Save </Button>{' '} {' '}{' '}<Button variant="outline-dark" style={{ width: "120px" }} > Cancel </Button>

                                        </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>



                </Col>

<Col>
<img src='https://www.theforkmanager.com/s3/files/styles/lightbox_content/public/Resize%20Family%202.jpg?itok=MYonQf03' style={{width:"550px" , paddingTop:"60px"}} ></img>

</Col>
               

            </Row>
        </div>
    );
};

