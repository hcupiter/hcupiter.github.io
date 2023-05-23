import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Navbar/Footer";

import VOGReensLogo from "../Assets/VOGreensLogo.png";

import Homepage1 from "../Assets/VOGreens/HomePage1.png";
import Homepage2 from "../Assets/VOGreens/HomePage2.png";
import Homepage3 from "../Assets/VOGreens/HomePage3.png";
import Aboutus1 from "../Assets/VOGreens/Aboutus1.png";
import Aboutus2 from "../Assets/VOGreens/Aboutus2.png";
import Menu1 from "../Assets/VOGreens/Menu1.png";
import Menu2 from "../Assets/VOGreens/Menu2.png";
import Menu3 from "../Assets/VOGreens/Menu3.png";
import Menu4 from "../Assets/VOGreens/Menu4.png";
import Findus from "../Assets/VOGreens/Findus.png";
import Contactus1 from "../Assets/VOGreens/Contactus1.png";
import Contactus2 from "../Assets/VOGreens/Contactus2.png";

export default function VOGreens() {
  return (
    <div>
      <Navbar />

      <div className="text-start mt-3 ms-3 me-5">
        <img
          src={VOGReensLogo}
          alt="kpopzstation"
          className="w-100"
          style={{ height: "13rem", objectFit: "cover" }}
        ></img>

        <div className="ms-4 me-4">
          <div className="mt-3">
            <div className="fs-3 fw-bold">VOGreens</div>
            <p className="mt-1 fs-6">
              <p>
                VOrgreens is an Indonesia's plant-based eatery chain serving
                delicious healthy, ethical, and sustainable food. VOrgreens
                provides many variant cuisines that are undoubtedly healthy and
                delicious. Because VOrgreens has been around for a long time,
                VOrgreens plans to change the appearance of their website to
                provide a new atmosphere for customers. First, VOrgreens needs
                to create a website prototype and company website that
                represents the VOrgreens image. With this website, VOrgreens
                hopes to improve service to their customers. VOrgreens entrusts
                you as a web designer to design their website prototype and
                create a company website.
              </p>
            </p>
          </div>

          <div className="mt-4">
            <div className="fs-3 fw-bold ">
              Technology used when developing apps
            </div>
            <ul className="mt-1">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>

          <div className="mt-4">
            <div className="fs-3 fw-bold">UI/UX of the application</div>
            <div>
              <div className="fw-semibold">
                The requirements from VOrgreens are described below:
              </div>
              <ol>
                <li>
                  VOrgreens wants you to design the website prototype of all 5
                  pages before making the HTML files. The website prototype will
                  be created using Figma. Ensure the website prototype that you
                  created is the exact same with the website that you will make
                  later. Each page will contain header, navigation, content, and
                  footer as its structure. Consider the color, layout, and
                  consistency when designing the prototype.
                </li>
                <li>
                  VOrgreens wants you to build the website attractive, appealing
                  and fully functional, and make sure the website is responsive.
                  The website should be accessible using a mobile phone in a
                  perfect way. To achieve that, use 5 kinds of CSS property and
                  JavaScript. Use Meta viewport tag and media screen rule that
                  will be applied if the screen is below 768px screen width.
                </li>
              </ol>
            </div>

            <div className="mb-4">
              <div className="fw-semibold">
                Please do note that I do this project in semester 2, here i
                tried to make a website using HTML, CSS, Javascript. I have
                tried also to make the website a little bit responsive.
              </div>
              Below is some screenshot from the pages:
            </div>

            <div className="d-flex flex-column justify-content-center text-start w-100">
              <div className="mb-3 border-bottom border-primary">
                <div className="d-flex overflow-x-scroll">
                  <img
                    src={Homepage1}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                  <img
                    src={Homepage2}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                  <img
                    src={Homepage3}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                </div>
                <div className="fw-bold fs-4 mt-2">Homepage</div>
                <p className="mt-1">
                  This page shows the popular menus for the customer. This page
                  also has a promotion banner that displays one of the appealing
                  menus in VOrgreens.
                </p>
              </div>

              <div className="mb-3 border-bottom border-primary">
                <div className="d-flex overflow-x-scroll">
                  <img
                    src={Aboutus1}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                  <img
                    src={Aboutus2}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                </div>
                <div className="fw-bold fs-4 mt-2">About us</div>
                <p className="mt-1">
                  This page provides information about the company. Make sure
                  the information provided is relevant, such as the history,
                  vision, and mission of VOrgreens.
                </p>
              </div>

              <div className="mb-3 border-bottom border-primary">
                <div className="d-flex overflow-x-scroll">
                  <img
                    src={Menu1}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                  <img
                    src={Menu2}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                  <img
                    src={Menu3}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                  <img
                    src={Menu4}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                </div>
                <div className="fw-bold fs-4 mt-2">Menu Page</div>
                <p className="mt-1">
                  This page shows list of menus. VOrgreens wants the menus must
                  be categorized according to their cuisine. Each menu has its
                  own information, such as the menu picture, name, and short
                  description.
                </p>
              </div>

              <div className="mb-3 border-bottom border-primary">
                <div className="d-flex">
                  <img
                    src={Findus}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                </div>
                <div className="fw-bold fs-4 mt-2">Find us</div>
                <p className="mt-1">
                  This page gives information about VOgreens' store locations
                  that users could visit offline, including business hours and
                  full address.
                </p>
              </div>

              <div className="mb-3 border-bottom border-primary">
                <div className="d-flex overflow-x-scroll">
                  <img
                    src={Contactus1}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                  <img
                    src={Contactus2}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                </div>
                <div className="fw-bold fs-4 mt-2">Find us</div>
                <p className="mt-1">
                  This page provides a contact form for the users. In order to
                  contact, user needs to submit some personal information, such
                  as name, email, gender, message, and user must subscribe us.
                  You are asked to create 5 kinds of form components and 5 kinds
                  of validation. For validation, you must create it using
                  JavaScript and don't use regular expression.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="fs-3 fw-bold ">Additional information</div>
            <div>
              <p>
                Me and my team made this application to fulfill the Human and
                Computer Interaction course project. Here i am still learning
                about HTML, CSS, and Javascript. You can see my source code for
                VOGreens at:
              </p>
              <a href="https://github.com/KetsunoAna117/VOGreens">Github</a>
            </div>
            <div className="mt-4">
              <div className="fs-4 fw-semibold">
                Contributor for this application:
              </div>
              <ul>
                <li>
                  <span className="fst-italic">Hans Arthur Cupiterson - </span>
                  Responsible for designing the application
                </li>
                <li>
                  <span className="fst-italic">Aviandara -</span> Help do the
                  testing for the application
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
