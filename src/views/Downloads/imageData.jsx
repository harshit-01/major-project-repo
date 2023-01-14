import { Container } from "react-bootstrap"
import Footer from "../../components/footer"
import Header from "../../components/header"




export default function ImageData() 
{
    return(
        <>
            <Header/>
            <Container className="m-5 text-center">
                <p className="heading">Image Data</p>
                <Container className="text-start">
                    <ul>
                        <li>
                            <a className="customLink" href="https://drive.google.com/drive/folders/1W84tVYvf9CbMjuI_T9mPLbqE9CZB2_8H?usp=sharing">
                                Early Blight_256_256
                            </a>
                        </li>
                        <li>
                            <a className="customLink" href="https://drive.google.com/drive/folders/1UIZ-xnFr-dLkO0j06PtCT6qo3VG_rGQv?usp=sharing">
                                Early Blight_6020_4015
                            </a>
                        </li>
                        <li>
                            <a className="customLink" href="https://drive.google.com/drive/folders/1a_TSyQ08yEHiI1Q1XJoWN4_E8_CWMruM?usp=sharing">
                                Early Blight_natural
                            </a>
                        </li>
                        <li>
                            <a className="customLink" href="https://drive.google.com/drive/folders/1mTa6EAjvM6kXxbVcvg_GWyiuxcc-nRqX?usp=sharing">
                                Xanthomonas euvesicatoria (Xe)_256_256
                            </a>
                        </li>
                        <li>
                            <a className="customLink" href="https://drive.google.com/drive/folders/1KR3tlS1AnV-mziDjk3k9e42YDTzNyE0y?usp=sharing">
                                Xanthomonas euvesicatoria (Xe)_256_256
                            </a>
                        </li>
                        <li>
                            <a className="customLink" href="https://drive.google.com/drive/folders/1Z4Y821Vo6NGy_imG0-aj5HhVUKi8w5-j?usp=sharing">
                                Xanthomonas euvesicatoria (Xe)_natural
                            </a>
                        </li>
                        <li>
                            <a className="customLink" href="https://drive.google.com/drive/folders/1k298slRBaaRQKyV_UPhjj8A_pSjQ0jQz?usp=sharing">
                                Healthy_natural
                            </a>
                        </li>
                    </ul>
                </Container>
            </Container>
            <Footer/>
        </>
    )
}