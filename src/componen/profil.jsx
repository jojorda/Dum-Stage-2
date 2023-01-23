import React, { useState } from "react";
import { Button, Card, CardGroup, ListGroup, Container, Modal, Form, } from "react-bootstrap";

// IMPORT IMAGES
import Name from "../style/Vector.png";
import Ema from "../style/email.jpg";
import Phone from "../style/phone.png";
import Statuss from "../style/status.png";
import Zayn from "../style/foto.jpg";
import Addres from "../style/locasi.png";
import Gen from "../style/gender.png";
import Password from "../style/password.png"
import { useNavigation } from "react-router-dom";
// import { Pass } from "react-bootstrap-icons";

export default function Profile(props) {
  const profile = JSON.parse(localStorage.getItem("SignUp"))
  console.log(profile)
  const hiddenFileInput = React.useRef(null);

  const [image, setImage] = useState("");
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  return (
    <>
      <CardGroup>
        <Container
              className="shadow row row-cols-2 mx-auto"
              style={{
                boxShadow: "0px 0px 4px rgba(5, 5, 5, 0.08)",
                marginTop: "3rem",
                width: "58rem",
                minHeight: "10rem",
                borderRadius: "1x",
                borderWidth: "3px",
                borderColor: "#FFFFFF",
                backgroundColor: "white",
              }} 
              >
          <div>
            <Card.Header className="fw-bold fs-3 " style={{marginBottom:"1rem"}}>Personal Info</Card.Header>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start">
                <img src={Name} alt="" style={{marginTop: "1rem"}}/>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{profile?.full_name}</div>Full Name</div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
              <img src={Ema} alt="" style={{
                marginTop: "1rem",
                width: "30px",
                height: "25px",
                backgroundColor: "white",
              }}/>
              <div className="ms-2 me-auto ">
                <div className="fw-bold">{profile.email}</div> Email</div>
            </ListGroup.Item>
            
            <ListGroup.Item as="li" className="me-auto">
            <img src={Password} alt="" style={{
                marginTop: "1rem",
                width: "30px",
                height: "25px",
                backgroundColor: "white",
                marginLeft:"3px"
              }}/>
              {/* <div> */}
               {/* {localStorage.getItem("SignIn") ? ( */}
               <Button variant="password " className="fw-bold color text-info " >Change Password</Button>
              {/* <Modal show={show} onHide={handleClose}> 
                            <Modal.Header style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Modal.Title>How long you will stay</Modal.Title>
            </Modal.Header>*/}
                            {/* <Modal.Body>
                                <Form> 
                                   <Form.Group className="mb-3" style={{ display: "flex", flexDirection: "column" }} controlId="exampleForm.ControlInput1">
                                        <Form.Label style={{ fontWeight: "bold" }}>Check-in</Form.Label>
                                        <input type="date" name="check_in" onChange={handleCheckInAndOut} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" style={{ display: "flex", flexDirection: "column" }} controlId="exampleForm.ControlInput1">
                                        <Form.Label style={{ fontWeight: "bold" }}>Check-Out</Form.Label>
                                        <input type="date" data-provide="datepicker" name="check_out" onChange={} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body> 
                            <Modal.Footer style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <Button variant="primary" onClick={() => {
                                    localStorage.setItem("Date", JSON.stringify(checkIn));
                                    useNavigation(`/myticket/${id}`)
                                }}
                                    style={{ backgroundColor: "#5A57AB", width: 200 }}>
                                    Order Bookings
                                </Button>
                            </Modal.Footer> */}
                        {/* </Modal>
                    </div> 
                   ) : (
                  
                )}     */}
              {/* </div> */}
              <div className="ms-5 mb-3">Password</div> 
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <img src={Statuss} alt="" style={{
                marginBottom:"1rem",
                width: "30px",
                height: "34px",
                backgroundColor: "white",
              }}/>
              <div className="ms-2 me-auto">
                  <div className="fw-bold" >
                    {profile?.status}
                  </div>
                Status
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <img src={Gen} alt="" style={{
                marginBottom: "1rem",
                marginTop: "1rem",
                width: "30px",
                height: "25px",
                backgroundColor: "white",
              }}/>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{profile?.gender}</div> Gender </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <img src={Phone} alt="" style={{
              marginBottom: "1rem",
              marginTop: "1rem",
              width: "30px",
              height: "25px",
              backgroundColor: "white",
            }}/>
              <div className="m-2 me-auto">
                <div className="fw-bold">{profile?.phone}</div> Mobile Phone </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <img src={Addres} alt="" style={{
                  marginBottom: "1rem",
                  marginTop: "1rem",
                  width: "30px",
                  height: "25px",
                  backgroundColor: "white",
                }}/>
              <div className="m-2 me-auto">
                <div className="fw-bold">{profile?.address}</div>
                Address 
              </div>
            </ListGroup.Item>
      </div>
      <div>
     


<Card className="col-md-2 offset-6 mt-3" variant="primary">
              <Card.Img src={image === "" ? Zayn : image} style={{ width: "220px" }} />
              <label htmlFor="input-pic">
                <Button
                  onClick={handleClick}
                  className="mt-2 fw-bold"
                  variant="primary"
                  style={{ width: "220px" }}
                >
                  Change Photo Profile
                </Button>
                <input
                  onChange={(e) => {
                    setImage(URL.createObjectURL(e.target.files[0]));
                    handleChange();
                  }}
                  id="input-pic"
                  type="file"
                  ref={hiddenFileInput}
                  // style={{ backgroundColor: " black", width: "100px", zIndex: "-5" }}
                  style={{ display: "none" }}
                />
              </label>
            </Card>
      </div>
      </Container>
      
    </CardGroup>
    </>
  );
}