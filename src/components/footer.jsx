import { Container } from 'react-bootstrap';
import IARI from '../assets/img/logo/iari.jpg';
import spectrum from '../assets/img/logo/spectrum.jpg';
import NDUAT from '../assets/img/logo/nduat.png';
import eigen from '../assets/img/logo/eigen.jpg';
import g20 from '../assets/img/logo/g20.jpg'

export default function Footer() {
  return (
    <footer>
      <Container fluid className='footerWrapper'>
        <div className='footer-logo'>
          <p className='footer-logo-heading'>
            Agriculture <br />
            <span className='footer-logo-subheading'>Grow Healthy</span>
          </p>
        </div>
        <div className='footer-contact'>
          <p className='footer-contact-content'>
            <i className='bi bi-envelope'></i>
            <span> plant-iot@ipu.ac.in</span>
          </p>
          <p className='footer-contact-content'>
            <span>
              <i className='bi bi-house-door'></i>
            </span>
            University School of Information, Communication & Technology
            (USIC&T),
            <br />
            Guru Gobind Singh Indraprastha University (GGSIPU),
            <br />
            Dwarka, Delhi, 110078
          </p>
        </div>
        <div className='footer-partners'>
          <h3 className='footer-partners-heading'>In Collaboration With</h3>
          <div className='logo-wrapper'>
            <a className='footer-partners-logos' href='http://www.iari.res.in'>
              <img src={IARI} alt='IARI Logo' />
            </a>
            <a className='footer-partners-logos' href='https://www.specmeters.com/brands/watchdog'>
              <img src={spectrum} alt='Spectrum Logo' />
            </a>
            <a className='footer-partners-logos' href='www.eigen.in'>
              <img src={eigen} alt='Eigen Logo' />
            </a>
            <a className='footer-partners-logos pt-3' href='www.auroelectronics.com'>
              Auro Electronics
            </a>
            <a className='footer-partners-logos' href='https://www.nduat.org/'>
              <img src={NDUAT} alt='NDUAT Logo' />
            </a>
            <a className='footer-partners-logos' href='https://www.g20.org/en/g20-india-2023/logo-theme/'>
              <img src={g20} alt="G20 logo" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
