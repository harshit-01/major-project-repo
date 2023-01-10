import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { journalData } from "../../assets/data/journalData";
import ContentContainer from "../../components/contentContainer";

const Journals = () => {
    return (
        <>
            <Header/>
            <ContentContainer heading="List of Publication" subheading = "Journal" data={journalData}/>
              
                
            <Footer/>
        </>
    );
  };
  
  export default Journals;