import React, {useState} from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from '../components/nav'
import axios from "axios";
import config from "./config";






export default function createAccount() {
    const BASE_URL=config.API_URL;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [profile,setprofile] = useState([]);
    const usernm = '';
    const [id, setid] = useState(" ");
    const[ userId, setuserID] = useState(" ");
    const [username, setusername ] = useState(" ");
    const [bio, setbio ] = useState(" ");
    const [age,  setage] = useState(" ");
    const [location,  setlocation] = useState(" ");
    const [profilePictureUrl,  setprofilePictureUrl] = useState(" ");
    function sendData(e) {

        const newprofile = {
            bio,
            username,
            age,
            location,
            profilePictureUrl,
            userId
        }

        axios.post(`${BASE_URL}/profile-service/user-profile/create`, newprofile).then(() => {
            ("data added")
            setusername(username)
            setbio(bio);
            setage(age);
            setlocation(location);
            setprofilePictureUrl(profilePictureUrl);
            window.location.reload();

        }).catch((err) => {
            alert("error");
        })
    }
    return (
        <div>
            <Nav></Nav>
            <Row>
                <h2 style={{ paddingLeft: "10vh", paddingTop: "2vh" }}>Create Account </h2>
                <Col span={14}>

                    <div style={{ paddingBottom: '4vh', paddingTop: "6vh", paddingLeft: "7vh" }}>
                        <Card border="dark" style={{ width: '45rem' }}>
                            <Card.Body>
                                <Form onSubmit={sendData}>
                                    <span className="error-message" style={{ color: "blue" }}></span>

                                    <br />
                                    <div >

                                        <Row >


                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Username: </Form.Label>
                                                <Form.Control type="text"

                                                              onChange={(e) => setusername(e.target.value)}
                                                    placeholder=" Enter Name .." />
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >location : </Form.Label>
                                                <Form.Control type="number"
                                                              onChange={(e) => setlocation(e.target.value)}
                                                    placeholder=" Enter Location: .." />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Age : </Form.Label>
                                                <Form.Control type="text"
                                                              onChange={(e) => setage(e.target.value)}
                                                    placeholder=" Enter Email .." />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                <Form.Label >Bio : </Form.Label>
                                                <Form.Control type="text"
                                                              onChange={(e) => setbio(e.target.value)}
                                                    placeholder=" Enter Bio .." />
                                            </Form.Group>


                                        </Row>
                                        <Row>

                                            <Form.Group controlId="fileupload">
                                                <Form.Label>Profile Picture</Form.Label>
                                                <Form.Control type="file" multiple  onChange={(e) => setprofilePictureUrl(e.target.value)}/>
                                                

                                            </Form.Group>
                                        </Row>


                                    </div>

                                    <div style={{ paddingLeft: "40%" }}>
                                        <Button type="submit" variant="outline-dark" style={{ width: "120px" }}> Save </Button>{' '} {' '}<Button variant="outline-dark" style={{ width: "120px" }} href={"/profile"} > Cancel </Button>

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
