import { useState } from "react";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
function EventReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephoneNumber: "",
    eventType: "",
    guests: 1,
    eventDate: "",
    startTime: "",
    message: ""
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");

    try {
      setLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/Reservation/event`, {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          telephoneNumber: formData.telephoneNumber,
          eventType: formData.eventType,
          guests: parseInt(formData.guests),
          eventDate: formData.eventDate,
          startTime: formData.startTime,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Event-Anfrage erfolgreich gesendet.");
        setFormData({
          name: "",
          email: "",
          telephoneNumber: "",
          eventType: "",
          guests: 1,
          eventDate: "",
          startTime: "",
          message: ""
        });
      } else {
        setResponseMessage(data.message || "Event-Anfrage fehlgeschlagen.");
      }
    } catch (error) {
      setResponseMessage("Beim Senden der Event-Anfrage ist ein Fehler aufgetreten.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="luxury-booking-section">
      <div className="luxury-booking-card">
        <div className="luxury-booking-topline"></div>

        <div className="luxury-booking-header">
          <span className="luxury-booking-tag">Event</span>
          <h2>Event reservieren</h2>
          <p>
            Senden Sie uns Ihre Anfrage für Geburtstag, private Feier oder
            besondere Veranstaltung.
          </p>
        </div>

        {responseMessage && (
          <div className="luxury-booking-alert">{responseMessage}</div>
        )}

        <form className="luxury-booking-form" onSubmit={handleSubmit}>
          <div className="luxury-section-box">
            <h3 className="luxury-section-title">Persönliche Daten</h3>

            <div className="luxury-grid two">
              <div className="luxury-field">
                <label>Name</label>
                <div className="luxury-input-wrap">
                  <span className="luxury-input-icon">👤</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr Name"
                    required
                  />
                </div>
              </div>

              <div className="luxury-field">
                <label>E-Mail</label>
                <div className="luxury-input-wrap">
                  <span className="luxury-input-icon">✉️</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ihre E-Mail"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="luxury-grid two">
              <div className="luxury-field">
                <label>Telefonnummer</label>
                <div className="luxury-input-wrap">
                  <span className="luxury-input-icon">📞</span>
                  <input
                    type="text"
                    name="telephoneNumber"
                    value={formData.telephoneNumber}
                    onChange={handleChange}
                    placeholder="Telefonnummer"
                    required
                  />
                </div>
              </div>

              <div className="luxury-field">
                <label>Eventtyp</label>
                <div className="luxury-input-wrap">
                  <span className="luxury-input-icon">🎉</span>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Bitte wählen</option>
                    <option value="Geburtstag">Geburtstag</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Familienfeier">Familienfeier</option>
                    <option value="Private Veranstaltung">Private Veranstaltung</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="luxury-section-box">
            <h3 className="luxury-section-title">Eventdetails</h3>

            <div className="luxury-grid three">
              <div className="luxury-field">
                <label>Datum</label>
                <div>                  
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Uhrzeit</label>
                <div>
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="luxury-field">
                <label>Anzahl der Gäste</label>
                <div className="luxury-input-wrap">
                  <span className="luxury-input-icon">👥</span>
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="luxury-section-box">
            <h3 className="luxury-section-title">Zusätzliche Nachricht</h3>

            <div className="luxury-grid one">
              <div className="luxury-field">
                <label>Nachricht</label>
                <div className="luxury-textarea-wrap">
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie Ihr Event"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="luxury-booking-actions">
            <button type="submit" className="luxury-btn luxury-btn-main" disabled={loading}>
              {loading ? "Wird gesendet..." : "Event anfragen"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EventReservationForm;