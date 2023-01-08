import { Button, Container } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from './predict.module.scss'
import { useState } from "react";

export default function Predict() {

    const [imgSrc,setImgSrc] = useState();
    const [res,setRes] = useState()

    function handleUpload(e) {
        setImgSrc(URL.createObjectURL(e.target.files[0]))
    }

    function showRes() {
        setRes(true);
      }

    return (
        <>
            <Header/>
            <Container className={styles.mainContainer}>
                <p className={styles.heading}>Disease Detection</p>
                <input className={styles.uploadFileInput} type="file" name="" id="" onChange={handleUpload} />
                {imgSrc && (
                    <div className={styles.imagePrev}>
                        <img alt='disease-preview' src={imgSrc} />
                    </div>
                )}
                {imgSrc && (
                    <Button variant='success' onClick={showRes}>
                       Predict
                    </Button>
                )}
                {res && <p className={styles.result}>The plant have leaf mold</p>}
            </Container>
            <Footer/>
        </>
    )
}