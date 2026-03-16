import Layout from "../Components/Layout";
import { FiPhone } from "react-icons/fi";
import "../Styles/About.css";
import AboutQuoteSection from "../Components/AboutQuoteSection";
import "../Styles/AboutQuoteSection.css";
import {
  BsHeartFill,
  BsStarFill,  
} from "react-icons/bs";

function About() {
  const facilities = [
    {
      title: "Private Dining",
      text: "Ein gemütlicher und komfortabler Raum für Geburtstage, Familienfeiern und besondere Momente.",
      image: "/template/images/Rest5.png",
    },
    {
      title: "Kinderspielbereich",
      text: "Eine sichere und fröhliche Spielecke, in der Kinder sich vergnügen können, während die Eltern entspannen.",
      image: "/template/images/Rest10.png",
    },
    {
      title: "Familienveranstaltungen",
      text: "Perfekt für kleine Feiern, Themenveranstaltungen und gemütliche, familienfreundliche Treffen.",
      image: "/template/images/Rest7.png",
    },
  ];

  return (
    <Layout>
      <>
        {/* Page Title */}
        <section
          className="ipad-top-space-margin page-title-big-typography cover-background p-0 md-background-position-left-center"
          style={{
            backgroundImage:
              "url('/template/images/Rest1.png')",
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center small-screen">
              <div className="col-lg-6 col-md-8 position-relative text-center page-title-extra-large">
                <h1 className="alt-font text-dark-gray text-uppercase ls-minus-1px mb-0">
                  Über uns
                </h1>
                <h2 className="alt-font text-dark-gray text-uppercase ls-minus-1px mb-0">
                  <span className="alt-font text-dark-gray text-uppercase ls-minus-1px mb-0"></span>
                  Priya's Eltern-Kind Café
                  <span className="alt-font text-dark-gray text-uppercase ls-minus-1px mb-0"></span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Image Intro Section */}
        {/* <section className="py-0 sm-pb-50px">
          <div className="container position-relative">
            <div className="row">
              <div className="col-10 col-md-3 d-none d-md-block">
                <img
                  src="/template/images/Rest3.png"
                  alt="Cafe side"
                  className="animation-float"
                />
              </div>
              <div className="col-md-9 position-relative">
                <div className="overflow-hidden position-relative h-550px lg-h-500px md-h-auto">
                  <div className="w-100">
                    <img
                      src="/template/images/Rest2.png"
                      alt="Cafe main"
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Quote Section */}      

        {/* About Content */}
        <section className="bg-very-light-gray position-relative overflow-hidden z-index-0 p-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 md-mb-50px sm-mb-30px AbtCafe">
                <span className="fs-15 fw-600 text-red text-uppercase mb-25px d-block">
                  <span className="w-70px xs-w-50px h-2px bg-red d-inline-block align-middle me-15px"></span>
                  Über unser Café
                </span>

                <h2 className="alt-font text-uppercase text-dark-gray mb-20px w-90 lg-w-100">
                  Ein wunderschöner Ort, den Eltern und Kinder gemeinsam genießen können.
                </h2>

                <p className="w-80 mb-35px lg-w-100">
                  Wir bieten eine herzliche Atmosphäre, köstliche Speisen und Getränke sowie ein
                    kinderfreundliches Umfeld, in dem Familien wertvolle
                    Zeit miteinander in Komfort und Freude verbringen können.
                </p>

                <div className="d-flex align-items-center bg-white w-300px box-shadow-small border-radius-4px p-30px pt-20px pb-15px mb-25px">
                  <div className="col-auto text-center">
                    <h2 className="fs-70 text-dark-gray alt-font mb-0">4.8</h2>
                  </div>
                  <div className="col border-start border-color-transparent-dark-very-light ms-20px ps-20px">
                    <div className="review-star-icon fs-19 lh-22">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                    <span className="fs-15 d-block text-dark-gray fw-500">                    
                        Rezension von Google
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-dark-gray fw-500">
                    <BsHeartFill className="text-red me-5px mt-minus-2px align-middle" />
                    Ein familienfreundliches und authentisches Erlebnis.
                  </span>
                </div>
              </div>

              <div className="col-lg-7 text-center text-lg-start aqs-section">
                <img
                  src="/template/images/Rest8.png"
                  alt="About café"  className="animation-float"
                />
              </div>
            </div>
          </div>
        </section>
 <AboutQuoteSection />
        {/* Facilities */}
        <section className="overlap-height">
          <div className="container overlap-gap-section">
            <div className="row justify-content-center mb-2">
              <div className="col-lg-7 text-center">
                <span className="fs-15 fw-600 text-red text-uppercase mb-10px d-block">
                  <span className="w-5px h-2px bg-red d-inline-block align-middle me-5px"></span>
                  Unsere Einrichtungen
                  <span className="w-5px h-2px bg-red d-inline-block align-middle ms-5px"></span>
                </span>
                <h2 className="alt-font text-dark-gray">Was uns besonders macht</h2>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
              {facilities.map((item, index) => (
                <div className="col" key={index}>
                  <div className="services-box-style-01 hover-box md-mb-30px">
                    <div className="position-relative box-image border-radius-6px">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="p-10 sm-p-8 bg-white last-paragraph-no-margin text-center">
                      <span className="d-inline-block fs-26 alt-font text-dark-gray">
                        {item.title}
                      </span>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-very-light-gray">
          <div className="container">
            <div className="row align-items-center mb-4">
              <div className="col-lg-6 md-mb-50px sm-mb-30px">
                <img
                  src="/template/images/Rest11.png"
                  alt="Cafe story"
                  className="border-radius-6px w-100"
                />
              </div>

              <div className="col-lg-5 offset-lg-1">
                <span className="fs-15 fw-600 text-red text-uppercase mb-25px d-block">
                  <span className="w-70px xs-w-50px h-2px bg-red d-inline-block align-middle me-15px"></span>
                  Unsere Geschichte
                </span>

                <h1 className="alt-font text-dark-gray mb-20px">
                  Herzliche Momente, glückliche Kinder, entspannte Eltern.
                </h1>

                <p className="w-90 lg-w-100">
                  Unser Café ist so gestaltet, dass Familien in einem gemütlichen und
                    schönen Ambiente zusammenkommen können, wo Kinder spielerische Momente genießen und
                    Eltern bei gutem Essen und herzlicher Gastfreundschaft entspannen können.
                </p>

                <div className="d-inline-block mt-10px xs-mt-0">
                  <a
                    href="/kontakt"
                    className="btn btn-dark-gray btn-large btn-switch-text btn-round-edge btn-box-shadow me-30px xs-me-15px xs-mb-10px"
                  >
                    <span>
                      <span className="btn-double-text" data-text="Contact us">
                       Kontaktieren Sie uns
                      </span>
                    </span>
                  </a>

                  <div className="alt-font fs-24 d-inline-block align-middle lh-0 text-dark-gray xs-mb-10px">
                    <FiPhone className="me-10px text-base-color" />
                    <a href="tel:+4920184329778">+49 (0) 201 84329778</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Happy Visitors */}
        <section>
          <div className="container">
            <div className="row justify-content-center overlap-section mb-6 g-0">
              <div className="col-auto text-center last-paragraph-no-margin bg-white pt-20px pb-20px ps-6 pe-6 border-radius-100px">
                <div className="text-center bg-golden-yellow text-white fs-16 lh-36 border-radius-30px d-inline-block ps-20px pe-20px align-middle me-10px">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <div className="d-inline-block fs-18 text-dark-gray align-middle fw-500">
                  <span className="text-decoration-line-bottom-medium fw-600">
                    Viele glückliche Familien
                  </span>{" "}
                  haben unser einladendes Café besucht.
                </div>
              </div>
            </div>
          </div>
        </section>        
      </>
    </Layout>
  );
}

export default About;