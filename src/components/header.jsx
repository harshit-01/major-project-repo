import React from 'react';
import dstLogo from '../assets/img/logo/dstlogo.jpg';
import iotLogo from '../assets/img/logo/logoiot.png';
import ggsipuLogo from '../assets/img/logo/ggsipu.png';
import { Container, Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
  return (
    <header>
      <div className='headerUpper'>
        <div className='headerLogo'>
          <Link to='/'>
            <img className='headerImage' src={dstLogo} alt='' />
          </Link>
        </div>
        <div className='headerLogo'>
          <Link to='/'>
            <img className='headerImage' src={iotLogo} alt='' />
          </Link>
          <p className='logo'>
            APPLICATION OF IOT IN AGRICULTURE <br />
            <span>PLANTIOT-IPU</span>
            <br />
            <span>(DST-SPONSORED INITIATIVE BY GGSIPU)</span>
          </p>
        </div>
        <div className='headerLogo'>
          <a href='/'>
            <img className='headerImage' src={ggsipuLogo} alt='' />
          </a>
        </div>
      </div>
      <Navbar
        expand='lg'
        style={{ backgroundColor: '#079450', padding: '10px' }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Nav className='me-auto'>
              <LinkContainer to='/'>
                <Nav.Link className='navLink'>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link className='navLink'>About</Nav.Link>
              </LinkContainer>
              <NavDropdown title='Resources' id='navDropdownLink'>
                <LinkContainer to='/sensors'>
                  <NavDropdown.Item>Sensors</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/collaborators'>
                  <NavDropdown.Item>Collaborators</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/cropSearch'>
                  <NavDropdown.Item>Crop Search</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title='Gallery' id='navDropdownLink'>
                <LinkContainer to='/videos'>
                  <NavDropdown.Item>Videos</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/images'>
                  <NavDropdown.Item>Images</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title='Downloads' id='navDropdownLink'>
                <LinkContainer to='/app'>
                  <NavDropdown.Item>App</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/imageData'>
                  <NavDropdown.Item>Image Data</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to='/realTimeData'>
                <Nav.Link className='navLink'>Real-Time Data</Nav.Link>
              </LinkContainer>
              <NavDropdown title='Publications' id='navDropdownLink'>
                <LinkContainer to='/journals'>
                  <NavDropdown.Item>Journals</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/patents'>
                  <NavDropdown.Item>Patents</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/conferences'>
                  <NavDropdown.Item>Conferences Workshops</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/chapters'>
                  <NavDropdown.Item>Chapters</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/statistics'>
                  <NavDropdown.Item>Statistics</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to='/projectTeam'>
                <Nav.Link className='navLink' href=''>
                  Project Team
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/poster'>
                <Nav.Link className='navLink' href=''>
                  Posters
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to='/predict'>
                <Nav.Link className='navLink' href=''>
                  Predict Disease
                </Nav.Link> */}
              {/* </LinkContainer> */}
              <NavDropdown title='Predict' id='navDropdownLink'>
                <LinkContainer to='/predict'>
                  <NavDropdown.Item>Predict Disease</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/multipredict'>
                  <NavDropdown.Item>Predict Multi Disease</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/cropRecommendation'>
                  <NavDropdown.Item>Crop Recommendation System</NavDropdown.Item>
                </LinkContainer>
                </NavDropdown>

              <Link to='/contact'>
                <Button className='navBtn' variant='light' style={{backgroundColor:"#fff",color:"black"}}>
                  Contact Us
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <div className='searchWrapper'>
            <input
              type='search'
              className='search'
              name='search'
              id='search'
              placeholder='Search Here !!'
            />
            <Button style={{backgroundColor:"#fff",color:"black"}} >Search</Button>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
