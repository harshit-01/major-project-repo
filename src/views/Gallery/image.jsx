import { Row, Col, Container } from "react-bootstrap";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from './gallery.module.scss'
import ImageCard from "../../components/imageCard";
import img1 from '../../assets/img/gallery images/Sensor Placement/SensorsIARI_1.jpg'
import img2 from '../../assets/img/gallery images/Sensor Placement/SensorsIARI_2.jpg'
import img3 from '../../assets/img/gallery images/Sensor Placement/SensorsIARI_3.jpg'
import img4 from '../../assets/img/gallery images/Sensor Placement/SensorsIARI_4.jpg'
import img5 from '../../assets/img/gallery images/Sensor Placement/SensorsIARI_5.jpg'
import img6 from '../../assets/img/gallery images/Sensor Placement/SensorsIARI_6.jpg'
import img7 from '../../assets/img/gallery images/Sensor Placement/SensorsIARI_7.jpg'
import img8 from '../../assets/img/gallery images/Sensor Placement/SensorsIARI_8.jpg'
import img9 from '../../assets/img/gallery images/Sensor Placement/SensorsIARI_9.jpg'
import img10 from '../../assets/img/gallery images/Sensor Placement/Testing Soil Moisture Sensor.jpg'
import img11 from '../../assets/img/gallery images/data-logger placement/data-logger (1).jpg'
import img12 from '../../assets/img/gallery images/data-logger placement/data-logger (2).jpg'
import img13 from '../../assets/img/gallery images/data-logger placement/data-logger (3).jpg'
import img14 from '../../assets/img/gallery images/data-logger placement/data-logger (4).jpg'
import img15 from '../../assets/img/gallery images/data-logger placement/data-logger (5).jpg'
import img16 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (1).jpg'
import img17 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (2).jpg'
import img18 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (3).jpg'
import img19 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (4).jpg'
import img20 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (5).jpg'
import img21 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (6).jpg'
import img22 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (7).jpg'
import img23 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (8).jpg'
import img24 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (9).jpg'
import img25 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (10).jpg'
import img26 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (11).jpg'
import img27 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (12).jpg'
import img28 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (13).jpg'
import img29 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (14).jpg'
import img30 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (15).jpg'
import img31 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (16).jpg'
import img32 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (17).jpg'
import img33 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (18).jpg'
import img34 from '../../assets/img/gallery images/krishi-mela 2022/Krishi-mela (19).jpg'
import img35 from '../../assets/img/gallery images/solar-panel for energy source/solar (1).jpg'
import img36 from '../../assets/img/gallery images/solar-panel for energy source/solar (2).jpg'
import img37 from '../../assets/img/gallery images/team-visit/team-visit (1).jpg'
import img38 from '../../assets/img/gallery images/team-visit/team-visit (2).jpg'


export default function Images() {
    return(
        <>
        <Header/>
        <Container className={styles.wrapper}>
            <p className={styles.heading}>Images</p>
            <Row >
                <Col className="d-flex justify-content-center">
                    <ImageCard title="images@IARI_1" src={img1}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="images@IARI_2" src={img2}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="images@IARI_3" src={img3}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="images@IARI_4" src={img4}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="images@IARI_5" src={img5}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="images@IARI_6" src={img6}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="images@IARI_7" src={img7}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="images@IARI_8" src={img8}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="images@IARI_9" src={img9}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Testing Soil Moisture image" src={img10}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Data-Logger Placement" src={img11}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Data-Logger Placement" src={img12}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Data-Logger Placement" src={img13}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Data-Logger Placement" src={img14}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Data-Logger Placement" src={img15}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img16}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img17}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img18}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img19}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img20}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img21}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img22}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img23}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img24}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img25}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img26}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img27}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img28}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img29}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img30}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img31}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img32}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img33}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Krishi Mela 2022" src={img34}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Solar Panel" src={img35}/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <ImageCard title="Solar Panel" src={img36}/>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col lg={4} className="d-flex justify-content-center">
                    <ImageCard title="Team Visit" src={img37}/>
                </Col>
                <Col lg={4} className="d-flex justify-content-center">
                    <ImageCard title="Team Visit" src={img38}/>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        <Footer/>
        </>
    )
}