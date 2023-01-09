import { Button, Container } from 'react-bootstrap';
import loadImage from 'blueimp-load-image';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from './predict.module.scss';
import { useState } from 'react';

export default function Predict() {
  const [imgSrc, setImgSrc] = useState();
  const [res, setRes] = useState();

  function handleUpload(e) {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
  }

  async function showRes() {
    try {
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
        const predictForData = new FormData();
        predictForData.append('image', blob);

        //TODO: Not Working
        const predictResponse = await fetch(
          'https://cropsense-disease-model.onrender.com/upload',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: predictForData,
          }
        );

        const data = await predictResponse.json();

        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  }

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
        {res && <p className={styles.result}>The plant have leaf mold</p>}
      </Container>
      <Footer />
    </>
  );
}
