import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";
import ImagePopop from "../components/imagePopup";
import p1 from '../assets/img/posters/1.png'
import ps1 from '../assets/img/posters/1 small.png'
import p2 from '../assets/img/posters/2.png'
import ps2 from '../assets/img/posters/2 small.png'
import p3 from '../assets/img/posters/3.png'
import ps3 from '../assets/img/posters/3 small.png'
import p4 from '../assets/img/posters/4.jpg'
import ps4 from '../assets/img/posters/4 small.png'
import p5 from '../assets/img/posters/5.png'
import ps5 from '../assets/img/posters/5 small.png'
import p6 from '../assets/img/posters/6.jpg'
import ps6 from '../assets/img/posters/6 small.png'

export default function Posters()
{
    return(
        <>
            <Header/>
            <Container fluid className="my-5 text-center">
                <p className="heading">Posters</p>
                <Container>
                    <Row>
                        <Col>
                            <ImagePopop title = "Deep Learning Based Plant Disease Diagnosis for Grape Plant" small={ps1} large = {p1}/>
                        </Col>
                        <Col>
                            <ImagePopop title="Recent Advancements in Image-based Prediction Models for Diagonosis of Plant Diseases" small={ps2} large={p2}/>
                        </Col>
                        <Col>
                            <ImagePopop title="Deep Learning Based Assessment of Disease Severity in Grape Plant" small={ps3} large={p3} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ImagePopop title="Application of Machine Learning Models for Powdery Mildew and Early Blight Disease in Tomato Plant" small={ps4} large={p4}/>
                        </Col>
                        <Col>
                            <ImagePopop title="Application of Capsule Networkds for Automated Weed Detection" small={ps5} large={p5}/>
                        </Col>
                        <Col>
                            <ImagePopop title="A Deep Learning-Based Disease Classification Model for Potato Crop" small={ps6} large={p6}/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer/>
        </>
    )
}