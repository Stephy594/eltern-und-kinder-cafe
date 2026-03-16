import { useEffect } from "react";
import Layout from "../Components/Layout";
import AnimatedImageSection from "../Components/AnimatedImageSection";
import { FiPhone } from "react-icons/fi";
import HeroBanner from "../Components/HeroBanner";
import "../Components/HeroBanner.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div
        data-mobile-nav-trigger-alignment="right"
        data-mobile-nav-style="modern"
        data-mobile-nav-bg-color="#383632"
        className="custom-cursor"
      >
        <div className="cursor-page-inner">
          <div className="circle-cursor circle-cursor-inner"></div>
          <div className="circle-cursor circle-cursor-outer"></div>
        </div>

        <section>
          <HeroBanner />
        </section>

        <section>
          <AnimatedImageSection />
        </section>

        <section
          id="abouts"
          className="position-relative overflow-hidden z-index-0"
        >
          <div className="container">
            <div className="row align-items-center mb-4 lg-mb-6 lg-mt-5">
              <div className="col-xl-7 col-lg-6 text-center position-relative md-mb-50px xs-mb-30px">
                <img src="/template/images/Rest9.png" alt="About" />
              </div>

              <div className="col-xl-5 col-lg-6">
                <span className="fs-15 fw-600 text-red text-uppercase mb-25px d-block">
                  <span className="w-70px h-2px bg-red d-inline-block align-middle me-15px"></span>
                  Familienfreundlich
                </span>

                <h2 className="alt-font text-dark-gray mb-15px">
                  Ein wunderschöner Ort für Eltern und Kinder.
                </h2>

                <p className="w-90">
                  Genießt eine warme Atmosphäre, leckere Speisen und Getränke
                  und einen liebevollen Ort, an dem Familien gemeinsam schöne
                  Erinnerungen schaffen können.
                </p>

                <div className="d-inline-block mt-10px xs-mt-0">
                  <a
                    href="/kontakt"
                    className="btn btn-dark-gray btn-large btn-switch-text btn-round-edge btn-box-shadow me-30px xs-me-15px xs-mb-10px"
                  >
                    <span>
                      <span className="btn-double-text" data-text="Kontakt">
                        Kontakt
                      </span>
                    </span>
                  </a>

                  <div className="alt-font fs-24 d-inline-flex align-items-center text-dark-gray xs-mb-10px about-phone-wrap">
                    <FiPhone className="me-10px text-base-color" size={20} />
                    <a href="tel:+4920184329778">+49 (0) 201 84329778</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;