import React from 'react';
import Header from '../../components/header';
import gt1 from '../../assets/img/hero/gt1.jpg';
import gt2 from '../../assets/img/hero/gt2.jpg';
import gt3 from '../../assets/img/hero/gt3.jpg';
import gt5 from '../../assets/img/hero/gt5.jpg';

import styles from './about.module.css';
const About = () => {
  return (
    <>
      <Header />
      <section>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutHeadingWrapper}>
            <h2>DST-sponsored Project</h2>
            <p>
              ‘Application of Internet of Things (IoT) in Agriculture sector’
            </p>
          </div>
          <div className={styles.aboutContentWrapper}>
            <p>
              India loses an estimated 15-20 percent of potential yield to
              weeds, pests and plant diseases. Farming being a major occupation
              in the subcontinent, with 66.5% rural population, crop protection
              from plant diseases has become a serious concern. Environmental
              and climatic factors play a substantial role in the onset of a
              particular disease. Pathogens (already present in soil, air, water
              and crop debris) are dormant until they acknowledge suitable
              environmental conditions. Thus, any crop in the fields is
              vulnerable and requires constant monitoring, exercised by the
              farmers to an extent, for noticing visual symptoms of a disease.
              Also, in the future there will arise a need to find a balance
              between reduced use of pesticides and the pressure to increase
              pesticide utilization due to climatic change.
            </p>
            <p>
              In this project, we propose the practice of smart agriculture
              using automation and IoT technologies. We propose that by using
              IoT technologies, data can be collected and analyzed. Timely
              prediction for most probable disease in the crop can be made using
              data analytics and AI. By implementing a model where the inputs
              would be provided by sensors and intelligent decision making based
              applications can be deployed using machine learning algorithms, a
              well designed “Smart Plant Disease Surveillance System” can be
              made on accurate real time field data. We intend to develop a
              smart system in which various parameters such as temperature,
              humidity, pressure, water level, microbes can be observed and
              timely action can be taken to prevent any hazards such as diseases
              in the crops etc.
            </p>
            <p>
              A “Smart Plant Disease Surveillance System” using IoT devices is
              proposed, in which the main server can be located at district
              headquarter to maintain various parameters of its crops grown in
              fields. IoT based sensors will automatically detect, process and
              send the required information to the backbone network. This
              backbone network will in turn process the details and use them as
              dependent attributes in a prediction model to predict if there is
              any probability of developing any kind of disease well in advance.
              This information will further be given to the agriculture ministry
              so that the trends of the crop are understood quick, smart and
              easy. This will help the agriculture ministry to take necessary
              steps without much delay as all the information is given by the
              smart devices well in advance.
            </p>
            <p>
              Recent research in the sensor based techniques have led to the
              identification and development of imaging technologies that are
              extensively being utilized for agricultural applications. There is
              a plethora of sensors available , to be put to good use for the
              monitoring of environmental factors dominating the plant growth,
              along with the imaging and remote sensing techniques utilized for
              monitoring plant health with minimum human intervention. The
              objective of this project is to evaluate and observe the impact of
              climatic conditions on common crops in India such as Maize, Wheat,
              Tomato and Potato & develop a learning model based on advanced
              remote sensing techniques and artificial intelligence.
            </p>
          </div>
          <div className={styles.aboutImageWrapper}>
            <div class={styles.aboutImageContainer}>
              <p>Early Blight infected tomato plant.</p>
              <img className={styles.aboutImage} src={gt1} alt='' />
            </div>
            <div className={styles.aboutImageContainer}>
              <p>Tomato pots for disease inoculation.</p>
              <img className={styles.aboutImage} src={gt2} alt='' />
            </div>
            <div className={styles.aboutImageContainer}>
              <p>PUSA Rohini Tomato seeds.</p>
              <img className={styles.aboutImage} src={gt3} alt='' />
            </div>
            <div className={styles.aboutImageContainer}>
              <p>Basic Architecture.</p>
              <img className={styles.aboutImage} src={gt5} alt='' />
            </div>
          </div>
        </div>
      </section>
      <h1>FOOTER</h1>
    </>
  );
};

export default About;
