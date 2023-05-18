import React from "react";

import { Form, Col, Row, Button, Card, Image } from "react-bootstrap";


export default function Register() {
  return (
    <section>

      <div style={{ backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1667226425853-GFTZP1P5PWAME97VPC6M/AD011219-21_original.jpg"})`, width: "100%", objectFit: "cover", height: "100px" }}>
      </div>
      <h1 style={{ color: "#353535", textAlign: "center", paddingTop: "10px" }}>TableTalks</h1>
      <div>
        <div style={{ paddingTop: "10px", paddingBottom: "19vh", paddingLeft: "400px" }}>
          <Card style={{ width: '40rem', opacity: "0.9", border: "#ffffff", width: "70%" }}>
            <Card.Body>
              <Form>
                <span className="error-message" style={{ color: "red" }}></span>
                <br />
                <Form.Group as={Col} md={12} controlId="email">
                  <Form.Label style={{ fontSize: "20px" }}>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email"
                  />
                </Form.Group>
                <br></br>
                <Form.Group as={Col} md={14} controlId="password">
                  <Form.Label style={{ fontSize: "20px" }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    minLength={6}
                  />
                </Form.Group>
                <br></br>
                <Form.Group as={Col} md={14} controlId="password">
                  <Form.Label style={{ fontSize: "20px" }}>User name</Form.Label>
                  <Form.Control
                    type="us"
                    placeholder="username"
                    minLength={6}
                  />
                </Form.Group>
                <div style={{ paddingTop: "3vh" }}>
                  <Form.Group as={Col} md={14} className="login-btn">
                    <div className="d-grid gap-2">
                      <Button style={{ backgroundColor: "#353535", borderColor: "#353535" }} type="submit" >
                        Register
                      </Button>
                      <div style={{ float: "left" }}>
                        Already have an account  <a href="/" style={{ color: "#353535" }}>Login Here</a>
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
    </section>


  );


}






