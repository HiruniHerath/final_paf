import React, { useState } from "react"
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from '../components/nav'
import axios from "axios";
import config from "./config";


export default function Createpost() {
    const BASE_URL=config.API_URL;

  const [caption, setcaption] = useState(" ");
    const [imageUrls, setimageUrls] = useState(" ");
    const commentId=0;
    const createdBy=0;
     const id=0;
    const likes=0;
    const userId='';





 function sendData(e) {
        if (!(caption.trim().length > 2)) {
            alert("Invalid 'caption' value! Length must be more chracters")
            return
        } else if (!(imageUrls.trim().length > 2)) {
            alert("Invalid 'title' value! Title must be grater than more chracters")
            return
        }
        e.preventDefault();

        const newPost = {
            caption,
            imageUrls,
            commentId,createdBy,id,likes,userId
        }

        axios.post(`${BASE_URL}/post-service/post/create`, newPost).then(() => {
            ("post added")
            setcaption('');
            setimageUrls('');
            window.location = `/viewpost`;

        }).catch((err) => {
            alert("error");
        })
    }

    return (
        <div>
            <Nav></Nav>
            <Row>
                <h2 style={{ paddingLeft: "10vh", paddingTop: "2vh" }}>Create your Own post </h2>
                <Col span={14}>

                    <div style={{ paddingBottom: '4vh', paddingTop: "6vh", paddingLeft: "7vh" }}>
                        <Card border="dark" style={{ width: '45rem' }}>
                            <Card.Body>
                                <Form onSubmit={sendData}>
                                    <span className="error-message" style={{ color: "blue" }}></span>
                                    <div >
                                        <Row >
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Post Tittle: </Form.Label>
                                                <Form.Control type="text" onChange={(e) => setcaption(e.target.value)}
                                                    placeholder=" Enter Title .." />
                                            </Form.Group>
                                        </Row>

                                        <Row>
                                            <Form.Group controlId="imgfield">
                                                <Form.Label>Post image</Form.Label>
                                                <Form.Control onChange={(e) => setimageUrls(e.target.value)} type="text" placeholder=" Enter image URL .." />
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
                <Col><div style={{ paddingTop: '1vh', paddingBottom: '1vh', paddingRight: "2vh" }}>
                    <div>
                        <Card style={{ width: '20rem', float: "right", height: "26rem", border: "none" }}>
                            <img style={{ width: '18rem', height: "26rem" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbymQS26EOEGupvmC1ieq5dYNZ6LhrRfn3w&usqp=CAU'></img>
                        </Card>
                    </div>
                    <br></br>
                    <div>
                        <Card style={{ width: '20rem', height: "26rem" }}>
                            <img style={{ width: '20rem', height: "26rem" }} src='https://foodphotographyacademy.co/wp-content/uploads/2019/10/Chocolate-Cake-Example-2-660x990.jpg'></img>
                        </Card>
                    </div>
                </div></Col>
            </Row>
        </div>
    );
};
