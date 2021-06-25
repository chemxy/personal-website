import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class Contact extends React.Component {
    render() {
        return (

            <>
                <Form>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={1} />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Example file input" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    {/* <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="validationDefault01">First name</label>
                    <input type="text" class="form-control form-control-lg" id="validationDefault01"
                        placeholder="First name" required>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationDefault02">Last name</label>
                    <input type="text" class="form-control form-control-lg" id="validationDefault02"
                        placeholder="Last name" required>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control form-control-lg" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Enter your email" required>
            </div>
            <div class="form-group ">
                <label for="email-title">Subject</label>
                <input type="text" class="form-control form-control-lg" id="email-title" placeholder="Enter subject"
                    required>
            </div>

            <div class="form-group">
                <label for="textarea">Content</label>
                <textarea class="form-control form-control-lg" id="textarea" placeholder="Write contents here"
                    required></textarea>
            </div>
            <div class="form-group">
                <label for="customFile">Attachments</label>
                <input type="file" class="form-control form-control-lg" id="customFile">
            </div>
            <button type="submit" class="btn btn-primary">Send</button> */}
                </Form>
            </>

        )
    }
};

export default Contact;