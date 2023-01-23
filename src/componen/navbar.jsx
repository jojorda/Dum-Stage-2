import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Form, Image,  Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate} from 'react-router-dom';
import Profiles from '../style/profil.png'

function Navbarr() {
    // const {id} = useParams()
    const move = useNavigate();

  //// Sign Up
    const [register, setRegister] = useState(false);
    const handleCloseRegister = () => setRegister(false);
    const handleRegister = () => setRegister(true)

    const [signUp, setSignUp] = useState({
        full_name: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        address: ""
    })

    const redirectSignUp = () => {
      handleLogin();
      handleCloseRegister();
    };

    const handleChangeSignUp = (e) => {
        setSignUp({
            ...signUp,
            [e.target.name]:e.target.value
        })
    }

    const handleSignUp = (e) => {
        e.preventDefault()
       
        localStorage.setItem("SignUp", JSON.stringify(signUp))
        localStorage.setItem("roles", (signUp.status))
    }
    /// end Sign Up

  //// Sign In
    const [login, setLogin] = useState(false);
    const handleClose = () => setLogin(false);
    const handleLogin = () => setLogin(true);

    const [signIn, setSignIn] = useState({
        email:"",
        password:""
    })

    const redirectSignIn = () => {
     handleRegister();
     handleClose(); 
    }

    const handleChangeSignIn = (e) => {
        setSignIn({
            ...signIn,
            [e.target.name]:e.target.value
        })
    }
    const handleSignIn = (e) => {
        e.preventDefault()

        localStorage.getItem("SignIn", JSON.stringify(signIn))

        const saved = JSON.parse(localStorage.getItem("SignUp"));
        if (saved.email === signIn.email && saved.password === signIn.password) {
            move("/");
            alert("You are success to login");
            localStorage.setItem("SignIn", JSON.stringify(signIn));
        } else {
          alert("Email or Password is wrong!! ");
        }
    }
    useEffect(() => {
        let login = localStorage.getItem("SignIn");
        if (login) {
          setSignIn(false);
        } else {
            setSignIn(true);
          // console.log(signIn);
        }
      }, []);
      
  ///// end sign In
    

    return (
        <Navbar bg="light" expand="lg">
            <Container className='d-flex justify-content-space-between alignItems-center'>
                <div>
                    <Navbar.Brand href="/" ><Image src="/img/Icon.svg" width="80" alt=''/></Navbar.Brand>
                </div>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" mx-auto">
                        <Form className="d-flex">
                          <Form.Control
                              type="search"
                              placeholder="Search"
                              className="me-0"
                              aria-label="Search"
                            />
                          <Button variant="outline-dark"><Image src="/img/search.png"/></Button>
                        </Form>
                        </Nav>
                        
                    </Navbar.Collapse>
                        <div>
                            {localStorage.getItem("SignIn") ? (
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic"
                                        className="border-0" >
                                        <Image src="/img/User.svg" alt="human" style={{
                                                fontSize: 25,
                                                color: "#FFFFFF",
                                            }}/>
                                    </Dropdown.Toggle>
                                    {localStorage.getItem("roles") === "owner" ? (
                                        <Dropdown.Menu>
                                            <Dropdown.Item href='/profile'> 
                                                <Image src={Profiles} alt=""></Image> Profile
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Image src="/img/Shape.png" alt=""></Image> Add Poperty
                                            </Dropdown.Item>
                                            <Dropdown.Item href='/historys'>
                                                <Image src="/img/histry.png" alt=""></Image> History
                                            </Dropdown.Item>
                                            <hr></hr>
                                            <Dropdown.Item
                                                onClick={()=>{
                                                    localStorage.removeItem("SignIn")
                                                    move("/")
                                                }}>
                                                <Image src="/img/logout.png" alt=""></Image> Logout
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    ) : (
                                        <Dropdown.Menu>
                                            <Dropdown.Item href='/profile'>
                                                <Image src={Profiles} alt=""></Image> Profile
                                            </Dropdown.Item>
                                            <Dropdown.Item href='/myticket/:id'>
                                                <Image src="/img/calen.png" alt=""></Image> My Booking
                                            </Dropdown.Item>
                                            <Dropdown.Item href='/historys'>
                                                <Image src="/img/histry.png" alt=""></Image> History
                                            </Dropdown.Item>
                                            <hr></hr>
                                            <Dropdown.Item
                                            onClick={()=>{ localStorage.removeItem("SignIn")
                                                move("/")
                                            }} >
                                                <Image src="/img/logout.png" alt=""></Image> Logout
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    )}
                                </Dropdown>
                    ) : (
                        <div>
                            <Button variant="light" className='me-2' 
                              show={login} 
                              onClick={handleLogin}>Sign In</Button>
                            <Modal show={login} 
                              onHide={handleClose} 
                              size="sm">
                                <Modal.Header style={{ display: "flex", justifyContent: "center" }}>
                                    <Modal.Title >Sign In</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSignIn}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bloder">Email</Form.Label>
                                            <Form.Control  style={{ backgroundColor: "#D2D2D240"}}
                                                type="email" name="email"
                                                onChange={handleChangeSignIn}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bloder">
                                                Password
                                            </Form.Label>
                                            <Form.Control style={{ backgroundColor: "#D2D2D240"}}
                                                type="password" name="password"
                                                onChange={handleChangeSignIn}
                                            />
                                        </Form.Group>
                                        <Modal.Footer className="buttonlogin">
                                            <Button
                                                type="submit" variant="primary"
                                                className="buttonloginacc"
                                                onClick={handleClose}
                                                style={{ width: "100%", background:"purple" }}>
                                                Sign In
                                            </Button>
                                        </Modal.Footer>
                                        <div className='justify-content-between ms-4'>
                                        <p style={{color:'grey',fontSize:'13px',marginTop:'2px'}}>Don't have an account? Klik 
                                        <Button style={{fontSize:'13px', marginTop:'0px'}} 
                                          variant="link" 
                                          onClick={redirectSignIn}>Here</Button></p>
                                    </div>
                                    </Form>
                                </Modal.Body>

                                   
                                
                            </Modal>

                            <Button variant="secondary" show={register}
                                onClick={handleRegister}>Sign Up</Button>

                            <Modal show={register} onHide={handleCloseRegister} size="md">
                                <Modal.Header style={{ display: "flex", justifyContent: "center" }}>
                                    <Modal.Title>Sign Up</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form onClick={handleSignUp}>
                                        <Form.Group className="mb-1">
                                            <Form.Label className="fw-bloder">Full Name</Form.Label>
                                            <Form.Control style={{ backgroundColor: "#D2D2D240"}}
                                                type="text"
                                                name="full_name"
                                                onChange={handleChangeSignUp}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mt-1">
                                            <Form.Label className="fw-bloder">Email</Form.Label>
                                            <Form.Control style={{ backgroundColor: "#D2D2D240"}}
                                                type="email"
                                                name="email"
                                                onChange={handleChangeSignUp}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-1">
                                            <Form.Label className="fw-bloder">Password</Form.Label>
                                            <Form.Control style={{ backgroundColor: "#D2D2D240"}}
                                                type="password"
                                                name="password"
                                                onChange={handleChangeSignUp}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-1">
                                            <Form.Label className="fw-bloder " type="number">
                                                Phone
                                            </Form.Label>
                                            <Form.Control style={{ backgroundColor: "#D2D2D240"}}
                                                type="number"
                                                name="phone"
                                                onChange={handleChangeSignUp}
                                            />

                                            <Form.Label className="fw-bloder mt-1" type="number">
                                                List As
                                            </Form.Label>
                                            <Form.Select style={{ backgroundColor: "#D2D2D240"}}
                                                aria-label="Default select example"
                                                name="status"
                                                onChange={handleChangeSignUp}
                                            >
                                                <option>-- Pilih --</option>
                                                <option value="tenant">Tenant</option>
                                                <option value="owner">Owner</option>
                                            </Form.Select>
                                            <Form.Label className="fw-bloder mt-1" type="number">
                                                Gender
                                            </Form.Label>
                                            <Form.Select style={{ backgroundColor: "#D2D2D240"}}
                                                aria-label="Default select example"
                                                name="gender"
                                                onChange={handleChangeSignUp}
                                            >
                                                <option>Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bloder">Address</Form.Label>
                                            <Form.Control style={{ backgroundColor: "#D2D2D240"}}
                                                as="textarea"
                                                name="address"
                                                onChange={handleChangeSignUp}
                                            />
                                        </Form.Group>
                                        <Modal.Footer className="buttonlogin">
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                className="buttonloginacc"
                                                onClick={redirectSignUp}
                                                style={{ width: 500, backgroundColor: "#5A57AB" }}
                                                >
                                                Sign Up
                                            </Button>
                                        </Modal.Footer>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    )}
                </div>
            </Container>
        </Navbar>
    );
}

export default Navbarr;

