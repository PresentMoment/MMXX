import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="content">
      <p>
        Contact <span style={{ height: "3rem" }} />
        <span /> MMXX <span /> Via Donatello 35 <span /> 20100 MILANO{" "}
        <span style={{ height: "3rem" }} />
        Tel number <span style={{ height: "2rem" }} /> Mail address
        <span style={{ height: "3rem" }} />
        Newsletter
      </p>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button className="submit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
