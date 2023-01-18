import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from '../../views/Gallery/gallery.module.scss'
import { Col, Container, Row } from "react-bootstrap";
import stat1 from '../../assets/img/statistics/stat1.jpg'
import stat2 from '../../assets/img/statistics/stat2.jpg'
import stat3 from '../../assets/img/statistics/stat3.jpg'
import ImageCard from "../../components/imageCard";


const Statistics = () => {
    return (
        <>
            <Header/>
            <Container className={styles.wrapper}>
                <p className={styles.heading}>Statistics</p>
                <Row>
                    <Col></Col>
                    <Col lg={8}>
                        <ImageCard title='Publications' src={stat1}></ImageCard>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col lg={4}>
                        <ImageCard title='' src={stat2}/>
                    </Col>
                    <Col lg={4}>
                        <ImageCard title='' src={stat3}/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
  };
  
  export default Statistics;