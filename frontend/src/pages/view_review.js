import React, { useState, useEffect } from "react";
import Nav from '../components/nav'
import Modal from 'react-bootstrap/Modal';
import axios from "axios"

import { Button, Row, Col, Form, Card, Alert, Container, InputGroup, FormLabel } from 'react-bootstrap';
import CircularJSON from "circular-json";

export default function ViewReview() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [rating, setrating] = useState(" ");
  const [text, settext] = useState(" ");
  const [title, settitle] = useState(" ");
  const [search, setSearch] = useState("");
  const [searchstar, setSearchstar] = useState("");
  const [id, setid] = useState('');
  const userId = 1;
  const [review, setreview] = useState([]);

  const handleShow = (id, rating, text, title, userId) => {
    setShow(true);
    setid(id);
    setrating(rating);
    settext(text);
    settitle(title);

  }



  function SendData(e) {

    e.preventDefault();

    const newreview = {
      id: 0,
      rating: +rating,
      text: text,
      title: title,
      userId: userId
    }
    //   const jsonReq= CircularJSON.stringify(newreview)

    axios.post("http://localhost:8094/review-service/review/create", newreview).then(() => {
      ("rating added")
      setrating('');
      settext('');
      settitle('');

      window.location.reload();

    }).catch((err) => {
      alert("error" + err);
    })
  }

  function onDelete(id) {
    console.log(id);
    axios.delete("http://localhost:8094/review-service/review/delete/{id}?id=" + id).then((res) => {
      alert('Deleted Successfully');
      window.location.reload();
    }).catch((err) => {
      alert(err.message);
    })
  }

  function update() {
    const newAgenda = {
      userId,
      rating,
      text,
      title,
      id
    }

    axios.put("LINK", newAgenda).then(() => {

      alert("Updated Successfully");
      window.location.reload();
    }).catch((err => {
      alert(err)
    }))
  }

  useEffect(() => {
    function getreview() {
      axios.get('http://localhost:8094/review-service/review/' + userId).then((res) => {
        console.log(res.data.response);
        setreview(res.data.response);

      }).catch((err) => { alert(err.message) })
    }

    getreview();
  }, [])



  return (
    <>
      <Nav></Nav>
      <div style={{ backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1667226425853-GFTZP1P5PWAME97VPC6M/AD011219-21_original.jpg"})`, width: "100%", objectFit: "cover", height: "240px", opacity: "0.9" }}>
        <h2 style={{ fontSize: "34px", color: "#ffffff", textAlign: "center", paddingTop: "20px" }}>--Reviews--</h2>
        <div style={{ paddingLeft: "440px" }}><Card border="light" style={{ width: '40rem', opacity: "0.78" }}>
          <Card.Body style={{ textAlign: "center" }}>
            <p style={{ fontSize: "20px", color: "#353535", textAlign: "center", paddingTop: "20px" }}>Unveiling the Voice of Our Customers with their Own experience!</p>
            <Button variant="outline-dark" onClick={handleShow} >ADD YOURS</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Your Own Review</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={SendData}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Review</Form.Label>
                    <Form.Control as="textarea" placeholder="#Description" value={text} rows={3} onChange={(e) => settext(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="#Title" value={title} onChange={(e) => settitle(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder="#Rating" value={rating} onChange={(e) => setrating(e.target.value)} />
                  </Form.Group>
                  <Button variant="dark" type='submit'  >
                    Save Changes
                  </Button>{''}

                  <Button variant="dark"   >
                    Edit Changes
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>

                <Button variant="dark" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

          </Card.Body>
        </Card></div>
      </div>
      <br></br>
      <div >
        <h2 style={{ fontSize: "28px", color: "#353535", textAlign: "center", paddingTop: "20px" }}>What our Customers Says</h2>

        <Row style={{ paddingTop: "20px", paddingBottom: "20px", paddingLeft: "20px" }}>
          <Col md={2}> <h2 style={{ fontSize: "24px" }} >Filter by </h2></Col>
          <Col md={4}>
            <Row style={{ width: "400px", paddingLeft: "10px", paddingRight: "10px" }}>
              Title :
              <Col>  <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon1">  #
                </InputGroup.Text>
                <Form.Control
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Title"
                  aria-label="Title"
                  aria-describedby="basic-addon1"
                />
              </InputGroup></Col>
            </Row>
          </Col>
          <Col md={4}>


          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          {review.filter(review => {
            if (search === "") {
              return review
            }
            else if (review.title.toLowerCase().includes(search.toLowerCase())) {
              return review
            }

            return false;

          }).map((review, idx) => {

            return (
              <Col>
                <Card key={review._id}>
                  <Card.Header style={{ backgroundColor: "#494940", height: "30px" }}></Card.Header>
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>{review.title}</Card.Title>
                    <Row style={{ width: "350px", paddingLeft: "10px", paddingRight: "10px" }}>
                      <Col >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9e8d68" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
                        {' '}{review.rating}</Col>

                    </Row>
                    <hr></hr>
                    <Card.Text>
                      {review.text}
                    </Card.Text>
                    <Row><Col style={{ paddingRight: "190px" }}><Button onClick={() => handleShow(review.id, review.rating, review.text, review.title, review.userId)} variant="outline-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" /> </svg></Button></Col>
                      <Col> <Button onClick={() => onDelete(review.id)} variant="outline-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /> </svg></Button></Col></Row>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
        <br>
        </br>
        <div className='text-center p-3' style={{ backgroundColor: "#353535" }}>
        </div>
      </div>
    </>
  );
};

