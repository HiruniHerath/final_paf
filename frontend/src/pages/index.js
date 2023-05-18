import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from '../components/nav'


export default function index() {
  return (
    <div>
      <Nav></Nav>
      <Row>
        <Col style={{ paddingLeft: '3vh' }}>

          <video autoPlay muted loop style={{ width: '100%', height: "400px", objectFit: "cover" }} >
            <source
              src="https://res.cloudinary.com/iplus/video/upload/v1682448950/Fine_Dining___Commercial_Video_Production_By_Unmanned_AV_vhbcpf.mp4"
              type="video/mp4"
            />
          </video>
        </Col>
      </Row>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "24px", paddingTop: "10px" }}>Our Story</h1>
        <p>"Discover the Best Deals and Share Your Experiences with Our Social App for Offers and Reviews!"

          Are you always on the lookout for the best deals and discounts? Do you love sharing your experiences with others and discovering new products and services? Then our social app for offers and reviews is the perfect solution for you!

          With our app, you can browse a wide range of offers and deals from your favorite brands and stores. From fashion to tech, home goods to travel, we've got it all covered. And if you find a deal you love, you can easily share it with your friends and followers.

          But our app isn't just about deals. We also provide a platform for users to write and read reviews of products and services, so you can get an honest and unbiased opinion before making a purchase. And if you've had a great (or not so great) experience, you can share it with the community and help others make informed decisions.

          With our app, you'll never miss a great deal or waste money on a subpar product again. Join our community of savvy shoppers and start discovering the best deals and sharing your experiences today!</p>
      </div>
      <br></br>
      <Container fluid className=" text-light py-4" style={{ backgroundColor: '#353535' }}>
        <Container>
          <Row>
            <Col>
              <h2 style={{ fontSize: "24px" }} className="display-4">Our service</h2>

            </Col>
          </Row>
        </Container>
      </Container>
      <br></br>

      <Row xs={1} sm={2} md={4} lg={4} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" style={{ paddingLeft: "60px", paddingRight: "60px", paddingTop: "60px" }} src="https://cdn-icons-png.flaticon.com/512/7981/7981680.png" />
            <Card.Body>

              <Card.Text style={{ textAlign: "center" }}>
                Proper Communication
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" style={{ paddingLeft: "60px", paddingRight: "60px", paddingTop: "60px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgZZCrjQ7B6hEDkWUArAWPb5lTvQwFpuRuQ&usqp=CAU" />
            <Card.Body>

              <Card.Text style={{ textAlign: "center" }}>
                End to End Service
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" style={{ paddingLeft: "60px", paddingRight: "60px", paddingTop: "60px" }} src="https://cdn-icons-png.flaticon.com/512/945/945525.png" />
            <Card.Body>

              <Card.Text style={{ textAlign: "center" }}>
                Better Organization
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" style={{ paddingLeft: "60px", paddingRight: "60px", paddingTop: "60px" }} src="https://cdn-icons-png.flaticon.com/512/950/950299.png" />
            <Card.Body>

              <Card.Text style={{ textAlign: "center" }}>
                24 Hours Service
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br>
      </br>
      <div className='text-center p-3' style={{ backgroundColor: "#353535" }}>


      </div>

    </div>
  );
};
