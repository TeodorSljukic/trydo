import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index === selectedTab ? null : index);
  };

  const testimonials = [
    {
      id: 1,
      text: "Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "Aklima - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 2,
      text: "Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "Fatima Asrafy - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 3,
      text: "Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "Jannat Tumpa - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 4,
      text: "Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "Johns Due - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 5,
      text: "Testimonial 5 text goes John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original..",
      author: "John Doe - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 6,
      text: "Testimonial 6 Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "Author Amar Orthi - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 7,
      text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "Fatima Ma - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 8,
      text: "Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original. ",
      author: "JON CUMMINS - COO, AMERIMAR ENTERPRISES, INC.",
    },
    // Dodajte ostale testomniale po potrebi
  ];

  useEffect(() => {
    // Postavljanje početnog taba kada se komponenta učita
    setSelectedTab(0);
  }, []);

  // Ispisivanje ID-eva, teksta i autora u konzolu
  // useEffect(() => {
  //   testimonials.forEach((testimonial) => {
  //     console.log(
  //       `ID: ${testimonial.id}, Text: ${testimonial.text}, Author: ${testimonial.author}`
  //     );
  //   });
  // }, []);

  return (
    <section className="testimonial">
      <div className="rn-testimonial-area bg_color--5 ptb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="react-tabs" data-rttabs="true">
                <div className="react-tabs__tab-panel">
                  {selectedTab !== null && (
                    <div className="rn-testimonial-content text-center">
                      <div className="inner">
                        <p>{testimonials[selectedTab].text}</p>
                      </div>
                      <div className="author-info">
                        <h6>
                          <span>{testimonials[selectedTab].author}</span>
                        </h6>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tabovi sa slikama */}
                <ul className="testimonial-thumb-wrapper" role="tablist">
                  {testimonials.map((testimonial, index) => (
                    <li
                      key={testimonial.id}
                      className={`react-tabs__tab ${
                        selectedTab === index ? "react-tabs__tab--selected" : ""
                      }`}
                      role="tab"
                      id={`react-tabs-${testimonial.id}`}
                      aria-selected={selectedTab === index}
                      aria-disabled="false"
                      aria-controls={`react-tabs-${testimonial.id}`}
                      tabIndex="0"
                      data-rttab="true"
                      onClick={() => handleTabClick(index)}
                    >
                      <div className="testimonial-thumbnai">
                        <div className="thumb">
                          {/* Ovde treba koristiti require za dinamički import slika */}
                          <img
                            src={`../src/assets/testimonial-${testimonial.id}.jpg`}
                            alt={`Testimonial ${testimonial.id} Images`}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
