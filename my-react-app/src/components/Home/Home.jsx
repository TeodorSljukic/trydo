import React, { useState } from "react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuTrigger = () => {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuTrigger = () => {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
    setIsMenuOpen(false);
  };
  return (
    <section className="home">
      <header className="header-area formobile-menu header--transparent default-color">
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">
                <img src="../src/assets/logo.png" alt="Digital Agency" />
              </a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li className="has-droupdown">
                  <a href="/main-demo">Home</a>
                  <ul className="submenu">
                    <li>
                      <a href="/main-demo">Main Demo</a>
                    </li>
                    <li>
                      <a href="/dark-main-demo">Main Demo Dark</a>
                    </li>
                    <li>
                      <a href="/creative-agency">Creative Agency</a>
                    </li>
                    <li>
                      <a href="/creative-landing">Creative One Page</a>
                    </li>
                    <li>
                      <a href="/creative-portfolio">Creative Portfolio</a>
                    </li>
                    <li>
                      <a href="/personal-portfolio">Personal Portfolio</a>
                    </li>
                    <li>
                      <a href="/portfolio-landing">Portfolio One Page</a>
                    </li>
                    <li>
                      <a href="/dark-portfolio-landing">
                        Portfolio One Page 02
                      </a>
                    </li>
                    <li>
                      <a href="/digital-agency">Digital Agency</a>
                    </li>
                    <li>
                      <a href="/startup">Startup</a>
                    </li>
                    <li>
                      <a href="/paralax">Paralax</a>
                    </li>
                    <li>
                      <a href="/portfolio-home">Minimal Portfolio</a>
                    </li>
                    <li>
                      <a href="/business">Business</a>
                    </li>
                    <li>
                      <a href="/home-particles">Home Particles</a>
                    </li>
                    <li>
                      <a href="/studio-agency">Studio Agency</a>
                    </li>
                    <li>
                      <a href="/designer-portfolio">Designer Portfolio</a>
                    </li>
                    <li>
                      <a href="/interactive-agency">Interactive Agency</a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a href="/service">Service</a>
                  <ul className="submenu">
                    <li>
                      <a href="/service">Service</a>
                    </li>
                    <li>
                      <a href="/service-details">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li className="has-droupdown">
                  <a href="/main-demo#pages">Pages</a>
                  <ul className="submenu">
                    <li>
                      <a href="/blog">Blog List</a>
                    </li>
                    <li>
                      <a href="/blog-details">Blog Details</a>
                    </li>
                    <li>
                      <a href="/service">Service</a>
                    </li>
                    <li>
                      <a href="/service-details">Service Details</a>
                    </li>
                    <li>
                      <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a href="/portfolio-details">Portfolio Details</a>
                    </li>
                    <li>
                      <a href="/404">404</a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a href="/main-demo">Blocks</a>
                  <ul className="submenu">
                    <li>
                      <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a href="/team">Team</a>
                    </li>
                    <li>
                      <a href="/service">Service</a>
                    </li>
                    <li>
                      <a href="/video-popup">Video Popup</a>
                    </li>
                    <li>
                      <a href="/progressbar">Progressbar</a>
                    </li>
                    <li>
                      <a href="/gallery">Gallery</a>
                    </li>
                    <li>
                      <a href="/counters">Counters</a>
                    </li>
                    <li>
                      <a href="/blog">Blog List</a>
                    </li>
                    <li>
                      <a href="/clint-logo">Clint Logo</a>
                    </li>
                    <li>
                      <a href="/contact-form">Contact Form</a>
                    </li>
                    <li>
                      <a href="/google-map">Google Map</a>
                    </li>
                    <li>
                      <a href="/columns">Columns</a>
                    </li>
                    <li>
                      <a href="/pricing-table">Pricing Table</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <a
                className="rn-btn"
                href="https://themeforest.net/checkout/from_item/25457315?license=regular"
              >
                <span>buy now</span>
              </a>
            </div>
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span onClick={menuTrigger} className="menutrigger text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </span>
            </div>
            <div className="close-menu d-block d-lg-none">
              <span onClick={closeMenuTrigger} className="closeTrigger">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="slider-wrapper">
        <div className="slider-activation">
          <div
            className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
            data-black-overlay="6"
          >
            <div className="container position-relative">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner">
                    <h1 className="title theme-gradient">
                      A digital <br /> agency.{" "}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="service-wrapper service-white">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="service service__style--1">
                      <div className="icon">
                        <img
                          src="../src/assets/icon-1.png"
                          alt="Digital Agency"
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">Business Stratagy</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="service service__style--1">
                      <div className="icon">
                        <img
                          src="../src/assets/icon-2.png"
                          alt="Digital Agency"
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">Website Development</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="service service__style--1">
                      <div className="icon">
                        <img
                          src="../src/assets/icon-3.png"
                          alt="Digital Agency"
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">Marketing & Reporting</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
