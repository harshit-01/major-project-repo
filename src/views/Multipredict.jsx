import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from './Gallery/gallery.module.scss';
import ImageCard from '../components/imageCard';
import img1 from '../assets/img/predict/1.jpg';
import img2 from '../assets/img/predict/2.jpg';
import img3 from '../assets/img/predict/3.jpg';
import img4 from '../assets/img/predict/4.jpg';
import img5 from '../assets/img/predict/5.jpg';
import img6 from '../assets/img/predict/6.jpg';
import img7 from '../assets/img/predict/7.jpg';
import img8 from '../assets/img/predict/8.jpg';
import img9 from '../assets/img/predict/9.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Multipredict = () => {
  let navigate = useNavigate();
  const [checked, setChecked] = useState([]);
  const [isShow, setIsShow] = useState(false);

  // Add/Remove checked item from list
  const handleChange = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    console.log(updatedList);
    setChecked(updatedList);
  };

  const Res = [
    'Tomato Target Spot',
    'Tomato Mosaic Virus',
    'Tomato Yellow Leaf curl Virus',
    'Tomato Bacterial Spot',
    'Tomato Early Blight',
    'Tomato Late Blight',
    'Tomato Leaf Mold',
    'Tomato septoria Leaf Spot',
    'Tomato Spider Mite',
  ];

  const showRes = () => {
    // console.log(checked.length);
    // let path = `Result`;
    // navigate(path);
    setIsShow(!isShow);
    for (let i = 0; i < checked.length; i++) console.log(Res[checked[i]]);
  };

  return (
    <>
      <Header />
      <Container className={styles.wrapper}>
        <p className={styles.heading}>Images</p>
        <Row>
          <Col className='d-flex justify-content-center'>
            <ImageCard title='image1' src={img1} />
            <input type='checkbox' value={0} onChange={handleChange} />
          </Col>
          <Col className='d-flex justify-content-center'>
            <ImageCard title='image2' src={img2} />
            <input type='checkbox' value={1} onChange={handleChange} />
          </Col>
          <Col className='d-flex justify-content-center'>
            <ImageCard title='image3' src={img3} />
            <input type='checkbox' value={2} onChange={handleChange} />
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            <ImageCard title='image4' src={img4} />
            <input type='checkbox' value={3} onChange={handleChange} />
          </Col>
          <Col className='d-flex justify-content-center'>
            <ImageCard title='image5' src={img5} />
            <input type='checkbox' value={4} onChange={handleChange} />
          </Col>
          <Col className='d-flex justify-content-center'>
            <ImageCard title='image6' src={img6} />
            <input type='checkbox' value={5} onChange={handleChange} />
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            <ImageCard title='image7' src={img7} />
            <input type='checkbox' value={6} onChange={handleChange} />
          </Col>
          <Col className='d-flex justify-content-center'>
            <ImageCard title='image8' src={img8} />
            <input type='checkbox' value={7} onChange={handleChange} />
          </Col>
          <Col className='d-flex justify-content-center'>
            <ImageCard title='image9' src={img9} />
            <input type='checkbox' value={8} onChange={handleChange} />
          </Col>
        </Row>
        <Button style={{ margin: '40px' }} variant='success' onClick={showRes}>
          Predict
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default Multipredict;
