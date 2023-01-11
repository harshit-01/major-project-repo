import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from '../Gallery/gallery.module.scss'
import img1 from '../../assets/img/SenseNuts/pH Sensor.jpg'
import img2 from '../../assets/img/SenseNuts/Pin Extender Module.jpg'
import img3 from '../../assets/img/SenseNuts/SenseNuts Gateway Module USB with Cable.jpg'
import img4 from '../../assets/img/SenseNuts/SenseNuts GSM Module.jpg'
import img5 from '../../assets/img/SenseNuts/SenseNuts Radio Module.jpg'
import img6 from '../../assets/img/SenseNuts/SenseNuts Soil Moisture Enclosure.jpg'
import img7 from '../../assets/img/SenseNuts/SenseNuts Soil Moisture Sensor.jpg'
import img8 from '../../assets/img/SenseNuts/SenseNuts Soil Temperature Sensor.jpg'
import img9 from '../../assets/img/SenseNuts/SenseNuts Solar Panels.jpg'
import img10 from '../../assets/img/SenseNuts/SenseNuts Solar Power Supply.jpg'
import img11 from '../../assets/img/SenseNuts/sunlight sensor.jpg'
import img12 from '../../assets/img/SenseNuts/Voc sensor.jpg'
import img13 from '../../assets/img/SenseNuts/thermal imaging.jpg'
import img14 from '../../assets/img/SenseNuts/color sesnor.jpg'
import FlipCard from "../../components/flipCard";

export default function Sensors() {
    return (
        <>
        <Header/>
        <Container className={styles.wrapper}>
            <p className={styles.heading}>Sensors</p>
            <Row>
                <Col lg={3}>
                    <FlipCard title="pH Sensor" src = {img1} desc="Gives soil pH value ranging from 0-14"/>
                </Col>
                <Col lg= {3}>
                    <FlipCard title="Pin Extender Module" src={img2} desc="It extends all the pins of the microcontroller on Radio Module and
            provides access to users."/>
                </Col>
                <Col lg={3}>
                    <FlipCard title="SenseNuts Gateway Module" src={img3} desc="It programs the microcontroller and acts as an interface between the
            network and PC. Data transfer rate is 152000 baud."/>
                </Col>
                <Col lg={3}>
                    <FlipCard title="SenseNuts GSM Module" src={img4} desc="It is a SIM based solutin which helps in sending and receiving data
            from various sensors using IEEE 802.15.4 to Internet."/>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <FlipCard title="SenseNuts Radio Module"  src={img5} desc="It comprises of microcontroller and an integrated transceiver for
            processing, transmitting and receiving data."/>
                </Col>
                <Col lg={3}>
                    <FlipCard title="SenseNuts Soil Moisture Enclosure" src={img6} desc="Encases the programmed radio module for reading data from the sensor
            and transmitting values to GSM."/>
                </Col>
                <Col lg={3}>
                    <FlipCard title="SenseNuts Soil Moisture Sensor" src={img7} desc="Reads the soil moisture values."/>
                </Col>
                <Col lg={3}>
                    <FlipCard title="SenseNuts Soil Temperature Sensor" src={img8} desc="Reads soil temperature values."/>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <FlipCard title="SenseNuts Solar Panels"  src={img9} desc="Source of power supply"/>
                </Col>
                <Col lg={3}>
                    <FlipCard title="SenseNuts Solar Power Supply" src={img10} desc="It is a solar power supply kit between the solar panel and radio
            module. It gathers power from the solar panels."/>
                </Col>
                <Col lg={3}>
                    <FlipCard title="Sunlight Sensor" src={img11} desc="It is a multi-channel digital light sensor, which has the ability to
            detect UV-light, visible light and infrared light."/>
                </Col>
                <Col lg={3}>
                    <FlipCard title="VOC and ECO2 Gas Sensor" src={img12} desc="It is an air quality sensor. This module provides TVOC(Total
            Volatile Organic Compounds) and CO2eq output."/>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <FlipCard title="Thermal Imaging" src={img13} desc="IR thermal camera carries a 16x12 array of thermal sensors
            (MLX90641) and it can detect the temperature of objects from far
            away with a centre area accuracy of ±1℃ and average accuracy of
            ±1.5℃. The temperature measurement range is -40℃ to 300℃."/>
                </Col>
                <Col>
                    <FlipCard title="Color Sensor" src={img14} desc="Recognize different colors with the sensor. 3*4 array of filtered
            photodiodes and 16-bits analog-to-digital converters. Out of the 16
            photodiodes, 4 have red filters, 4 have green filters, 4 have blue
            filters and 4 have no filter(clear)."/>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        <Footer/>
        </>
    )
}