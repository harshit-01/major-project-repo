import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import 'react-phone-input-2/lib/style.css';
import OtpInput from "otp-input-react";
import { auth } from './firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';
import About from './views/About/about';
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Predict from './views/Predict';
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
  const [otp, setOtp] = useState('');
  const [ph, setPh] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already logged in
    const user = auth.currentUser;
    if (user) {
      setUser(user);
    }
  }, []);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          onSignup();
        },
        'expired-callback': () => {},
      },
      auth);
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = '+' + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success('OTP sent successfully!');
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        // Redirect to home route on successful verification
        return <Navigate to="/" />;
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

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
      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/" /> // Redirect to home if user is already logged in
          ) : (
            <section className="bg-emerald-500 flex items-center justify-center h-screen">
              <div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id="recaptcha-container"></div>
                <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                  <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                    In order to contribute <br /> 
                  </h1>
                  {showOTP ? (
                    <>
                      <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                        <BsFillShieldLockFill size={30} />
                      </div>
                      <label
                        htmlFor="otp"
                        className="font-bold text-xl text-white text-center"
                      >
                        Enter your OTP
                      </label>
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        autoFocus
                        className="opt-container "
                      ></OtpInput>
                      <button
                        onClick={onOTPVerify}
                        className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                      >
                        {loading && (
                          <CgSpinner size={20} className="mt-1 animate-spin" />
                        )}
                        <span>Verify OTP</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                        <BsTelephoneFill size={30} />
                      </div>
                      <label
                        htmlFor=""
                        className="font-bold text-xl text-white text-center"
                      >
                        Please Verify Your Phone Number To Proceed
                      </label>
                      <PhoneInput
                        country={'in'}
                        value={ph}
                        onChange={setPh}
                      />
                      <button
                        onClick={onSignup}
                        className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                      >
                        {loading && (
                          <CgSpinner size={20} className="mt-1 animate-spin" />
                        )}
                        <span>Send code via SMS</span>
                      </button>
                    </>
                  )}
                </div>
              </div>  
            </section>
          )
        }
      />
      <Route
        path="/contribute"
        element={
          user ? (
            <Contribute />
          ) : (
            <Navigate to="/login" /> // Redirect to login if user is not logged in
          )
        }
      />
    </Routes>
  );
};

export default App;
