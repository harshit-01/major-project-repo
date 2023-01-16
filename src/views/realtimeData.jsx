import { Container, Spinner } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";



export default function RealtimeData() 
{

    const [res,setRes] = useState({
        showResult:false,
        result:'',
    })
    const [isLoading,setLoading] = useState(false)

   

    useEffect(()=> {
        async function showRes() {
            try{
                setLoading(true)
                setRes({
                    showResult:false,
                })
                const temp = await fetch('https://cropsense-sensor.onrender.com/')
                const data = await temp.json()
                console.log(data)
                setRes({
                    showResult:true,
                    result:data
                })
            }
            catch(error) {
                console.log(error)
            }
        }
        showRes();

        return
    },[])


    const {showResult,result} = res

    return (
        <>
            <Header/>
            <Container className="my-5 text-center">
                <p className="heading">Real Time Data</p>
                {isLoading && !result &&
                    <Container>
                        <Spinner animation="border" variant="success"/>
                        <p>Data Loading</p>
                    </Container>
                }
                {showResult &&
                    <Container className="box w-50">
                        <p className="subheading">Location: {result.weatherLocation}</p>
                        <p className="subheading">Temperature: {result.weatherTemperature}° C</p>
                        <p className="subheading">Weather Condition: {result.weatherCondition}</p>
                        <p className="subheading">Humidity: {result.weatherHumidity}</p>
                        <p className="subheading">Moisture: {result.moisture}</p>
                        <p className="subheading">Soil Temperature: {result.soilTemperature}° C</p>

                    </Container>
                }
                
            </Container>
            <Footer/>
        </>
    )
}