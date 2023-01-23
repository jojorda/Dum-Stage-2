import { Table, Container,  Row, Col, Image } from "react-bootstrap"
// import { useState } from "react"
import { useParams } from "react-router-dom";
// import Profile from "../style/calen.png";

function MyBooking(props) {
    const {id} = useParams()

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const getData = JSON.parse(localStorage.getItem("Date"))
    const getProfile = JSON.parse(localStorage.getItem("SignUp"))
    console.log(id)
    // console.log(getData,"hallo guys")
    // console.log(props.book[id].price)
    return (
        <Container>
          {props.book.map((index) => {
                return (
                    
            <Row>
            <div style={{ marginTop: 30, boxShadow: "0px 0px 1px", borderRadius: 10, padding: "0px 30px 0px 30px" }}>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                    <div className="p-4">
                        <img src="/img/Icon.svg" width={110} alt="" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2 className="p-3">Invoice</h2>
                        <h5>{getData.check_in}</h5>
                    </div>
                </div>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                    <div>
                        <h3 className="md-5">House Astina</h3>
                        <Col md={8}>
                        <p>Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan</p>
                        <Image src="/img/approf.png"/>
                        </Col>
                        <img src="/style/Icon.svg" alt="" />
                    </div>
                    <div style={{ marginRight: -80, marginTop: 10 }}>
                        <img src="/img/prove.svg" alt="" />
                    </div>
                    <div>
                      <Col md={5} >
                        <Image className="ml-3" src="/img/elip.png"/>
                        <div style={{height:'50px',padding:'2px',marginLeft:'5px' }} className="vr me-1"></div>
                        <Image src="/img/elips.png"/>
                      </Col>
                    </div>
                        <Col md={15}>
                        <div>
                            <h5>Check-in</h5>
                            <p style={{color:'grey'}}>{getData?.check_in}</p>
                        </div>
                        
                        <div>
                            <h5>Check-Out</h5>
                            <p style={{color:'grey'}}>{getData?.check_out}</p>
                        </div>
                        </Col>
                    {/* </div> */}
                    <div>
                        <div>
                            <h5>Amenities</h5>
                            <p style={{color:'grey'}}>Furnished</p>
                        </div>
                        <div>
                            <h5>Type of Rent</h5>
                            <p style={{color:'grey'}}>Year</p>
                        </div>
                    </div>
                    <div className="d-flex" style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Image className="md-4" src="/img/code.png" alt="" style={{ width: 120, height: "auto" }} />
                       
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Full Name</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}1</td>
                            <td style={{color:'grey'}}>{getProfile?.full_name}</td>
                            <td style={{color:'grey'}}>{getProfile?.gender}</td>
                            <td style={{color:'grey'}}>{getProfile?.phone}</td>
                            <td style={{ fontWeight: "bold" }}>Long Time rent</td>
                            <td>:</td>
                            <td style={{ fontWeight: "bold" }}>1 Year</td>
                        </tr>
                        <tr>
                            <td colSpan={5} style={{ fontWeight: "bold" }}> Total
                            </td>
                            <td>:</td>
                            <td style={{ fontWeight: "bold",color:"#3CF71E" }}> {index.price}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            </Row>
            )
          })};
        </Container> 
    );
}
export default MyBooking;
