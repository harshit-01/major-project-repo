import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./publications.module.css";

const Statistics = () => {
    return (
        <>
            <Header/>
            <h2 className={styles.contentContainer}>Currently under development</h2>
            <Footer/>
        </>
    );
  };
  
  export default Statistics;