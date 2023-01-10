import { Row, Col, Container } from "react-bootstrap";
import vid1 from '../../assets/videos/ATAL FDP on Internet of Things (IoT) Architecture & System Level Design- Session 2.mp4'
import vid2 from '../../assets/videos/Imaging Techniques.mp4'
import vid3 from '../../assets/videos/Internet of Things (IoT).mp4'
import vid4 from '../../assets/videos/video1.mp4'
import vid5 from '../../assets/videos/video3.mp4'
import vid6 from '../../assets/videos/Media1_x264.mp4'
import vid7 from '../../assets/videos/Media2_x264.mp4'
import VideoCard from "../../components/videoCard";
import Header from "../../components/header";
import Footer from "../../components/footer";

import styles from './gallery.module.scss'

export default function Videos() {
    return(
        <>
        <Header/>
        <Container className={styles.wrapper}>
            <p className={styles.heading}>Videos</p>
            <Row>
                <Col>
                    <VideoCard title = "ATAL FDP on Internet of Things (IoT) Architecture & System Level Design" src = {vid1}/>
                </Col>
                <Col>
                    <VideoCard title = "Imaging Techniques" src = {vid2}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <VideoCard title = "Internet of Things (IoT)" src = {vid3}/>
                </Col>
                <Col>
                    <VideoCard title = "Data Logger Radiation Shield Assembly" src = {vid4}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <VideoCard title = "Deploying Data Logger In the Field" src = {vid5}/>
                </Col>
                <Col>
                    <VideoCard title = "Disease Inoculation" src = {vid6}/>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <VideoCard title = "Disease Inoculation" src = {vid7}/>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        <Footer/>
        </>
        
    )
}