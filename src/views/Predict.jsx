import { Button, Container } from 'react-bootstrap';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/src/ReactCrop.scss';
import loadImage from 'blueimp-load-image';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from './predict.module.scss';
import { useRef, useState } from 'react';

export default function Predict() {
  const [imgSrc, setImgSrc] = useState();
  const [predictResult, setPredictResult] = useState({
    showResult: false,
    result: '',
  });
  const [croppedImageUrl, setCroppedImageUrl] = useState();
  const [crop, setCrop] = useState({
    unit: '%',
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  });
  const imageRef = useRef();

  function handleUpload(e) {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
  }

  async function showRes() {
    try {
      setPredictResult({
        showResult: false,
      });

      console.log(croppedImageUrl);
      const resizedImage = await loadImage(croppedImageUrl, {
        width: 256,
        height: 256,
        canvas: true,
      });

      resizedImage.image.toBlob(async function (inputBlob) {
        const removeBgFormData = new FormData();
        removeBgFormData.append('image_file', inputBlob);

        const response = await fetch('https://api.remove.bg/v1.0/removebg', {
          method: 'POST',
          headers: {
            'X-Api-Key': 'J5Jo4Eu9T5uQShZg2WefkFTt',
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
          result: data,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  const onCropComplete = (crop) => {
    makeClientCrop(crop);
  };
  const onCropChange = (crop) => {
    setCrop(crop);
  };

  async function makeClientCrop(crop) {
    if (imageRef.current && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(
        imageRef.current,
        crop,
        'newFile.jpeg'
      );
      setCroppedImageUrl(croppedImageUrl);
    }
  }

  function getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    let fileUrl;
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(fileUrl);
        fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg');
    });
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
        <div className={styles.imagePrev}>
          {imgSrc && (
            <ReactCrop
              crop={crop}
              onComplete={onCropComplete}
              onChange={onCropChange}
            >
              <img ref={imageRef} src={imgSrc} alt='disease' />
            </ReactCrop>
          )}
        </div>

        {croppedImageUrl && (
          <>
            <h4>Preview</h4>
            <img
              className={styles.croppedImg}
              alt='Crop'
              src={croppedImageUrl}
            />
          </>
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
