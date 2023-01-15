import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCMFCGlz-csVknIm-8eblPB9BX1UvacLU8',

  authDomain: 'fir-demo-88915.firebaseapp.com',

  projectId: 'fir-demo-88915',

  storageBucket: 'fir-demo-88915.appspot.com',

  messagingSenderId: '278462948120',

  appId: '1:278462948120:web:1a3cda41adc6af36e7746d',

  measurementId: 'G-K1W3RH4XWP',
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
