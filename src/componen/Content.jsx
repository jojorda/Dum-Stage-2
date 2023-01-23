
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import '../style/style.css';
import ListData from './data';
function Content() {
    return (
    <>
    <Col>
      <div className='row row-cols-3'>
          {ListData.map((value, index) => {
            return (
              <div key={index} className="p-2 bg">
                <div data-bs-spy="scroll" data-bs-target="#simple-list-example" 
                    data-bs-offset="0" 
                    data-bs-smooth-scroll="true" 
                    className="scrollspy-example" 
                    tabIndex="0">
                      
                <Card className="p-1">
                  <Link to={"/detail/" + index}>
                    <img
                       src={value.image}
                        alt=""
                        // style={{width:300}}
                    />
                    <span className="position-absolute px-2 py-1 bg-white rounded-2 fs-6 mt-2 ms-2">
                      {value.amenities}</span>
                    <Card.Img 
                        variant="top" 
                        src={require("../asset/img/"+ value.image)} />
                  </Link>
                  <Card.Body 
                    className=" bs m-0 p-0 d-flex flex-column gap-1"
                    >
                    <Card.Title className="fs18 fw-semibold m-1 p-0 mt-2">
                      {value.price} / {value.rent}
                    </Card.Title>
                    <Card.Text className="fs10 m-0 p-0 fw-semibold">
                      {value.property}</Card.Text>
                    <Card.Text className="fs10 m-0 p-0 text-secondary fw-semibold">
                      {value.addres}</Card.Text>
                  </Card.Body>
                </Card>
                </div>
              </div>
            );
          })}
      </div>
    </Col>
    </>
    )
}

export default Content;