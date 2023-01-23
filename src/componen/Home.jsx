import React, { useState } from "react";
import {Button,  Form, Row, Col, InputGroup , ButtonGroup, ToggleButton} from "react-bootstrap"
import Content from "./Content";
// import Img from "../style/ppp.jpg"
// import Icon from "../style/search.svg"

function Homes(props) {
  const [radioValue, setRadioValue] = useState('3');
  const [bedValue, setBedValue] = useState("3");
	const [bathValue, setBathValue] = useState("2");
  const [budgetValue, setBudgetValue] = useState("0");

  const startFind = () => {
		props.SearchRooms({
			// duration: durValue,
			// date: dateValue,
			bed: bedValue,
			bath: bathValue,
			// amenities: amenitiesValue,
			budget: budgetValue,
		});
	};

  const radios = [
    { name: 'Day', value: '1' },
    { name: 'Mount', value: '2' },
    { name: 'Year', value: '3' },
  ];

  const bed = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
    { name: '5+', value: '5' },
  ];

  const bath = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
    { name: '5+', value: '5' },
  ];  

    return (
      <>
      <div>
        <Row >
          <Col md={4} >
            <Row className="m-2 p-1">
              <h3>Type OF Rent</h3>
              <Col>
              <ButtonGroup className="d-flex justify-content-between gap-4">
                {radios.map((radios, id) => (
                  <ToggleButton className="rounded" type="radio" name="radios"
                    // key={id}
                    id={`radios-${id}`}
                    variant={radioValue === radios.value ? "success" : "light"}
                    value={radios.value}
                    checked={radioValue === radios.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radios.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              </Col>
            </Row>
            <Row className="m-2">
              <Col >
                <h3>Date</h3>
                  <Form.Control type="date" placeholder="Enter email" />
              </Col>
            </Row>
            <Row className="ms-1 p-1">
              <h3>Properti Room</h3>
              <p style={{color:"Grey"}}>Bedroom</p>
              <Col md={30}>
                <ButtonGroup className="d-flex justify-content-between gap-3 br-4">
                  {bed.map((bed, id) => (
                    <ToggleButton className="rounded w-100"
                          key={id}
                          id={`bed-${id}`}
                          type="radio"
                          variant={bedValue === bed.value ? "success" : "light"}
                          name="bed"
                          value={bed.value}
                          checked={bedValue === bed.value}
                          onChange={(e) => setBedValue(e.currentTarget.value)}
                        >
                          {bed.name}
                    </ToggleButton>
                      ))}
                </ButtonGroup>
            </Col>
            </Row>
            <Row className="ms-2 p-1">
              <p style={{color:"Grey"}}>Bathroom</p>
              <Col>
              <ButtonGroup className="d-flex justify-content-between gap-4 ">
              {bath.map((bath, id) => (
                  <ToggleButton className="rounded w-100"
                        key={id}
                        id={`bath-${id}`}
                        type="radio"
                        variant={
                          bathValue === bath.value ? "success" : "light"
                        }
                        name="bath"
                        value={bath.value}
                        checked={bathValue === bath.value}
                        onChange={(e) => setBathValue(e.currentTarget.value)}
                        
                      >
                        {bath.name}
                      </ToggleButton>
                    ))}
              </ButtonGroup>
            </Col>
            </Row>
            <div className="mb-2 px-4">
                <h2 >Amenities</h2>
                <InputGroup className="d-flex justify-content-between">
                  <Form.Label>Furnished</Form.Label>
                  <Form.Check type="checkbox"/>
                </InputGroup>
                <InputGroup className="d-flex justify-content-between">
                  <Form.Label>Pet Allowed</Form.Label>
                  <Form.Check type="checkbox"/>
                </InputGroup>
                <InputGroup className="d-flex justify-content-between">
                  <Form.Label>Shared</Form.Label>
                  <Form.Check type="checkbox"/>
                </InputGroup>
            </div>
            <div className="ms-4 ">
                <h3>
                  <strong>Budget</strong>
                </h3>
                <Form.Group as={Row}
                  className="fs18 fw-semibold mb-3 d-flex align-items-center"
                  controlId="formHorizontalEmail">
                  <Form.Label column sm={5}>
                    Less than IDR.
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control type="number"	placeholder="Price Range"
                      size="lg"
                      onChange={(e) => setBudgetValue(e.currentTarget.value)}
                    />
                  </Col>
                </Form.Group>
              </div>
            <div className="d-flex justify-content-end">
            <Form.Group className="ms-auto">
                <Button size="lg"	className="px-4"
                  type="button" style={{background:'#006D5B'}} onClick={startFind}>Apply
                </Button>
              </Form.Group>         
            </div>
          </Col>
          <Col md={8}>
            <Content />
          </Col>
        </Row>
      </div>
      </>
    );
  }

export default Homes;