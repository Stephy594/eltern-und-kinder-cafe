import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
//import demo from "../Assets/demo-restaurant-tab-03.jpg";

function HeroBanner() {
  const words = ["Laugh", "Playtime", "Joy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="rc-hero"
      style={{
        backgroundImage: "url('/template/images/Rest1.png')",
      }}
    >
      <div className="rc-overlay"></div>

      <div className="container h-100">
        <div className="row align-items-center h-100 justify-content-center">
          <div className="col-12 text-center position-relative">
            <div
              className="rc-circle"
              style={{
                backgroundImage:
                  "url('/template/images/demo-restaurant-home-banner-pattern.png')"
              }}
            >
              <div className="rc-content">
                <p className="rc-subtitle">
                  Willkommen bei Priya&apos;s Eltern-Kind Café
                </p>

                <div className="rc-title">
                  <span className="rc-outline">Family Café</span>
                  <span key={words[index]} className="rc-rotate">
                    {words[index]}
                  </span>
                </div>

                <a href="/kontakt" className="rc-button">
                  <span>Tisch reservieren</span>
                  <FiArrowRight size={18} />
                </a>

                {/* <img
                  src="/template/images/demo-restaurant-about-01.png"
                  alt="Decoration"
                  className="rc-floating"
                /> */}
                {/* <img
                    src={demo}
                    alt="Decoration" className="rc-floating"
                    style={{
                      height: "72px",
                      width: "auto",
                      objectFit: "contain",
                      filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))"
                    }}
                  /> */}
                   
                  <div className="hero-badge">
                      100%
                      <br />
                      hausgemacht
                      <br />
                      &
                      <br />
                      familienfreundlich
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;