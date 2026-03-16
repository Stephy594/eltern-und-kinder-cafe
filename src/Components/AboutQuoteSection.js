import { BsChatQuote } from "react-icons/bs";
import "../Styles/AboutQuoteSection.css";

function AboutQuoteSection() {
  return (
    <section className="aqs-section">
      <div className="container">
        <div className="row align-items-end aqs-row">
          <div className="col-lg-6 col-md-5 aqs-image-col">
            <div className="aqs-image-wrap">
              <img
                src="/template/images/Rest4.png"
                alt="Family dining"
                className="aqs-image"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-7 aqs-text-col">
            <div className="aqs-quote-box">
              <BsChatQuote className="aqs-quote-icon" />

              <blockquote className="aqs-blockquote">
                <p className="aqs-quote-text">
                  Ein Familiencafé sollte sich warm, fröhlich und einladend anfühlen – ein Ort,an dem Eltern sich entspannen und Kinder glückliche Erinnerungen schaffen können.
                </p>

                <div className="aqs-quote-author">
                  - Priya&apos;s Eltern-Kind Café
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutQuoteSection;