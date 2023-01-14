import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";


export default function Contribute() {
    return (
        <>
            <Header/>
            <Container className="m-5 text-center">
                <p className="heading">Contribute To Us</p>
                <p className="subheading">We really appreciate your help. Your contribution helps us grow and will be a valuable addition to our research.</p>
                <Form className="text-start my-5">
                    <Row className="m-3">
                        <Col>
                            <Form.Group controlId="name">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" ></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email"></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col>
                            <Form.Group controlId="phoneNo">
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control type="tel"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="cropType">
                                <Form.Label>Type of Crop</Form.Label>
                                <Form.Control type="text"></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col>
                            <Form.Group controlId="health">
                                <Form.Label>Health Status</Form.Label>
                                <Form.Select>
                                    <option value="healthy">Healthy</option>
                                    <option value="infected">Infected</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="image">
                                <Form.Label>Upload Image</Form.Label>
                                <Form.Control type="file"></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col></Col>
                        <Col className="d-flex justify-content-center">
                            <Button className="customBtn" type="submit">Submit</Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Form>
            </Container>
            <Footer/>
        </>
    )
}