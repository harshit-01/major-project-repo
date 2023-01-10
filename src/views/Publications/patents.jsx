import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import ContentContainer from "../../components/contentContainer";
import { patentData } from "../../assets/data/patentData";


const Patents = () => {
    return (
        <>
            <Header/>
            <ContentContainer heading="List Of Publications" subheading = "Patent" data = {patentData}/>
            <Footer/>
        </>
    );
  };
  
  export default Patents;