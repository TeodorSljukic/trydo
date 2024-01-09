import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <footer className="footer-area">
        <div className="footer-wrapper">
          <div className="row align-items-end row--0">
            <div className="col-lg-6">
              <div className="footer-left">
                <div className="inner">
                  <span>Ready To Do This</span>
                  <h2>
                    Let's get <br /> to work
                  </h2>
                  <a className="rn-button-style--2" href="/contact">
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-right">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="footer-link">
                      <h4>Quick Link</h4>
                      <ul className="ft-link">
                        <li>
                          <a href="/portfolio">Work</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/contact">Let's Talk</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                    <div className="footer-link">
                      <h4>Say Hello</h4>
                      <ul className="ft-link">
                        <li>
                          <a href="mailto:admin@example.com">
                            admin@example.com
                          </a>
                        </li>
                        <li>
                          <a href="mailto:hr@example.com">hr@example.com</a>
                        </li>
                      </ul>
                      <div className="social-share-inner">
                        <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="copyright-text">
                    <p>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
