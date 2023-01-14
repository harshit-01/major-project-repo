import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const serviceID = 'service_ekr887l'
const publicKey = 'Wd5h0UVRI2iClsFZZ'
const templateID = 'template_s8xm61h'


export default function Contact() {

    const form = useRef()

    function sendEmail() 
    {
        emailjs.sendForm(serviceID,templateID,form.current,publicKey)
        .then((res) => {
            console.log(res.text)
        },(err) => {
            console.log(err.text)
        })
    }

    return(
        <>
            <Header/>
            <Container className="m-5 text-center">
                <p className="heading">Contact Us</p>
                <Container className="text-start">
                    <Row>
                        <Col>
                            <Form ref={form} onSubmit={sendEmail} className="my-3">
                                <Form.Group controlId="query">
                                    <Form.Label>Query</Form.Label>
                                    <Form.Control as="textarea" row={10}></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Emil</Form.Label>
                                    <Form.Control type="email"></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="subject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text"></Form.Control>
                                </Form.Group>
                                <Button type="submit" className="my-3 customBtn" >Submit</Button>
                            </Form>
                        </Col>
                        <Col>
                            <p>
                                <i className="bi bi-house mx-3"></i>
                                University School of Information, Communication & Technology
                                (USIC&T), Guru Gobind Singh Indraprastha University (GGSIPU) Golf
                                Course Rd, Sector 16 C Dwarka, Delhi, 110078
                            </p>
                            <p><i className="bi bi-calendar mx-3"></i>
                                Mon to Fri 9am to 5pm
                            </p>
                            <p>
                                <i className="bi bi-envelope mx-3"></i>
                                plant-iot@ipu.ac.in 
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer/>
        </>
    )
}