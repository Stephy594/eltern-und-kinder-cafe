import logo from "../Assets/logo.png";
//import { FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg header-transparent bg-transparent header-reverse"
        data-header-hover="light"
      >
        <div
          className="container-fluid"
          style={{
            backgroundColor: "lightgray",
          }}
        >
          <div className="col-auto col-lg-2 me-lg-0 me-auto">
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                alt="Priya's Eltern Kind Café"
                style={{
                  height: "72px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))",
                }}
              />
            </Link>
          </div>

          <div className="col-auto menu-order position-static">
            <button
              className="navbar-toggler float-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav alt-font ls-1px">
                <li className="nav-item">
                  <Link to="/" className="nav-link" style={{ color: "black" }}>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link"
                    style={{ color: "black" }}
                  >
                    Über uns
                  </Link>
                </li>
                <li className="nav-item">
                <Link to="/story" className="nav-link" style={{ color: "black" }}>
                    Story
                </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/kontakt"
                    className="nav-link"
                    style={{ color: "black" }}
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-auto col-lg-2 text-end d-none d-sm-flex">
            <div className="header-icon">
              <div className="header-button">
                {/* <Link
                  to="/kontakt"
                  className="btn border-1 btn-transparent-white-light border-color-transparent-white-light btn-small left-icon btn-switch-text btn-rounded"
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <FiCalendar size={18} />
                    <span
                      className="btn-double-text"
                      data-text="Tisch reservieren"
                    >
                      Tisch reservieren
                    </span>
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;