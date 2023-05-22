// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Database from "../Assets/DBMS3.png";
import ComputerNetwork from "../Assets/ComputerNetwork.jpg";
import Scenery from "../Assets/Scenery.jpg";
import LogoHyperspace from "../Assets/LogoHyperspace.png";
import KpopZstation from "../Assets/KPOPZstation.png";
import FigmaLogo from "../Assets/figma-logo-1.png";

import { Link } from "react-router-dom";
import Footer from "../Components/Navbar/Footer";

export default function Homepage() {
  // const imageStyle = {
  //   width: "25vw",
  //   height: "25vw",
  // };

  return (
    <div className="">
      <div>
        <img
          src={Scenery}
          className="img-fluid"
          alt="..."
          style={{ height: "18rem", objectFit: "cover", width: "100%" }}
        ></img>
      </div>

      <div className="d-flex justify-content-end align-items-center mt-5">
        <div className="me-5 d-flex flex-column align-items-end">
          <div className="fs-3">Hello My name is</div>
          <strong className="fs-1">Hans Arthur Cupiterson</strong>
          <div className="fs-5">I am interested in</div>
          <div className="fs-5">Software Engineering</div>
        </div>
      </div>

      <div className="ms-5 me-5">
        <div className="mt-5 fs-3 mb-4 fw-medium">My Projects</div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src={LogoHyperspace}
                className="card-img-top"
                alt="..."
                style={{ height: "15rem", objectFit: "cover" }}
              ></img>
              <div className="card-body">
                <h5 className="card-title">Hyperspace</h5>
                <p className="card-text">
                  In this project, I collaborated with my friends to create a
                  web application called Hyperspace using react js.
                </p>
                <Link to="/hyperspace" className="btn btn-outline-primary">
                  View More
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">24 May 2023</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src={KpopZstation}
                className="card-img-top"
                alt="..."
                style={{ height: "15rem", objectFit: "cover" }}
              ></img>
              <div className="card-body">
                <h5 className="card-title">KPOPZstation</h5>
                <p className="card-text">
                  In this project i make an application named KpopZtation. I use
                  ASP.NET Web Application Framework while applying the concept
                  of Pattern Software Design
                </p>
                <Link to="/kpopzstation" className="btn btn-outline-primary">
                  View More
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">21 May 2023</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src={Database}
                className="card-img-top"
                alt="..."
                style={{ height: "15rem", objectFit: "cover" }}
              ></img>
              <div className="card-body">
                <h5 className="card-title">
                  Database Analysis and Design in Workshops Application
                </h5>
                <p className="card-text">
                  Creation of a database schema for the workshop application. In
                  this project, my group and I worked together to create a
                  database and normalize the database so that the data produced
                  was not redundant.
                </p>
                <Link to="/vo-Greens" className="btn btn-outline-primary">
                  View More
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">12 January 2023</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src={ComputerNetwork}
                className="card-img-top"
                alt="..."
                style={{ height: "15rem", objectFit: "cover" }}
              ></img>
              <div className="card-body">
                <h5 className="card-title">Computer Network project</h5>
                <p className="card-text">
                  In this project, my group of friends and I worked together to
                  analyze and design the internet routing system in the Binus
                  University Alam Sutera building.
                </p>
                <Link
                  to="/computer-network"
                  className="btn btn-outline-primary"
                >
                  View More
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">18 January 2023</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src={FigmaLogo}
                className="card-img-top"
                alt="..."
                style={{ height: "15rem", objectFit: "cover" }}
              ></img>
              <div className="card-body">
                <h5 className="card-title">Figma Design</h5>
                <p className="card-text">
                  Here you can see all the user interface designs I've created
                  in Figma.
                </p>
                <Link to="/figma-design" className="btn btn-outline-primary">
                  View More
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">2021-2023 design</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
