import { useRef, useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Footer from '../components/footer';
import Header from '../components/header';
import { storage } from '../config/firebase';
import {
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { getDatabase, ref, set } from 'firebase/database';

const realDb = getDatabase();

const initialState = {
  name: '',
  email: '',
  phoneNumber: '',
  cropType: '',
  cropStatus: 'healthy',
  images: [],
};

export default function Contribute() {
  const [formData, setFormData] = useState(initialState);

  const multiFileInputRef = useRef();

  const imageLinks = useRef([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 10) {
      alert('Maximum 10 images are allowed!');
      return;
    }

    setFormData({ ...formData, images: e.target.files });
  };

  const { name, email, phoneNumber, cropType, cropStatus, images } = formData;

  const resetForm = () => {
    setFormData(initialState);
    multiFileInputRef.current.value = null;
  };

  const sendConfirmationEmail = () => {
    let emailBody =
      'Name : ' +
      name +
      ' <br/>Email : ' +
      email +
      ' <br/>Crop Type : ' +
      cropType +
      ' <br/>Health Status : ' +
      cropStatus;

    if (phoneNumber) {
      emailBody = emailBody + '<br/>Phone Number : ' + phoneNumber;
    }
    // for us
    window.Email.send({
      SecureToken: 'badf397e-ee47-4fe0-b82e-b81b4d3bdb60',
      To: 'plant-iot@ipu.ac.in',
      From: 'plant-iot@ipu.ac.in',
      Subject: 'Contribution Query from : ' + name.value,
      Body: emailBody,
    }).then((message) => console.log(message));
    // for user
    window.Email.send({
      SecureToken: 'badf397e-ee47-4fe0-b82e-b81b4d3bdb60',
      To: email,
      From: 'plant-iot@ipu.ac.in',
      Subject: 'Contribution Query from : ' + name,
      Body:
        emailBody +
        '<br/><br/>Your Contribution has been recorded successfully. It will be processed within 30 days',
    })
      .then((message) => {
        console.log(message);
        resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const uploadProduct = () => {
    set(ref(realDb, 'UsersContributions/' + crypto.randomUUID()), {
      Username: name,
      EmailId: email,
      PhoneNumber: phoneNumber,
      CropType: cropType,
      HealthStatus: cropStatus,
      linkOfImagesArray: imageLinks.current,
    });
  };

  const uploadImage = (imgToUpload, imgNo) => {
    const metaData = {
      contentType: imgToUpload.type,
    };

    const imageAddress =
      'TheContributionImages/' + crypto.randomUUID() + '/img#' + (imgNo + 1);

    const storageRef = sRef(storage, imageAddress);
    const uploadTask = uploadBytesResumable(storageRef, imgToUpload, metaData);

    uploadTask.on(
      'state_changed',
      () => {
        //TODO: Add Progress Bar
      },

      () => {
        alert('Error occurred!');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          console.log(imageLinks.current);
          imageLinks.current.push(downloadURL);
          if (imageLinks.current.length === images.length) {
            uploadProduct();
            sendConfirmationEmail();
          }
        });
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber || !cropStatus || !cropType) {
      alert('Please provide all values');
      return;
    }

    if (images.length === 0 || images.length > 10) {
      alert('Minimum 1 image and Maximum 10 images are allowed');
      return;
    }

    for (let i = 0; i < images.length; i++) {
      uploadImage(images[i], i);
    }
  };

  return (
    <>
      <Header />
      <Container className='m-5 text-center'>
        <p className='heading'>Contribute To Us</p>
        <p className='subheading'>
          We really appreciate your help. Your contribution helps us grow and
          will be a valuable addition to our research.
        </p>
        <Form onSubmit={handleSubmit} className='text-start my-5'>
          <Row className='m-3'>
            <Col>
              <Form.Group controlId='name'>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  value={name}
                  name='name'
                  onChange={handleInputChange}
                  type='text'
                  placeholder='Enter Name'
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='Enter Email'
                  value={email}
                  onChange={handleInputChange}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className='m-3'>
            <Col>
              <Form.Group controlId='phoneNo'>
                <Form.Label>Phone No</Form.Label>
                <Form.Control
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={handleInputChange}
                  type='tel'
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='cropType'>
                <Form.Label>Type of Crop</Form.Label>
                <Form.Control
                  name='cropType'
                  value={cropType}
                  onChange={handleInputChange}
                  type='text'
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className='m-3'>
            <Col>
              <Form.Group controlId='health'>
                <Form.Label>Health Status</Form.Label>
                <Form.Select
                  name='cropStatus'
                  value={cropStatus}
                  onChange={handleInputChange}
                >
                  <option value='healthy'>Healthy</option>
                  <option value='infected'>Infected</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='image'>
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  ref={multiFileInputRef}
                  onChange={handleFileChange}
                  multiple
                  type='file'
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className='m-3'>
            <Col></Col>
            <Col className='d-flex justify-content-center'>
              <Button className='customBtn' type='submit'>
                Submit
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
