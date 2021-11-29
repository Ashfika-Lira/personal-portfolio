import React from 'react';
import { Form, Button } from 'react-bootstrap';
const ContactMe = () => {
  return (

    <div className="row container">
      <h2 className="text-muted text-center ">Contact Me</h2>
      <div className="col-lg-6 col-sm-12 my-5">

        <div  >
          <img style={{ width: '100%' }} src="https://image.freepik.com/free-vector/contact-us-landing-page-flat-design_23-2148284185.jpg" alt="" />
        </div>

      </div>
      <div className="col-lg-6 col-sm-12 my-4 ">





        <Form action="https://formsubmit.co/ashleyalam33@gmail.com" method="POST" className="">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="Number" placeholder="phone Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    </div>


  );
};

export default ContactMe;