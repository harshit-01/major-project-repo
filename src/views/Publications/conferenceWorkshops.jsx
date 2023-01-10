import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import ContentContainer from "../../components/contentContainer";
import { conferenceData } from "../../assets/data/conferenceData";

const workshopData = [
    {
        content:`Shradha Verma, Anuradha Chug, Amit Prakash Singh, Puranjay
        Rajvanshi & Shubham Sharma (2018). Deep Learning based Plant
        Disease Diagnosis for Grape Plant. First International Workshop on
        Machine Learning for Cyber-Agricultural Systems, Research
        Frontiers in Precision Agriculture, held at IIT Bombay, (pp.
        416-420).`
    }
]

const Conferences = () => {
    return (
        <>
            <Header/>
            <ContentContainer heading="List of Publications" subheading="Conferences" data={conferenceData}/>
            <ContentContainer subheading="Workshops" data = {workshopData}/>
            <Footer/>
        </>
    );
  };
  
  export default Conferences;