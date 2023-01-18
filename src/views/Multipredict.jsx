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
import { FaPlus, FaMinus } from 'react-icons/fa';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

const diseaseData = [
  {
    id: crypto.randomUUID(),
    name: 'Tomato Target Spot',
    img: img1,
  },
  {
    id: crypto.randomUUID(),
    name: 'Tomato Mosaic Virus',
    img: img2,
  },
  {
    id: crypto.randomUUID(),
    name: 'Tomato Yellow Leaf curl Virus',
    img: img3,
  },
  {
    id: crypto.randomUUID(),
    name: 'Tomato Bacterial Spot',
    img: img4,
  },
  {
    id: crypto.randomUUID(),
    name: 'Tomato Early Blight',
    img: img5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Tomato Late Blight',
    img: img6,
  },
  {
    id: crypto.randomUUID(),
    name: 'Tomato Leaf Mold',
    img: img7,
  },
  {
    id: crypto.randomUUID(),
    name: 'Tomato septoria Leaf Spot',
    img: img8,
  },
  {
    id: crypto.randomUUID(),
    name: 'Tomato Spider Mite',
    img: img9,
  },
];

const Multipredict = () => {
  const [selected, setSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const showRes = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClick = (index) => {
    const selectedCopy = [...selected];

    if (selectedCopy.includes(index)) {
      const idx = selectedCopy.findIndex((el) => el === index);
      selectedCopy.splice(idx, 1);
    } else {
      selectedCopy.push(index);
    }

    setSelected(selectedCopy);
  };

  return (
    <>
      <Header />
      <Container className={styles.wrapper}>
        <p className={styles.heading}>Images</p>
        <Row>
          {diseaseData.map((disease, index) => {
            return (
              <Col
                onClick={() => handleClick(index)}
                style={{ cursor: 'pointer', position: 'relative' }}
                key={disease.id}
                className='col-12 col-md-6 col-lg-4 d-flex justify-content-center'
              >
                <ImageCard title={`Image ${index + 1}`} src={disease.img} />
                <button
                  className={
                    selected.includes(index) ? 'bg-danger' : 'bg-success'
                  }
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    border: 'none',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    borderRadius: '50%',
                  }}
                >
                  {selected.includes(index) ? (
                    <FaMinus style={{ fill: 'white' }} />
                  ) : (
                    <FaPlus style={{ fill: 'white' }} />
                  )}
                </button>
              </Col>
            );
          })}
        </Row>
        <Button onClick={showRes} style={{ margin: '40px' }} variant='success'>
          Predict
        </Button>
        <Modal open={showModal} onClose={closeModal}>
          <h2 className='mt-4'>Possible Diseases</h2>
          <ul>
            {selected.map((check) => {
              return <li key={check}>{diseaseData[check].name}</li>;
            })}
          </ul>
        </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default Multipredict;
