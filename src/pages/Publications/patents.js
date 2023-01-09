import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import styles from "./publications.module.css";

const Patents = () => {
    return (
        <>
            <Header/>
            <section>
            <div className={styles.aboutWrapper}>
                <div className={styles.aboutHeadingWrapper}>
                <h2>List of Publications</h2>
                <p>Patent</p>
                </div>
                <div className={styles.aboutContentWrapper}>
                <ul>
                    <li className={styles.contentContainer}>
                    Amit Prakash Singh, Anuradha Chug, Anshul Bhatia (2021, October).
                    A Multi-Sensor and Image-Based Fusion Framework for Automated
                    Detection of Early Blight Disease in Tomato Plants. Application
                    Number: 202111047712) Indian Official Journal of the Patents.
                    </li>
                    <li className={styles.contentContainer}>
                    Raj Kumar, Amit Prakash Singh, Anuradha Chug, Harsh Khatter (2021,
                    December) . Advance Crop Disease Detection System using Cloud
                    Computing. Application Number: 202111059548. Indian Official
                    Journal of the Patents.
                    </li>
                </ul>
                </div>
            </div>
            </section>
            <Footer/>
        </>
    );
  };
  
  export default Patents;