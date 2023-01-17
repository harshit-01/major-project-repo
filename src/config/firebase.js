import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCtiLmWs6cd85jOdiGjQSbUb5xsaXpXfO8',
  authDomain: 'plantiotipu.firebaseapp.com',
  databaseURL: 'https://plantiotipu-default-rtdb.firebaseio.com',
  projectId: 'plantiotipu',
  storageBucket: 'plantiotipu.appspot.com',
  messagingSenderId: '53547288387',
  appId: '1:53547288387:web:1ba76c4c9c914baf3711f6',
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
