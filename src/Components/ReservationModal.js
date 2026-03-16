import { useEffect } from "react";

function ReservationModal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="reservation-modal-overlay" onClick={onClose}>
      <div className="reservation-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="reservation-modal-close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="reservation-modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ReservationModal;