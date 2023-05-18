import React,{useState,useEffect} from 'react';
import Nav from '../components/nav'
import { Form, FormControl, InputGroup, Col, Row, Button, Card, Image , Modal } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';
import axios from "axios"



export default function Profile() {
 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
const [profile,setprofile] = useState([]);
const usernm = 'adithya';
 const [id, setid] = useState(" ");
  const[ userID, setuserID] = useState(" ");
const [username, setusername ] = useState(" ");
const [bio, setbio ] = useState(" ");
      const [age,  setage] = useState(" ");
const [location,  setlocation] = useState(" ");
      const [profilePictureUrl,  setprofilePictureUrl] = useState(" ");

 const handleShow = (id,userID,username,bio,age,location,profilePictureUrl ) => {
           setShow(true);
           setid(id);
           setuserID(userID);
           setusername(username);
           setbio(bio);
           setage(age);
           setlocation(location);
           setprofilePictureUrl(profilePictureUrl);




       }


useEffect(()=>{
    function getprofile(){
        axios.get('http://localhost:8093/profile-service/user-profile/'+usernm).then((res)=>{
            console.log(res.data.response);
            setprofile(res.data.response);

        }).catch((err)=>{alert(err.message)})
    }

getprofile();
},[])
function sendData(e) {

        const newprofile = {
                      bio,
                     age,
                 location,
                      profilePictureUrl
        }

        axios.post("http://localhost:8093/profile-service/user-profile/create", newprofile).then(() => {
            ("data added")
                       setbio(bio);
                       setage(age);
                       setlocation(location);
                       setprofilePictureUrl(profilePictureUrl);
            window.location.reload();

        }).catch((err) => {
            alert("error");
        })
    }
function onDelete(id) {
        console.log(id);
        axios.delete("http://localhost:8093/profile-service/user-profile/delete{id}?id=" + id).then((res) => {
            alert('Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }



    return (
        <><Nav></Nav>
        <section>
            <div style={{ backgroundImage: `url(${"https://c8.alamy.com/comp/2J5CAP0/beautiful-hand-drawn-delicious-fast-food-seamless-pattern-tasty-background-great-for-textiles-wrapping-packaging-wallpapers-vector-design-2J5CAP0.jpg"})`, width: "100%", objectFit: "cover", height: "150px" }}>
    </div>
    <Row style={{paddingLeft:"40px",paddingRight:"20px" , paddingTop:"20px"}}>
        <Col><Card style={{width:"500px"}}>
            <Card.Img variant="top" src={profile.profilePictureUrl}  style={{height:"350px",objectFit:"cover" }}/>
          </Card></Col>
        <Col xs={7}><h5>View All Uploads</h5> <Row xs={1} md={2} className="g-4">

        <Col>
          
          <Card>
            <Card.Body>
                          <Card.Title>User Name : {profile.username}</Card.Title>
                          <Card.Text>
                             <div> User Bio :{profile.bio}</div>
                              <div> User Age :{profile.age}</div>
                               <div> User Location :{profile.location}</div>
                          <Button variant="outline-dark"  onClick={() => handleShow(profile.id,profile.userID,profile.username,profile.bio,profile.age,profile.location,profile.profilePictureUrl )}   >EDIT</Button>{' '}
                          <Button variant="outline-dark"  onClick={() => onDelete()} >DELETE</Button>
                          </Card.Text>
                        </Card.Body>

                         <Modal show={show} onHide={handleClose}>
                                      <Modal.Header closeButton>
                                        <Modal.Title>Edit Your Profile</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>

                                      <Form onSubmit={sendData}>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                          <Form.Label>Bio</Form.Label>
                                                          <Form.Control as="textarea" placeholder="#Description" value={bio} rows={3} onChange={(e) => setbio(e.target.value)} />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                          <Form.Label>Age</Form.Label>
                                                          <Form.Control type="text" placeholder="#Title" value={age} onChange={(e) => setage(e.target.value)}/>
                                                        </Form.Group>
                                                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                                                                  <Form.Label>Location</Form.Label>
                                                                                                                  <Form.Control type="text" placeholder="#Title" value={location} onChange={(e) => setlocation(e.target.value)}/>
                                                                                                                </Form.Group>
                                                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                                                                   <Form.Label>Image Url</Form.Label>
                                                                                                                   <Form.Control type="text" placeholder="#Title" value={profilePictureUrl} onChange={(e) => setprofilePictureUrl(e.target.value)}/>
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
          </Card>
        </Col>

    </Row></Col>
       
      </Row>
       
   

   
  



        </section></>






    

   


    
);
}