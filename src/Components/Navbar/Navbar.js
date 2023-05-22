import { Link } from "react-router-dom";

export default function Navbar({ children }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item d-flex align-items-center ms-4 ">
                <i class="bi bi-arrow-left text-light"></i>
                <Link
                  to="/"
                  className="nav-link active text-white fw-bold"
                  aria-current="page"
                >
                  Back to Home
                </Link>
              </li>

              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle ms-4"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    See Other Projects
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/hyperspace" className="dropdown-item">
                        HyperSpace
                      </Link>
                    </li>
                    <li>
                      <Link to="/kpopzstation" className="dropdown-item">
                        KPOPZstation
                      </Link>
                    </li>
                    <li>
                      <Link to="/vo-Greens" className="dropdown-item">
                        VOGreeens
                      </Link>
                    </li>
                    <li>
                      <Link to="/computer-network" className="dropdown-item">
                        Computer Network
                      </Link>
                    </li>
                    <li>
                      <Link to="/figma-design" className="dropdown-item">
                        Figma Design
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
