import { useState } from "react";
import ReservationForm from "./ReservationForm";
import EventReservationForm from "./EventReservationForm";
import ReservationModal from "./ReservationModal";

function ReservationTabs() {
 // const [activeTab, setActiveTab] = useState(null);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  const openReservationModal = () => {
    setShowReservationModal(true);
  };

  const closeReservationModal = () => {
    setShowReservationModal(false);
  };

  const openEventModal = () => {
    setShowEventModal(true);
  };

  const closeEventModal = () => {
    setShowEventModal(false);
  };

  return (
    <section className="tabs-section">
      <div className="tabs-menu">
        <button
          type="button"
          className="tab-btn"
          onClick={openReservationModal}
        >
          Tischreservierung
        </button>

        <button
          type="button"
          className="tab-btn"
          onClick={openEventModal}
        >
          Event-Reservierung
        </button>

        {/* <button
          type="button"
          className={activeTab === "news" ? "tab-btn active-tab" : "tab-btn"}
          onClick={() => setActiveTab("news")}
        >
          Nachricht
        </button> */}
      </div>

      <ReservationModal
        isOpen={showReservationModal}
        onClose={closeReservationModal}
      >
        <ReservationForm />
      </ReservationModal>

      <ReservationModal
        isOpen={showEventModal}
        onClose={closeEventModal}
      >
        <EventReservationForm />
      </ReservationModal>
    </section>
  );
}

export default ReservationTabs;