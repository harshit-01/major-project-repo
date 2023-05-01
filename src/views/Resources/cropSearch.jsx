import { Row,  Container } from "react-bootstrap";
import { useState } from "react"
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from '../Gallery/gallery.module.scss'

export default function CropSearch(){
    const [text,setText] = useState("");
    const [cropInfo,setCropInfo] = useState("");

    const cropInformation = async(data)=>{
        if(data.length === 0){
            alert("Please provide an input");
            return;
        }
        const url = `https://duckduckgo-duckduckgo-zero-click-info.p.rapidapi.com/?q=${data}&no_html=1&no_redirect=1&skip_disambig=1&format=json`;
    
        const options = {
          method: 'GET',
          headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '2ef5fbdefcmshbb92015178d9907p1b6477jsn7d33c3fcced7',
            'X-RapidAPI-Host': 'duckduckgo-duckduckgo-zero-click-info.p.rapidapi.com'
          }
        };
       
        try {
          const response = await fetch(url, options);
          const result = await response.text();
          if(JSON.parse(result)["Abstract"].trim().length !== 0){
            setCropInfo(JSON.parse(result)["Abstract"]);
          }
          else{
            setCropInfo("");
            alert("Please provide correct input")
          }
          // console.log(JSON.parse(result)["Abstract"]);
        } catch (error) {
          console.error(error);
        }
    }
    return(
        <>
            <Header/>
            <Container className={styles.wrapper}>
                <p className={styles.heading}>
                    Crop Information
                </p>
                <Row className={styles.body}>
                    <label className={styles.cropLabel}>Enter crop name:</label><br/>
                    <input 
                        className={styles.cropName}
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    >
                    </input><br/>
                    <button className={styles.button} type="button" onClick={()=>cropInformation(text)}>
                        Enter
                    </button>
                    <div className={styles.cropInfo}>
                        {cropInfo.length !==0 ? <p>Description</p> : null}
                        <div>
                            {cropInfo}
                        </div> 
                    </div>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}