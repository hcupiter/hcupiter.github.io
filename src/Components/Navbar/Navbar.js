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
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active text-white fw-bold"
                  aria-current="page"
                >
                  Back to Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
}
