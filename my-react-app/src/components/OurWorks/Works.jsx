import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Works = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <section className="works">
      <div className="portfolio-area ptb--120 bg_color--1">
        <div
          className="portfolio-sacousel-inner mb--55"
          // style={{ overflow: "hidden" }}
        >
          <div className="portfolio-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title">
                    <h2>Our Works</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-slick-activation mt--70 mt_sm--40">
              <div className="slick-slider slick-initialized" dir="ltr">
                <button
                  type="button"
                  data-role="none"
                  className="slick-arrow slick-prev"
                  // style={{ display: "block" }}
                  onClick={goPrev}
                >
                  Previous
                </button>
                <div className="slick-list">
                  <div className="slick-track">
                    <Swiper
                      ref={swiperRef}
                      slidesPerView={1}
                      breakpoints={{
                        400: {
                          slidesPerView: 1,
                        },
                        700: {
                          slidesPerView: 2,
                        },
                        1200: {
                          slidesPerView: 3,
                        },
                        1600: {
                          slidesPerView: 5,
                        },
                      }}
                      loop={true}
                      pagination={{
                        el: ".slick-dots",
                        clickable: true,
                      }}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div
                          className="slick-slide slick-cloned"
                          // aria-hidden="true"
                        >
                          <div>
                            <div className="portfolio">
                              <div className="thumbnail-inner">
                                <div className="thumbnail image-2"></div>
                                <div className="bg-blr-image image-2"></div>
                              </div>
                              <div className="content">
                                <div className="inner">
                                  <p>Development</p>
                                  <h4 className="title">
                                    <a href="/portfolio-details">
                                      Getting tickets to the big show
                                    </a>
                                  </h4>
                                  <div className="portfolio-button">
                                    <a
                                      className="rn-btn"
                                      href="/portfolio-details"
                                    >
                                      Case Study
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a
                                className="link-overlay"
                                href="/portfolio-details"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                        >
                          <div>
                            <div className="portfolio">
                              <div className="thumbnail-inner">
                                <div className="thumbnail image-3"></div>
                                <div className="bg-blr-image image-3"></div>
                              </div>
                              <div className="content">
                                <div className="inner">
                                  <p>Development</p>
                                  <h4 className="title">
                                    <a href="/portfolio-details">
                                      Getting tickets to the big show
                                    </a>
                                  </h4>
                                  <div className="portfolio-button">
                                    <a
                                      className="rn-btn"
                                      href="/portfolio-details"
                                    >
                                      Case Study
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a
                                className="link-overlay"
                                href="/portfolio-details"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                        >
                          <div>
                            <div className="portfolio">
                              <div className="thumbnail-inner">
                                <div className="thumbnail image-4"></div>
                                <div className="bg-blr-image image-4"></div>
                              </div>
                              <div className="content">
                                <div className="inner">
                                  <p>Development</p>
                                  <h4 className="title">
                                    <a href="/portfolio-details">
                                      Getting tickets to the big show
                                    </a>
                                  </h4>
                                  <div className="portfolio-button">
                                    <a
                                      className="rn-btn"
                                      href="/portfolio-details"
                                    >
                                      Case Study
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a
                                className="link-overlay"
                                href="/portfolio-details"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                        >
                          <div>
                            <div className="portfolio">
                              <div className="thumbnail-inner">
                                <div className="thumbnail image-5"></div>
                                <div className="bg-blr-image image-5"></div>
                              </div>
                              <div className="content">
                                <div className="inner">
                                  <p>Development</p>
                                  <h4 className="title">
                                    <a href="/portfolio-details">
                                      Getting tickets to the big show
                                    </a>
                                  </h4>
                                  <div className="portfolio-button">
                                    <a
                                      className="rn-btn"
                                      href="/portfolio-details"
                                    >
                                      Case Study
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a
                                className="link-overlay"
                                href="/portfolio-details"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                        >
                          <div>
                            <div className="portfolio">
                              <div className="thumbnail-inner">
                                <div className="thumbnail image-3"></div>
                                <div className="bg-blr-image image-3"></div>
                              </div>
                              <div className="content">
                                <div className="inner">
                                  <p>Development</p>
                                  <h4 className="title">
                                    <a href="/portfolio-details">
                                      Getting tickets to the big show
                                    </a>
                                  </h4>
                                  <div className="portfolio-button">
                                    <a
                                      className="rn-btn"
                                      href="/portfolio-details"
                                    >
                                      Case Study
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a
                                className="link-overlay"
                                href="/portfolio-details"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                        >
                          <div>
                            <div className="portfolio">
                              <div className="thumbnail-inner">
                                <div className="thumbnail image-4"></div>
                                <div className="bg-blr-image image-4"></div>
                              </div>
                              <div className="content">
                                <div className="inner">
                                  <p>Development</p>
                                  <h4 className="title">
                                    <a href="/portfolio-details">
                                      Getting tickets to the big show
                                    </a>
                                  </h4>
                                  <div className="portfolio-button">
                                    <a
                                      className="rn-btn"
                                      href="/portfolio-details"
                                    >
                                      Case Study
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a
                                className="link-overlay"
                                href="/portfolio-details"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <button
                  type="button"
                  data-role="none"
                  className="slick-arrow slick-next"
                  // style={{ display: "block" }}
                  onClick={goNext}
                >
                  Next
                </button>
                {/* <ul style={{ display: "block" }} className="slick-dots">
                  <li className="slick-active">
                    <button>1</button>
                  </li>
                  <li className="slick-active">
                    <button>2</button>
                  </li>
                  <li className="slick-active">
                    <button>3</button>
                  </li>
                  <li className="slick-active">
                    <button>4</button>
                  </li>
                  <li className="slick-active">
                    <button>5</button>
                  </li>
                  <li className="slick-active">
                    <button>6</button>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
