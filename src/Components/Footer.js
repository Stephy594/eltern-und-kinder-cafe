import { Link } from "react-router-dom";
import {
  BsChatSquareText,
  BsTelephoneInbound,
  BsEnvelopeOpen,
  BsGeoAlt,
} from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import logo from "../Assets/logo2.png";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer
      className="pk-footer"
      style={{
        backgroundImage: "url('/template/images/demo-restaurant-home-footer-bg.jpg')",
      }}
    >
      <div className="pk-footer-top">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center pk-footer-cards-row">
            <div className="col pk-footer-card-col">
              <div className="pk-footer-card">
                <div className="pk-footer-card-icon">
                  <BsChatSquareText />
                </div>
                <div className="pk-footer-card-content">
                  <span className="pk-footer-card-title">Über das Café</span>
                  <p>
                    Genießen Sie mit Ihren Lieben ein herzliches und familienfreundliches Café-Erlebnis.
                  </p>
                </div>
              </div>
            </div>

            <div className="col pk-footer-card-col">
              <div className="pk-footer-card">
                <div className="pk-footer-card-icon">
                  <BsTelephoneInbound />
                </div>
                <div className="pk-footer-card-content">
                  <span className="pk-footer-card-title">Lass uns reden</span>
                  <div className="pk-footer-card-text">
                    <span>
                      Phone: <a href="tel:+4920184329778">+49 (0) 201 84329778</a>
                    </span>
                    <span>Mon - Son: 9:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col pk-footer-card-col">
              <div className="pk-footer-card">
                <div className="pk-footer-card-icon">
                  <BsEnvelopeOpen />
                </div>
                <div className="pk-footer-card-content">
                  <span className="pk-footer-card-title">Tisch reservieren</span>
                  <div className="pk-footer-card-text">
                    <a href="mailto:info@priyascafe.de">info@priyascafe.de</a>
                    <a href="mailto:booking@priyascafe.de">
                      booking@priyascafe.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col pk-footer-card-col">
              <div className="pk-footer-card">
                <div className="pk-footer-card-icon">
                  <BsGeoAlt />
                </div>
                <div className="pk-footer-card-content">
                  <span className="pk-footer-card-title">Kontaktieren Sie uns</span>
                  <p>Helenenstraße 57, 45143 Essen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pk-footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-6 text-center text-sm-start order-3 order-sm-2 order-md-1">
              <p className="pk-footer-copy">
                © Copyright 2026{" "}
                <Link to="/" className="pk-footer-copy-link">
                  Priya's Eltern-Kind Café
                </Link>
              </p>
            </div>

            <div className="col-md-4 text-center order-1 order-md-2 pk-footer-logo-wrap">
              <Link to="/" className="pk-footer-logo">
                <img src={logo} alt="Priya's Eltern-Kind Café" />
              </Link>
            </div>

            <div className="col-md-4 col-sm-6 text-center text-sm-end order-2 order-sm-3 order-md-3">
              <ul className="pk-footer-social">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    className="dribbble"
                    href="https://dribbble.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaDribbble />
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;