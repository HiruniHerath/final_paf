
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Nav, Navbar } from 'react-bootstrap';
import Navh from '../components/nav';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"
import config from './config';



export default function OffersView() {
  const BASE_URL=config.API_URL;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  const [title, settitle] = useState(" ");
  const [description, setdescription] = useState(" ");
  const [start_date, setstart_date] = useState(" ");
  const [image_url, setimage_url] = useState("");
  const [end_date, setend_date] = useState("");
  const [id, setid] = useState(0);
  const userId = 1;
  const [offer, setoffer] = useState([]);


  const handleShow = (offer) => {
    const {id, title, description, start_date, image_url, end_date, userId} =offer;
    setShow(true);
    setid(id);
    settitle(title);
    setdescription(description);
    setstart_date(start_date);
    setimage_url(image_url);
    setend_date(end_date);
  }
  const claim = () => {
    alert("Auto can be claimed");
  }

  // update
  function update() {
    const newAgenda = {
      userId,
      id,
      title,
      description,
      start_date,
      image_url,
      end_date
    }

    axios.put("LINK", newAgenda).then(() => {

      alert("Updated Successfully");
      window.location.reload();
    }).catch((err => {
      alert(err)
    }))
  }


  // delete


  function onDelete(id) {
    console.log(id);
    axios.delete(`${BASE_URL}/offer-service/offers/delete{id}?id=` + id).then((res) => {
      alert('Deleted Successfully');
      window.location.reload();
    }).catch((err) => {
      alert(err.message);
    })
  }

  // get

  useEffect(() => {
    function getoffer() {
      axios.get(`${BASE_URL}/offer-service/offers/`).then((res) => {
        console.log(res.data.response);
        setoffer(res.data.response);

      }).catch((err) => { alert(err.message) })
    }

    getoffer();
  }, [])




  return (


    <Container fluid className="bg-light">


      <Navh />
      <br></br>
      <div style={{ backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1667226425853-GFTZP1P5PWAME97VPC6M/AD011219-21_original.jpg"})`, width: "100%", objectFit: "cover", height: "150px" }}>

      </div>
      <Row>
        <Col>
          <h1 style={{ fontSize: "24px", color: "#353535" }} >Latest Uploads</h1>
          <Button variant="dark" href="/createoffer">CREATE OFFERS </Button>
        </Col>
      </Row>

      <br></br>



      <br></br>
      <br></br>


      <Row xs={1} md={4} className="g-4" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        {offer.map((offer, idx) => {

          return (
            <Col>
              <Card>
                <Card.Img variant="top" src={offer.image_url} />
                <Card.Body>
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Text> Description : {offer.description}</Card.Text>
                  <Card.Text className="text-muted">Starting Date: {offer.startDate}</Card.Text>
                  <Card.Text className="text-muted">Expiry: {offer.endDate}</Card.Text>
                  {/*<Button variant="outline-dark" key={offer.id} onClick={handleShow} >EDIT</Button>&nbsp;*/}
                  <Button variant="outline-dark" onClick={() => onDelete(offer.id)}>DELETE</Button>
                  <Button variant="dark" style={{ float: 'right' }} onClick={() => claim()}>Claim Offer</Button>

                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
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
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </Container>




  );
};






