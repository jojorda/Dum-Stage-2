// import { FormatRupiah } from "@arismun/format-rupiah";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap"
import { useState } from "react"
import {  useNavigate, useParams } from "react-router-dom"
// import Bath from '/img/bath.svg'

function Detail(props) {
    const Navigation = useNavigate()
    const { id } = useParams()
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [checkIn, setCheckIn] = useState({
        check_in: "",
        check_out: ""
    })

    const handleCheckInAndOut = (e) => {
        setCheckIn({
            ...checkIn,
            [e.target.name]: e.target.value
        })
    }
    const handle = (e) => {
        // e.preventDefault()
        // setShow(true)
        localStorage.setItem("Date", JSON.stringify(checkIn))
    }

    return (
        <>
        <Row>
            <Col md={50}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "50px 0px 0px 0px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div>
                        <Image style={{ width: 820, height: 400 }}
                            src={props.book[id].image}
                            alt=""
                        ></Image>
                    </div>
                    <div className="mt-2 d-flex justify-content-between gap-1">
                        <Image src={props.book[id].img1} alt=""></Image>
                        <Image src={props.book[id].image} alt="" ></Image>
                        <Image src={props.book[id].img2} alt=""></Image>
                    </div>
                </div>
                <div style={{ width: 1000 }}>
                    <div >
                        <h2 className="fw-bold mt-5">{props.book[id].name_poperty}</h2>
                    </div>
                    <div className="d-flex" style={{ justifyContent: "space-between" }}>
                        <div>
                            <p className="fw-bold" style={{ fontSize: 18 }}>Rp.{props.book[id].price}/ {props.book[id].TOR}</p>
                            <p style={{color:'grey'}}>{props.book[id].address}</p>
                        </div>
                        <div className="d-flex">
                            <div>
                                <p style={{color:'grey'}}>Bedrooms</p>
                                <div className="d-flex" >
                                    <h5 style={{ fontWeight: "bold" }}>{props.book[id].bed_room}</h5>
                                    <Image className="ms-3" src="/img/bed.svg" alt="" />
                                </div>
                            </div>
                            <div className="ms-5">
                                <p style={{color:'grey'}}>Bathrooms</p>
                                <div className="d-flex" >
                                    <h5 style={{ fontWeight: "bold" }}>{props.book[id].bath_room}</h5>
                                    <Image className="ms-3" src="/img/bath.svg" alt="" />
                                </div>
                            </div>
                            <div className="ms-5">
                                <p style={{color:'grey'}}>Area</p>
                                <h5>{props.book[id].area}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p className="fw-bold" style={{ fontSize: 18 }}>Description</p>
                        <p>{props.book[id].description}</p>
                    </div>
                </div>
                {/* <div>
                    {!localStorage.getItem("")

                    }

                </div> */}
                <div>
                {localStorage.getItem("SignIn") ? (
                    <div className="d-flex justify-content-md-end" >
                        <Button variant='primary' 
                            style={{ width: 200, height: 50, backgroundColor: "#5A57AB", border: "0px",borderRadius: 7 }} 
                            className="me-5" onClick={handleShow}>BOOK NOW</Button>

                             <Button variant='primary' 
                            style={{ width: 200, height: 50, backgroundColor: "#5A57AB", border: "0px",borderRadius: 7 }} 
                            className="me-5" onClick={handleShow}>BOOK NOW</Button>

                          <Modal show={show} onHide={handleClose}> 
                            <Modal.Header style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Modal.Title>How long you will stay</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" style={{ display: "flex", flexDirection: "column" }} controlId="exampleForm.ControlInput1">
                                        <Form.Label style={{ fontWeight: "bold" }}>Check-in</Form.Label>
                                        <input type="date" name="check_in" onChange={handleCheckInAndOut} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" style={{ display: "flex", flexDirection: "column" }} controlId="exampleForm.ControlInput1">
                                        <Form.Label style={{ fontWeight: "bold" }}>Check-Out</Form.Label>
                                        <input type="date" data-provide="datepicker" name="check_out" onChange={handleCheckInAndOut} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <Button variant="primary" onClick={() => {
                                    handle();
                                    Navigation(`/myticket/${id}`)
                                }}
                                    style={{ backgroundColor: "#5A57AB", width: 200 }}>
                                    Order Bookings
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div> 
                   ) : (
                  <></>
                )}  
                </div>
            </div>
            </Col>
        </Row>
        </>
    );
}

export default Detail;
