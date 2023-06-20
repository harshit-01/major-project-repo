import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from './CropRecommendation.module.scss'


export default function CropRecommendationSystem(){
    const [crop,setCrop] = React.useState(null);
    const handleClick = async(e)=>{
        e.preventDefault();
        var formEl = document.forms.cropRecommend;
        var formData = new FormData(formEl);
        var nitrogen = formData.get('nitrogen');
        var phosphorus = formData.get('Phosphorus');
        var potassium = formData.get('Potassium');
        var phValue = formData.get('PhValue');
        var city = formData.get('city');
        var rainfall = formData.get('rainfall');
        console.log(city,rainfall)
        if(city?.length > 0 && rainfall?.length > 0){
            const url = "https://minor-project-server.onrender.com/crop-predict"
            const headers = {
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS'
                }
            const options = {
                method: 'GET',
                // mode: 'cors',
                headers:headers
            };
            try {
                const response = await fetch(url + `?N=${nitrogen}&P=${phosphorus}&K=${potassium}&ph=${phValue}&rainfall=${rainfall}&city=${city}}`, options);
                console.log(response)
                const result = await response.json();
                setCrop(1)
                console.log(JSON.parse(result));
              } catch (error) {
                console.error(error);
                setCrop(null);
              }
        }
        else{
            alert("Please provide all the values asked in the form");
            setCrop(null);
        }
    }
    return(
        <>
            <Header />
            <div className={styles.recommendForm}>
                <div style={{textAlign: 'center',fontWeight:"bold",fontSize:"24px",marginTop:"5px",marginBottom:"25px"}}>
                    Crop Recommendation System
                </div>
                
                <form action="" method="post" id="cropRecommend">
                    <label htmlFor="nitrogen">Enter Nitrogen value:</label>
                    <input type="number" id="nitrogen" name="nitrogen" defaultValue="120"></input><br/>
                    <label htmlFor="Phosphorus">Enter Phosphorus value:</label>
                    <input type="number" id="Phosphorus" name="Phosphorus" defaultValue ="80"></input><br/>
                    <label htmlFor="Potassium">Enter Potassium value:</label>
                    <input type="number" id="Potassium" name="Potassium" defaultValue ="50"></input><br/>
                    <label htmlFor="PhValue">Enter phValue value:</label>
                    <input type="number" id="PhValue" name="PhValue" defaultValue ="7"></input><br/>
                    <label htmlFor="city">Enter City value:</label>
                    <input type="text" id="city" name="city" placeholder ="New delhi" required></input><br/>
                    <label htmlFor="rainfall">Enter Rainfall value:</label>
                    <input type="number" id="rainfall" name="rainfall" placeholder ="Enter value in mm" required></input><br/>
                    <button className={styles.button} type ="submit" onClick={handleClick}>Submit</button>
                </form>
                {crop && <p className={styles.result}>Recommended crop based on the values is : {crop}</p>}
            </div>
            <Footer />
        </>
    )
}