import { Container } from "react-bootstrap"
import IARI from '../assets/img/logo/iari.jpg'
import spectrum from '../assets/img/logo/spectrum.jpg'
import NDUAT from '../assets/img/logo/nduat.png'
import eigen from '../assets/img/logo/eigen.jpg'

export default function Footer() {
    return (
        <footer>
            <Container fluid className="footerWrapper">
                <div class="footer-logo">
                <p class="footer-logo-heading">
                     Agriculture <br />
            <span class="footer-logo-subheading">Grow Healthy</span>
          </p>
        </div>
        <div class="footer-contact">
          <p class="footer-contact-content">
            <i class="bi bi-envelope"></i><span> plant-iot@ipu.ac.in</span>
          </p>
          <p class="footer-contact-content">
            <span><i class="bi bi-house-door"></i></span>
            University School of Information, Communication & Technology
            (USIC&T),<br />
            Guru Gobind Singh Indraprastha University (GGSIPU),<br />
            Dwarka, Delhi, 110078
          </p>
        </div>
        <div class="footer-partners">
          <h3 class="footer-partners-heading">In Collaboration With</h3>
          <div class="logo-wrapper">
            <a class="footer-partners-logos" href="http://www.iari.res.in"
              ><img src={IARI} alt="IARI Logo"/></a>
            <a class="footer-partners-logos" href="https://www.specmeters.com/brands/watchdog">
                <img src={spectrum} alt="Spectrum Logo"/>
            </a>
            <a class="footer-partners-logos" href="www.eigen.in"
              ><img src={eigen} alt="Eigen Logo"/>
            </a>
            <a class="footer-partners-logos pt-3" href="www.auroelectronics.com">
                Auro Electronics
            </a>
            <a class="footer-partners-logos" href="https://www.nduat.org/">
                <img src={NDUAT} alt="NDUAT Logo"/>
            </a>
          </div>
        </div>
            </Container>
        
    </footer>
    )

} 