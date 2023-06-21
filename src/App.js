import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import PhoneInput from 'react-phone-input-2';
// import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
// import { CgSpinner } from "react-icons/cg";
// import 'react-phone-input-2/lib/style.css';
// import OtpInput from "otp-input-react";
// import { auth } from './firebase.config';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';
import About from './views/About/about';
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Predict from './views/Predict';
import CropRecommendationSystem from './views/CropRecommendationSystem'
import ProjectTeam from './views/ProjectTeam';
import Journals from './views/Publications/journals';
import Patents from './views/Publications/patents';
import Conferences from './views/Publications/conferenceWorkshops';
import Chapter from './views/Publications/chapter';
import Statistics from './views/Publications/statistics';
import Videos from './views/Gallery/video';
import Images from './views/Gallery/image';
import Sensors from './views/Resources/sensors';
import Contribute from './views/contribute';
import Collaborators from './views/Resources/collaborators';
import CropSearch from './views/Resources/cropSearch';
import Contact from './views/contact';
import ImageData from './views/Downloads/imageData';
import Posters from './views/poster';
import Multipredict from './views/Multipredict';
import RealtimeData from './views/realtimeData';
import './index.css';

const App = () => {
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home />
        }
      />
      <Route path="/predict" element={<Predict />} />
      <Route path="/projectTeam" element={<ProjectTeam />} />
      <Route path="/about" element={<About />} />
      <Route path="/journals" element={<Journals />} />
      <Route path="/patents" element={<Patents />} />
      <Route path="/conferences" element={<Conferences />} />
      <Route path="/chapters" element={<Chapter />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/images" element={<Images />} />
      <Route path="/sensors" element={<Sensors />} />
      <Route path="/collaborators" element={<Collaborators />} />
      <Route path="/cropSearch" element={<CropSearch />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/imageData" element={<ImageData />} />
      <Route path="/poster" element={<Posters />} />
      <Route path="/multiPredict" element={<Multipredict />} />
      <Route path="/realTimeData" element={<RealtimeData />} />
      <Route path="/CropRecommendation" element={<CropRecommendationSystem/>}/>
      
    </Routes>
  );
};

export default App;
