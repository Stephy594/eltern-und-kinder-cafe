import { useState } from "react";
import Layout from "../Components/Layout";
import "../Styles/Kontakt.css";
import ReservationTabs from "../Components/ReservationTabs";
import "../Styles/ReservationTabs.css";
import {
  FiMail,
  FiMessageSquare,
  FiUser,
  FiMapPin,
} from "react-icons/fi";
console.log("API_BASE_URL:", API_BASE_URL);
console.log("FINAL URL:", `${API_BASE_URL}/api/Reservation/contact`);
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Bitte geben Sie Ihren Namen ein.");
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage("Bitte geben Sie Ihre E-Mail-Adresse ein.");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("Bitte geben Sie Ihre Nachricht ein.");
      return;
    }

    if (!API_BASE_URL) {
      setErrorMessage("API-URL ist nicht konfiguriert.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_BASE_URL}/api/Reservation/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      let result = {};
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        result = { message: text };
      }

      if (!response.ok) {
        throw new Error(
          result.message || "Nachricht konnte nicht gesendet werden."
        );
      }

      setSuccessMessage("Ihre Nachricht wurde erfolgreich gesendet.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage(
        error.message || "Beim Senden ist ein Fehler aufgetreten."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <>
        <section
          className="kt-page-title"
          style={{
            backgroundImage: "url('/template/images/contact-title-bg.jpg')",
          }}
        >
          <div className="kt-page-title-overlay"></div>
          <div className="container">
            <div className="row align-items-center justify-content-center kt-title-row">
              <div className="col-lg-6 col-md-8 text-center">
                <h1 className="kt-main-title">Kontakt</h1>
                <h2 className="kt-sub-title">
                  <span></span>
                  Priya&apos;s Eltern-Kind Café
                  <span></span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="kt-contact-main">
          <div className="container">
            <div className="row">
              <div
                className="col-12 kt-map-wrap"
                style={{
                  backgroundImage: "url('/template/images/contact-map-bg.jpg')",
                }}
              >
                <div className="kt-map-box">
                  <iframe
                    title="Priya's Eltern-Kind Café location"
                    src="https://www.google.com/maps?q=Helenenstraße%2057,%2045143%20Essen&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="row align-items-end justify-content-center">
              <div className="col-xl-7 col-lg-6 align-self-start">
                <span className="kt-big-text">Hier schreiben</span>
              </div>

              <div className="col-xl-5 col-lg-6 col-md-12 kt-form-col">
                <div className="kt-form-card">
                  <FiMessageSquare className="kt-form-bg-icon" />

                  <h2 className="kt-form-title">Wie können wir Ihnen helfen?</h2>

                  <form className="kt-form" onSubmit={handleSubmit}>
                    <div className="kt-form-group">
                      <span className="kt-form-icon">
                        <FiUser />
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Ihr Name*"
                        className="kt-input"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="kt-form-group">
                      <span className="kt-form-icon">
                        <FiMail />
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Ihre E-Mail-Adresse*"
                        className="kt-input"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="kt-form-group kt-textarea-group">
                      <span className="kt-form-icon">
                        <FiMessageSquare />
                      </span>
                      <textarea
                        name="message"
                        placeholder="Ihre Nachricht"
                        rows="4"
                        className="kt-input kt-textarea"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="kt-submit-btn"
                      disabled={loading}
                    >
                      {loading ? "Wird gesendet..." : "Nachricht senden"}
                    </button>

                    {successMessage && (
                      <p
                        style={{
                          color: "green",
                          marginTop: "16px",
                          fontSize: "14px",
                        }}
                      >
                        {successMessage}
                      </p>
                    )}

                    {errorMessage && (
                      <p
                        style={{
                          color: "red",
                          marginTop: "16px",
                          fontSize: "14px",
                        }}
                      >
                        {errorMessage}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <ReservationTabs />
        </section>

        <section className="kt-contact-info-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 mb-4 mb-lg-0 text-center text-md-start">
                <span className="kt-small-label">Sie brauchen einen privaten Raum?</span>
                <h3 className="kt-info-heading">
                  Einen Tisch reservieren? <span>Lass uns reden.</span>
                </h3>
              </div>

              <div className="col-lg-8 text-center text-md-start">
                <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 justify-content-center">
                  <div className="col mb-4 mb-md-0">
                    <div className="kt-info-box">
                      <span className="kt-info-title">Schreiben Sie uns</span>
                      <div className="kt-info-content">
                        <a href="mailto:info@priyascafe.de">
                          info@priyascafe.de
                        </a>
                        <br />
                        <a href="mailto:booking@priyascafe.de">
                          booking@priyascafe.de
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col mb-4 mb-md-0">
                    <div className="kt-info-box">
                      <span className="kt-info-title">Folgen Sie uns</span>
                      <div className="kt-info-content">
                        <div>
                          <a href="/">Facebook</a>
                        </div>
                        <div>
                          <a href="/">Instagram</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="kt-info-box">
                      <span className="kt-info-title">Rufen Sie uns an</span>
                      <div className="kt-info-content">
                        <a href="tel:+4920184329778">
                          +49 (0) 201 84329778
                        </a>
                        <br />
                        <span className="kt-address-line">
                          <FiMapPin className="kt-inline-icon" />
                          Helenenstraße 57, 45143 Essen
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
}

export default Kontakt;