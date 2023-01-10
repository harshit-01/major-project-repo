import { Button, Container } from 'react-bootstrap';
import loadImage from 'blueimp-load-image';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from './predict.module.scss';
import { useState } from 'react';

export default function Predict() {
  const [imgSrc, setImgSrc] = useState();
  const [predictResult, setPredictResult] = useState({
    showResult: false,
    result: '',
  });

  function handleUpload(e) {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
  }

  async function showRes() {
    try {
      setPredictResult({
        showResult: false,
      });
      const resizedImage = await loadImage(imgSrc, {
        maxWidth: 256,
        maxHeight: 256,
        canvas: true,
      });

      resizedImage.image.toBlob(async function (inputBlob) {
        const removeBgFormData = new FormData();
        removeBgFormData.append('image_file', inputBlob);

        const response = await fetch('https://api.remove.bg/v1.0/removebg', {
          method: 'POST',
          headers: {
            'X-Api-Key': 'Rn1PbjhV5MbZvVahFJ7jfzoh',
          },
          body: removeBgFormData,
        });

        const blob = await response.blob();
        const imageToUpload = new File([blob], 'image.jpeg', {
          type: blob.type,
        });

        const predictForData = new FormData();
        predictForData.append('image', imageToUpload);

        const predictResponse = await fetch(
          'https://cropsense-disease-prediction.onrender.com/upload',
          {
            method: 'POST',
            body: predictForData,
          }
        );

        const { data } = await predictResponse.json();

        setPredictResult({
          showResult: true,
          result: data[0],
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  const { showResult, result } = predictResult;
  return (
    <>
      <Header />
      <Container className={styles.mainContainer}>
        <p className={styles.heading}>Disease Detection</p>
        <input
          className={styles.uploadFileInput}
          type='file'
          name=''
          id=''
          onChange={handleUpload}
        />
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
        {showResult && <p className={styles.result}>The plant have {result}</p>}
      </Container>
      <Footer />
    </>
  );
}
