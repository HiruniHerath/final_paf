import React from "react";

import { Form, Col, Row, Button, Card, Image } from "react-bootstrap";


export default function Login() {
  return (
    <section>
      <Row>
        <Col sm={7}>
          <div style={{ backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1667226425853-GFTZP1P5PWAME97VPC6M/AD011219-21_original.jpg"})`, width: "100%", objectFit: "cover" }}>
            <div style={{ paddingTop: "20vh", paddingBottom: "19vh", paddingLeft: "15vh" }}>
              <Card border="light" style={{ width: '40rem', opacity: "0.9" }}>
                <Card.Body>
                  <Form >
                    <span className="error-message" style={{ color: "red" }}></span>
                    <div style={{ paddingLeft: "35%" }}>
                      <Image style={{ width: "30vh" }}
                        src=
                        "https://cdn.dribbble.com/users/1561522/screenshots/3929068/food-icon-gif-revised2.gif"
                        roundedCircle
                      />
                    </div>
                    <br />
                    <Form.Group as={Col} md={12} controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="email"
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={12} controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        minLength={6}
                      />
                    </Form.Group>
                    <div style={{ paddingTop: "3vh" }}>
                      <Form.Group as={Col} md={12} className="login-btn">
                        <div className="d-grid gap-2">
                          <Button style={{ backgroundColor: "#353535", borderColor: "#353535" }} type="submit" >
                            Login
                          </Button>
                          <div style={{ float: "left" }}>
                            Do not have an account  <a href="/register" style={{ color: "#353535" }}>Register Here</a>
                            <br></br>
                            <br></br>
                         <div style={{paddingLeft:"230px"}}> <Button variant="dark">Log In Using : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/> </svg></Button></div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
              <br />
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div style={{ paddingTop: "45vh", paddingRight: "10vh" }} >
            <h1 style={{ color: "#353535" }}>TableTalks</h1>
          </div>
        </Col>
      </Row>
     

    </section>


  );


}






