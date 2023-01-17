import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/footer';
import Header from '../components/header';

import img1 from '../assets/img/carousel/home (1).jpg';
import img2 from '../assets/img/carousel/home (2).jpg';
import img3 from '../assets/img/carousel/home (3).jpg';
import img4 from '../assets/img/carousel/home (4).jpg';
import img5 from '../assets/img/carousel/home (5).jpg';
import img6 from '../assets/img/carousel/home (6).jpg';
import img7 from '../assets/img/carousel/home (7).jpg';
import img8 from '../assets/img/carousel/home (8).jpg';
import img9 from '../assets/img/carousel/home (9).jpg';
import img10 from '../assets/img/carousel/home (10).jpg';
import azadi from '../assets/img/logo/azadi.jpg';
import g20 from '../assets/img/logo/g20.jpg';
import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import video from '../assets/videos/main.mp4';

const Home = () => {
  return (
    <>
      <Header />
      <Container className={styles.mainContainer}>
        <Row>
          <Col>
            <p className='heading'>Smart Plant Disease Surveillance System</p>
            <p className='subheading'>
              We propose the practice of smart agriculture using automation and
              IoT technologies.
            </p>
            <Row>
              <Col>
                <img className={styles.azaadiImg} src={g20} />
              </Col>
              <Col className='d-flex justify-content-center align-items-center'>
                <Link to='/contribute'>
                  <Button className='customBtn'>Contribute to Us</Button>
                </Link>
              </Col>
              <Col className='d-flex align-content-center'>
                <img className={styles.azaadiImg} src={azadi} alt='' />
              </Col>
            </Row>
          </Col>
          <Col>
            <Carousel className={styles.carouselContainer} interval={2000}>
              <Carousel.Item>
                <img
                  height={300}
                  className='d-block w-100 '
                  src={img1}
                  alt='Carousel 1'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={300}
                  className='d-block w-100'
                  src={img2}
                  alt='Carousel 2'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={300}
                  className='d-block w-100'
                  src={img3}
                  alt='Carousel 3'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={300}
                  className='d-block w-100'
                  src={img4}
                  alt='Carousel 4'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={300}
                  className='d-block w-100'
                  src={img5}
                  alt='Carousel 5'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={300}
                  className='d-block w-100'
                  src={img6}
                  alt='Carousel 6'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={300}
                  className='d-block w-100'
                  src={img7}
                  alt='Carousel 7'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={300}
                  className='d-block w-100'
                  src={img8}
                  alt='Carousel 8'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={300}
                  className='d-block w-100'
                  src={img9}
                  alt='Carousel 9'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={300}
                  className='d-block w-100'
                  src={img10}
                  alt='Carousel 10'
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.videoContainer}>
        <video className={styles.video} src={video} controls></video>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
