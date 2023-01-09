import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import styles from "./publications.module.css";

const Chapter = () => {
    return (
        <>
            <Header/>
            <section>
                    <div className={styles.aboutWrapper}>
                    <div className={styles.aboutHeadingWrapper}>
                    <h2>List of Publications</h2>
                    <p>Book Chapters</p>
                    </div>
                    <div className={styles.aboutContentWrapper}>
                    <ul>
                        <li className={styles.contentContainer}>
                        Priyanka Sahu, Anuradha Chug, Amit Prakash Singh, Dinesh Singh and
                        Ravinder Pal Singh. Challenges and Issues in Plant Disease
                        Detection using Deep Learning. In Book Machine Learning Techniques
                        for Pattern Recognition and Information Security, (pp. 56-74).
                        (Scopus Indexed, IGI Global, Published: May 2020).
                        <a href="https://doi.org/10.4018/978-1-7998-3299-7.ch004">DOI:</a>
                        <a
                            href="https://www.igi-global.com/chapter/challenges-and-issues-in-plant-disease-detection-using-deep-learning/279904"
                            >URL:</a
                        >
                        </li>
                        <li className={styles.contentContainer}>
                        Shradha Verma, Anshul Bhatia, Anuradha Chug, Amit Prakash Singh.
                        Recent Advancements in Multimedia Big Data Computing for IoT
                        Applications in Precision Agriculture: Opportunities, Issues and
                        Challenges. In Book Multimedia Big Data Computing for IoT
                        Applications: Concepts, Paradigms and Solutions, (pp. 391 –
                        416).(Scopus Indexed, Springer, Published: February 2020).
                        <a href="https://doi.org/10.1007/978-981-13-8759-3_15">DOI:</a>
                        <a
                            href="https://link.springer.com/chapter/10.1007/978-981-13-8759-3_15"
                            >URL:</a
                        >
                        </li>
                        <li className={styles.contentContainer}>
                        Shradha Verma, Anuradha Chug, Amit Prakash Singh, Shubham Sharma &
                        Puranjay Rajvanshi. Deep Learning- Based Mobile Application for
                        Plant Disease Diagnosis: A Proof of Concept With a Case Study on
                        Tomato Plant. In Applications of Image Processing and Soft
                        Computing Systems in Agriculture, (pp. 242-271). (IGI Global,
                        Published: February 2019).
                        <a href="https://doi.org/10.4018/978-1-5225-8027-0.ch010">DOI:</a>
                        <a
                            href="https://www.igi-global.com/chapter/deep-learning-based-mobile-application-for-plant-disease-diagnosis/224082"
                            >URL:</a
                        >
                        </li>
                    </ul>
                    </div>
                    </div>
            </section>
            <Footer/>
        </>
    );
  };
  
  export default Chapter;