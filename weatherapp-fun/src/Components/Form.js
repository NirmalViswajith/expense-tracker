import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Report from "./Report";

const WForm = () => {
  const [location, setLocation] = useState("");
  const [showReport, setShowReport] = useState(false);

  const enteredLocation = (event) => {
    setLocation(event.target.value);
  };

  const locationSubmitted = (event) => {
    event.preventDefault();
    if (location.trim().length > 0) {
      setShowReport(true);
    }
    setLocation("");
  };

  const hideReport = () => {
    setShowReport(false);
  };

  return (
    <React.Fragment>
      <Container
        fluid
        style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "25vh" }}
      >
        <Form
          onSubmit={locationSubmitted}
          style={{ maxWidth: "600px" }}
          className="d-flex flex-row my-3"
        >
          <h6 className="my-2 mx-2">Location:</h6>
          <Form.Group>
            <Form.Control
              value={location}
              type="text"
              placeholder="Enter Your Located City"
              onChange={enteredLocation}
            />
          </Form.Group>
          <div className="col-auto mx-2">
            <Button type="submit" className="btn btn-primary">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
      {showReport && <Report click={hideReport} />}
    </React.Fragment>
  );
};

export default WForm;
