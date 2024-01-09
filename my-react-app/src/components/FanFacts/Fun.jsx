import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const FunFacts = () => {
  const [countUpVisible, setCountUpVisible] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setCountUpVisible(true);
    }
  }, [inView]);

  return (
    <section className="fun">
      <div ref={ref} className="rn-counterup-area pt--25 pb--110 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="fontWeight500">Our Fun Facts</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12">
              <h5 className="counter">
                {countUpVisible && <CountUp end={199} duration={2} />}
              </h5>
              <p className="description">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
            <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12">
              <h5 className="counter">
                {countUpVisible && <CountUp end={575} duration={2} />}
              </h5>
              <p className="description">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
            <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12">
              <h5 className="counter">
                {countUpVisible && <CountUp end={69} duration={2} />}
              </h5>
              <p className="description">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
