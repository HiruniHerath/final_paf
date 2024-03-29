import React, {useEffect, useState} from "react";
import Nav from '../components/nav'
import axios from "axios"
import config from './config';
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap';

export default function ViewPost() {
    const BASE_URL = config.API_URL;
    const [post, setpost] = useState([]);


    const [postId, setpostId] = useState(" ");
    const handleLike = (id) => {
        axios.put(`${BASE_URL}/post-service/post/add-like/{postId}?postId=` + id).then(() => {
            ("like added")

            window.location.reload();

        }).catch((err) => {
            alert("error");
        })

    }


    useEffect(() => {
        function getpost() {
            axios.get(`${BASE_URL}/post-service/post/`).then((res) => {
                console.log(res.data.response);
                setpost(res.data.response);

            }).catch((err) => {
                alert(err.message)
            })
        }

        function getcomment() {
            axios.get(`${BASE_URL}/post-service/comment/`).then((res) => {
                console.log(res.data.response);
                setcomment(res.data.response);

            }).catch((err) => {
                alert(err.message)
            })
        }

        getpost();
        getcomment();
    }, [])


// comment
    const [text, settext] = useState(" ");
    const [id, setid] = useState('');
    const [postid, setpostid] = useState('');
    const [comment, setcomment] = useState([]);

    const handleShow = (id, text, postid) => {
        setid(id);
        settext(text);
        setpostid(postid);
    }


    function SendData(e) {

        e.preventDefault();

        const newreview = {
            id: id,
            postId: postid,
            text: text,
            userId: 1

        }

        axios.post(`${BASE_URL}/post-service/comment/create`, newreview).then(() => {
            ("comment added")
            settext('');


            window.location.reload();

        }).catch((err) => {
            alert("error" + err);
        })
    }

    function onDelete(id) {
        console.log(id);
        axios.delete(`${BASE_URL}/post-service/post/delete/{postId}?postId=` + id).then((res) => {
            alert('Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }


    return (
        <>
            <Nav></Nav>
            <br></br>
            <div>
                <div>
                    <Container fluid className=" text-light py-4" style={{backgroundColor: '#353535'}}>
                        <Container>
                            <Row>
                                <Col>
                                    <h2 style={{fontSize: "28px"}} className="display-4">Latest Uploads</h2>
                                </Col>
                                <Col>
                                    <div style={{paddingRight: "20px", paddingBottom: "20px"}}>
                                        <Button variant="outline-light" style={{float: "right"}} href="/createpost">Create
                                            Post</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                    <br></br>

                    <br></br>


                    <Row xs={2} md={3} className="g-3" style={{paddingLeft: "90px", paddingRight: "90px"}}>


                        {post.map((posts, idx) => {
                            const filteredComments = comment.filter(comments => comments.postId === posts.id);

                            return (
                                <Col>
                                    <Card key={posts.id}>
                                        <Card.Title style={{paddingTop: "25px", paddingLeft: "10px"}}>
                                            <svg width="35" height="35" stroke-width="1.5" viewBox="0 0 24 24"
                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 18V17C7 14.2386 9.23858 12 12 12V12C14.7614 12 17 14.2386 17 17V18"
                                                    stroke="currentColor" stroke-linecap="round"/>
                                                <path
                                                    d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                                                    stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                                <circle cx="12" cy="12" r="10" stroke="currentColor"
                                                        stroke-width="1.5"/>
                                            </svg>
                                            {posts.caption}</Card.Title>
                                        <Card.Text style={{paddingLeft: "10px"}}>
                                            {posts.createdAt}
                                        </Card.Text>
                                        <Card.Img variant="top" style={{height: "200px", objectFit: "cover"}}
                                                  src={posts.imageUrls} alt="Posted image"/>
                                        <Card.Body>

                                            <Row>
                                                <Col>
                                                    <button onClick={() => handleLike(posts.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                             height="16"
                                                             fill="currentColor" class="bi bi-heart"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                        </svg>
                                                    </button>
                                                    {posts.likes}</Col>
                                                <Col style={{paddingRight: "260px"}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" class="bi bi-chat-quote"
                                                         viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                                        <path
                                                            d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                                                    </svg>
                                                </Col>

                                            </Row>
                                        </Card.Body>

                                        <Card.Footer>

                                            {filteredComments.map((commentss, index) => (
                                                <Card.Text>
                                                    <svg width="30" height="30" stroke-width="1.5"
                                                         viewBox="0 0 24 24"
                                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M7 18V17C7 14.2386 9.23858 12 12 12V12C14.7614 12 17 14.2386 17 17V18"
                                                            stroke="currentColor" stroke-linecap="round"/>
                                                        <path
                                                            d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                                                            stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round"/>
                                                        <circle cx="12" cy="12" r="10" stroke="currentColor"
                                                                stroke-width="1.5"/>
                                                    </svg>
                                                    {commentss.text}
                                                </Card.Text>

                                            ))}
                                            <hr></hr>
                                            <Form onSubmit={SendData}>
                                                <Form.Group controlId="formBasicComment">
                                                    <Row>
                                                        <Col> <Form.Label style={{
                                                            paddingTop: "10px",
                                                            paddingBottom: "5px"
                                                        }}>Comment</Form.Label></Col>
                                                        <Col style={{
                                                            paddingRight: "245px",
                                                            paddingTop: "5px",
                                                            paddingBottom: "5px"
                                                        }}> <Button onClick={() => onDelete(posts.id)}
                                                                    variant="outline-dark">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16" fill="currentColor" class="bi bi-trash"
                                                                 viewBox="0 0 16 16">
                                                                <path
                                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                                <path fill-rule="evenodd"
                                                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                            </svg>
                                                        </Button></Col>
                                                    </Row>
                                                    <Form.Control as="textarea" rows={3} onChange={(e) => {
                                                        settext(e.target.value);
                                                        setpostid(posts.id)
                                                    }} placeholder="Enter your comment"/>
                                                </Form.Group>
                                                <Row style={{paddingTop: "6px", paddingBottom: "7px"}}>
                                                    <Col><Button variant="outline-dark" type="submit">
                                                        POST COMMENT
                                                    </Button></Col>
                                                </Row>
                                            </Form>
                                        </Card.Footer>

                                    </Card>


                                </Col>

                            );

                        })};


                    </Row>
                    {/*Default card : remove it if not needed
                     <Container>
                        <Row xs={2} sm={8} md={3}>
                            <Col>
                               
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/09/21/0/lindens.jpg.rend.hgtvcom.441.353.suffix/1663790316300.jpeg" />
                                    <Card.Body>
                                        <Card.Title>Post title by shamilka</Card.Title>
                                        <Card.Text>
                                            post description
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://www.exploregeorgia.org/sites/default/files/styles/list_component/public/2021-01/forza-storico-patio-atlanta.jpg?itok=aWjvTAyb" />
                                    <Card.Body>
                                        <Card.Title>Post title by adithya</Card.Title>
                                        <Card.Text>
                                            post description
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Container> */}
                </div>
                <br>
                </br>
                <div className='text-center p-3' style={{backgroundColor: "#353535"}}>
                </div>
            </div>
        </>
    );
};


