import React from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from '../components/nav'






export default function createAccount() {
    return (
        <div>
            <Nav></Nav>
            <Row>
                <h2 style={{ paddingLeft: "10vh", paddingTop: "2vh" }}>Create Account </h2>
                <Col span={14}>

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

                                    <div style={{ paddingLeft: "40%" }}>
                                        <Button type="submit" variant="outline-dark" style={{ width: "120px" }}> Save </Button>{' '} {' '}<Button variant="outline-dark" style={{ width: "120px" }} > Cancel </Button>

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
