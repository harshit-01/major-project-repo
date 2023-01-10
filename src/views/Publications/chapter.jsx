import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import ContentContainer from "../../components/contentContainer";

import { chapterData } from "../../assets/data/chapterData";

const Chapter = () => {
    return (
        <>
            <Header/>
            <ContentContainer heading="List of Publications" subheading="Book Chapters" data={chapterData}/>
            <Footer/>
        </>
    );
  };
  
  export default Chapter;