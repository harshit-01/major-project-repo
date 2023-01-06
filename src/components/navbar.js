import React from "react";
import dstLogo from "../assets/img/logo/dstlogo.jpg";
import iotLogo from "../assets/img/logo/logoiot.png"
import ggsipuLogo from "../assets/img/logo/ggsipu.png"
import styles from "./navbar.module.css"
import 'bootstrap/dist/css/bootstrap.css';

export default function CustomNavbar() {
  return (
    
    <header>
    <div className={styles.headerUpper}>
      <div className={styles.headerLogo}>
        <a href="/"
          ><img className={styles.headerImage} src={dstLogo} alt=""
        /></a>
      </div>
      <div className={styles.headerLogo}>
        <a href="/"
          ><img className={styles.headerImage } src={iotLogo} alt=""
        /></a>
        <p className={styles.logoHeading}>
          APPLICATION OF IOT IN AGRICULTURE <br />
          <span>PLANTIOT-IPU</span><br />
          <span>(DST-SPONSORED INITIATIVE BY GGSIPU)</span>
        </p>
      </div>
      <div  className={styles.headerLogo}>
        <a href="/"
          ><img className={styles.headerImage} src={ggsipuLogo} alt=""
        /></a>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={styles.link} href="/about.html">About</a>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a
                  className="link dropdown-toggle"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Resources</a
                >
                <ul className={styles.dropdownMenu} aria-labelledby="dropdownMenu2">
                  <li>
                    <a className={styles.dropdownItem} href="/sensors.html"> Sensors</a>
                  </li>
                  <li>
                    <a className={styles.dropdownItem} href="/collaborators.html">
                      Collaborators
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a
                  className="link dropdown-toggle"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Gallery</a
                >
                <ul className={styles.dropdownMenu} aria-labelledby="dropdownMenu2">
                  <li>
                    <a className={styles.dropdownItem} href="/videos.html"> Videos </a>
                  </li>
                  <li>
                    <a className={styles.dropdownItem} href="/images.html"> Images </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a
                  className="link dropdown-toggle"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Downloads</a
                >
                <ul className={styles.dropdownMenu} aria-labelledby="dropdownMenu2">
                  <li>
                    <a className={styles.dropdownItem} href="/downloads.html"> App </a>
                  </li>
                  <li>
                    <a className={styles.dropdownItem} href="/image-data.html"
                      >Image Data
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className={styles.link} href="/env-data.html">Real-Time Data</a>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a
                  className="link dropdown-toggle"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Publications</a
                >
                <ul className={styles.dropdownMenu} aria-labelledby="dropdownMenu2">
                  <li>
                    <a className={styles.dropdownItem} href="/journals.html">
                      Journals
                    </a>
                  </li>
                  <li>
                    <a className={styles.dropdownItem} href="/patents.html">
                      Patents
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.dropdownItem}
                      href="/conferences-workshops.html"
                    >
                      Conferences Workshops
                    </a>
                  </li>
                  <li>
                    <a className={styles.dropdownItem} href="/chapters.html">
                      Chapters
                    </a>
                  </li>
                  <li>
                    <a className={styles.dropdownItem} href="/publications-stats.html">
                      Statistics
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className={styles.link} href="project-team.html">Project Team</a>
            </li>
          </ul>
          <a href="/">
            <button className="btn btn-outline-success">Contact Us</button>
          </a>
        </div>
        <div className={styles.searchWrapper}>
          <input
            type="search"
            className={styles.search}
            name="search"
            id="search"
            placeholder="Search Here !!"
          />
          <button className="btn btn-outline-success">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </nav>
  </header>
  );
}
