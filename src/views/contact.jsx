import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../components/footer';
import Header from '../components/header';
import { useRef } from 'react';
import { getDatabase, ref, set } from 'firebase/database';

const realDb = getDatabase();

export default function Contact() {
  const form = useRef();

  const resetForm = () => {
    form.current.name.value = '';
    form.current.query.value = '';
    form.current.subject.value = '';
    form.current.email.value = '';
  };

  const saveData = (name, query, email, subject) => {
    let text = name + crypto.randomUUID();

    set(ref(realDb, 'ContactUs/' + text), {
      name: name,
      query: query,
      email: email,
      subject: subject,
    })
      .then(() => {
        resetForm();
      })
      .catch(() => {
        alert('Something went wrong, try again later');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.current.name.value;
    const email = form.current.email.value;
    const query = form.current.query.value;
    const subject = form.current.subject.value;

    console.log(name, email, query, subject);

    if (!name || !email || !query || !subject) {
      alert('Please provide all values');
      return;
    }

    saveData(name, query, email, subject);

    const emailBody =
      'Name : ' +
      name +
      ' <br/>Email : ' +
      email +
      ' <br/>Query : ' +
      query +
      ' <br/>Subject : ' +
      subject;
    window.Email.send({
      SecureToken: 'badf397e-ee47-4fe0-b82e-b81b4d3bdb60',
      To: 'plant-iot@ipu.ac.in',
      From: 'plant-iot@ipu.ac.in',
      Subject: 'Contact Us Query : ' + subject,
      Body: emailBody,
    });
  };

  return (
    <>
      <Header />
      <Container className='m-5 text-center'>
        <p className='heading'>Contact Us</p>
        <Container className='text-start'>
          <Row>
            <Col>
              <Form ref={form} onSubmit={handleSubmit} className='my-3'>
                <Form.Group controlId='query'>
                  <Form.Label>Query</Form.Label>
                  <Form.Control as='textarea' row={10}></Form.Control>
                </Form.Group>
                <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email'></Form.Control>
                </Form.Group>
                <Form.Group controlId='subject'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Button type='submit' className='my-3 customBtn'>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col>
              <p>
                <i className='bi bi-house mx-3'></i>
                University School of Information, Communication & Technology
                (USIC&T), Guru Gobind Singh Indraprastha University (GGSIPU)
                Golf Course Rd, Sector 16 C Dwarka, Delhi, 110078
              </p>
              <p>
                <i className='bi bi-calendar mx-3'></i>
                Mon to Fri 9am to 5pm
              </p>
              <p>
                <i className='bi bi-envelope mx-3'></i>
                plant-iot@ipu.ac.in
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
