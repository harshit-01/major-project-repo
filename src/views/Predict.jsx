import { Button, Container, Spinner } from 'react-bootstrap';
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
  const [croppedImageBlob, setCroppedImageBlob] = useState();
  const [croppedImageUrl, setCroppedImageUrl] = useState();
  const [crop, setCrop] = useState({
    unit: '%',
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  });
  const [cropInfo,setCropInfo] = useState(null);
  const imageRef = useRef();

  const [isLoading, setLoading] = useState(false);

  function handleUpload(e) {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
  }

  async function showRes() {
    try {
      setLoading(true);
      setPredictResult({
        showResult: false,
      });

      const imageToUpload = new File([croppedImageBlob], 'image.jpeg', {
        type: croppedImageBlob.type,
      });

      const predictFormData = new FormData();
      predictFormData.append('image', imageToUpload);

      const predictResponse = await fetch(
        'https://cropsense-disease-prediction.onrender.com/upload',
        {
          method: 'POST',
          body: predictFormData,
        }
      );

      const { data } = await predictResponse.json();

      setPredictResult({
        showResult: true,
        result: data,
      });
      cropInformation(data)
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
      const { fileUrl, blob } = await getCroppedImg(
        imageRef.current,
        crop,
        'newFile.jpeg'
      );
      setCroppedImageBlob(blob);
      setCroppedImageUrl(fileUrl);
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
        resolve({ blob, fileUrl });
      }, 'image/jpeg');
    });
  }
  const cropInformation = async(data)=>{
    
    const url = `https://duckduckgo-duckduckgo-zero-click-info.p.rapidapi.com/?q=${data?.toString().split('_')[0]}&no_html=1&no_redirect=1&skip_disambig=1&format=json`;

    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '2ef5fbdefcmshbb92015178d9907p1b6477jsn7d33c3fcced7',
        'X-RapidAPI-Host': 'duckduckgo-duckduckgo-zero-click-info.p.rapidapi.com'
      }
    };
   
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      if(result){
        setCropInfo(JSON.parse(result)["Abstract"]);
      }
      // console.log(JSON.parse(result)["Abstract"]);
    } catch (error) {
      console.error(error);
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
        <Container className={styles.prevContainer}>
          {imgSrc && (
            <div className={styles.imagePrevContainer}>
              <h4>Uploaded Image</h4>
              <ReactCrop
                crop={crop}
                aspect={1}
                onComplete={onCropComplete}
                onChange={onCropChange}
              >
                <img
                  className={styles.imagePrev}
                  ref={imageRef}
                  src={imgSrc}
                  alt='disease'
                />
              </ReactCrop>
            </div>
          )}
          {croppedImageUrl && (
            <div className={styles.cropPrevContainer}>
              <h4>Crop Preview</h4>
              <img
                className={styles.croppedImg}
                alt='Crop'
                src={croppedImageUrl}
              />
            </div>
          )}
        </Container>

        {imgSrc && (
          <Button variant='success' onClick={showRes}>
            Predict
          </Button>
        )}
        {cropInfo && (
          <div>
              <p className={styles.cropInfo}>Description of crop</p>
              {cropInfo}
          </div>
        )}
        {isLoading && !showResult && (
          <div className={styles.result}>
            <Spinner animation='border' variant='success' />
            Model is Loading
          </div>
        )}
        {showResult && <p className={styles.result}>The plant have {result}</p>}
      </Container>
      <Footer />
    </>
  );
}
