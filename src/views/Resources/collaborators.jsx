import { Row, Col, Container } from "react-bootstrap";
import styles from '../Gallery/gallery.module.scss'
import ImageCard from "../../components/imageCard";
import IARI from '../../assets/img/logo/iari.jpg';
import spectrum from '../../assets/img/logo/spectrum.jpg';
import NDUAT from '../../assets/img/logo/nduat.png';
import eigen from '../../assets/img/logo/eigen.jpg';
import g20 from '../../assets/img/logo/g20.jpg'
import auro from '../../assets/img/logo/Auro Electronics.png'
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Collaborators()
{
    return(
        <>
            <Header/>
            <Container className={styles.wrapper}>
                <p className={styles.heading}>Colloborators</p>
                <Row>
                    <Col>
                        <ImageCard title="IARI" src={IARI}/>
                    </Col>
                    <Col>
                        <ImageCard title="Spectrum" src={spectrum}/>
                    </Col>
                    <Col>
                        <ImageCard title="NDUAT" src={NDUAT}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ImageCard title="Eigen" src={eigen}/>
                    </Col>
                    <Col>
                        <ImageCard title="G20" src={g20}/>
                    </Col>
                    <Col>
                        <ImageCard title="Auro Electronics" src={auro}/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}