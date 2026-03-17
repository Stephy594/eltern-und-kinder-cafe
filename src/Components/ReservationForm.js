import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephoneNumber: "",
    guests: 1,
    date: null,
    time: "",
    message: ""
  });

  const [availableTables, setAvailableTables] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  const formatDateToKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const fetchAvailableDates = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/reservation/available-dates`);

      if (!response.ok) {
        throw new Error("Failed to fetch available dates");
      }

      const data = await response.json();
      setAvailableDates(data);
    } catch (error) {
      console.error("Failed to load available dates:", error);
    }
  };

  const fetchAvailableTimes = async (selectedDate) => {
    try {
      const formattedDate = formatDateToKey(selectedDate);

       
      const response = await fetch(
        `${API_BASE_URL}/api/reservation/available-times?date=${formattedDate}`
      );
      
      if (!response.ok) {
        throw new Error("Failed to fetch available times");
      }

      const data = await response.json();
      setAvailableTimes(data);

      setFormData((prev) => ({
        ...prev,
        time: data.includes(prev.time) ? prev.time : ""
      }));
    } catch (error) {
      console.error("Failed to load available times:", error);
      setAvailableTimes([]);
    }
  };

  useEffect(() => {
    fetchAvailableDates();
  }, []);

  const isDateAvailable = (date) => {
    return availableDates.includes(formatDateToKey(date));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const buildStartDateTime = () => {
    if (!formData.date || !formData.time) return null;

    const yyyy = formData.date.getFullYear();
    const mm = String(formData.date.getMonth() + 1).padStart(2, "0");
    const dd = String(formData.date.getDate()).padStart(2, "0");

    return new Date(`${yyyy}-${mm}-${dd}T${formData.time}`);
  };

  const checkAvailability = async () => {
    setShowMessage(true);

    const startDate = buildStartDateTime();

    if (!startDate || isNaN(startDate.getTime())) {
      setResponseMessage("Bitte wählen Sie zuerst Datum und Uhrzeit.");
      return;
    }

    try {
      
      const response = await fetch(
        `${API_BASE_URL}/reservation/available?startTime=${encodeURIComponent(
          startDate.toISOString()
        )}`
      );

      const data = await response.json();

      if (response.ok) {
        setAvailableTables(data);
        setResponseMessage("");
      } else {
        setResponseMessage("Verfügbare Tische konnten nicht geladen werden.");
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("Verfügbare Tische konnten nicht geladen werden.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowMessage(true);

    const startDate = buildStartDateTime();

    if (!startDate || isNaN(startDate.getTime())) {
      setResponseMessage("Bitte wählen Sie ein gültiges Datum und eine gültige Uhrzeit.");
      return;
    }

    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

    const requestBody = {
      name: formData.name,
      email: formData.email,
      telephoneNumber: formData.telephoneNumber,
      guests: parseInt(formData.guests),
      startTime: startDate.toISOString(),
      endTime: endDate.toISOString(),
      message: formData.message
    };

    try {
       
      const response = await fetch(`${API_BASE_URL}/api/reservation/reserve`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(
          `Reservierung erfolgreich! Zugewiesener Tisch: ${data.tableName} (${data.tableId})`
        );

        setAvailableTables(null);

        setFormData({
          name: "",
          email: "",
          telephoneNumber: "",
          guests: 1,
          date: null,
          time: "",
          message: ""
        });

        setAvailableTimes([]);
        await fetchAvailableDates();
      } else {
        setResponseMessage(data.message || "Reservierung fehlgeschlagen.");
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("Beim Reservieren ist ein Fehler aufgetreten.");
    }
  };

  return (
    <section className="luxury-booking-section">
      <div className="luxury-booking-card">
        <div className="luxury-booking-topline"></div>

        <div className="luxury-booking-header">
          <span className="luxury-booking-tag">Reservierung</span>
          <h2>Tisch reservieren</h2>
          <p>
            Reservieren Sie Ihren Tisch für 2 Stunden in unserem Eltern-Kind Café.
            Nur verfügbare Termine werden im Kalender angezeigt.
          </p>
        </div>

        {showMessage && responseMessage && (
          <div className="luxury-booking-alert">{responseMessage}</div>
        )}

        {availableTables !== null && (
          <div className="luxury-booking-availability">
            Verfügbare Tische: <strong>{availableTables}</strong>
          </div>
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

            <div className="luxury-grid one">
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
            </div>
          </div>

          <div className="luxury-section-box">
            <h3 className="luxury-section-title">Reservierungsdetails</h3>

            <div className="luxury-grid three">
              <div className="luxury-field">
                <label>Datum</label>
                <div className="luxury-input-wrap luxury-picker-wrap">
                  <span className="luxury-input-icon">📅</span>
                  <DatePicker
                    selected={formData.date}
                    onChange={(date) => {
                      setFormData((prev) => ({
                        ...prev,
                        date,
                        time: ""
                      }));

                      if (date) {
                        fetchAvailableTimes(date);
                      } else {
                        setAvailableTimes([]);
                      }
                    }}
                    filterDate={isDateAvailable}
                    placeholderText="Datum auswählen"
                    dateFormat="dd.MM.yyyy"
                    className="luxury-datepicker"
                    minDate={new Date()}
                    required
                  />
                </div>
              </div>

              <div className="luxury-field">
                <label>Uhrzeit</label>

                {!formData.date ? (
                  <div className="luxury-input-wrap">
                    <span className="luxury-input-icon">⏰</span>
                    <input
                      type="text"
                      className="luxury-timepicker-input"
                      placeholder="Bitte zuerst ein Datum auswählen"
                      disabled
                    />
                  </div>
                ) : availableTimes.length === 0 ? (
                  <div className="luxury-input-wrap">
                    <span className="luxury-input-icon">⏰</span>
                    <input
                      type="text"
                      className="luxury-timepicker-input"
                      placeholder="Keine Uhrzeiten verfügbar"
                      disabled
                    />
                  </div>
                ) : (
                  <div className="luxury-select-wrap">
                    <span className="luxury-input-icon luxury-select-icon">⏰</span>
                    <Select
                      options={availableTimes.map((time) => ({
                        value: time,
                        label: time
                      }))}
                      value={
                        formData.time
                          ? { value: formData.time, label: formData.time }
                          : null
                      }
                      onChange={(selectedOption) =>
                        setFormData((prev) => ({
                          ...prev,
                          time: selectedOption ? selectedOption.value : ""
                        }))
                      }
                      placeholder="Uhrzeit auswählen"
                      isSearchable={false}
                      classNamePrefix="luxury-time-select"
                    />
                  </div>
                )}
              </div>

              <div className="luxury-field">
                <label>Anzahl der Besucher</label>
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

            <div className="luxury-booking-note">
              <strong>Hinweis:</strong> Die Reservierung gilt für 2 Stunden. Es
              werden nur verfügbare Termine angezeigt.
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
                    placeholder="Besondere Wünsche oder Hinweise"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="luxury-booking-actions">
            <button
              type="button"
              hidden
              className="luxury-btn luxury-btn-light"
              onClick={checkAvailability}
            >
              Verfügbarkeit prüfen
            </button>

            <button type="submit" className="luxury-btn luxury-btn-main">
              Tisch reservieren
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ReservationForm;