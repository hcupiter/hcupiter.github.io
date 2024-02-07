import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Navbar/Footer";

import HyperspaceLogo from "../Assets/LogoHyperspace.png";
import Homepage from "../Assets/Hyperspace/Homepage.png";
import HomepageGuest from "../Assets/Hyperspace/Homepage-guest.png";
import Loginpage from "../Assets/Hyperspace/Loginpage.png";
import ProfilePage from "../Assets/Hyperspace/Profilepage.png";
import Spacepage from "../Assets/Hyperspace/Spacepage.png";
import ThreadUserInterface from "../Assets/Hyperspace/ThreadUserInterface.png";

export default function Hyperspace() {
  return (
    <div className="">
      <Navbar />
      <div className="text-start mt-3 ms-3 me-5">
        <div className="">
          <img
            src={HyperspaceLogo}
            alt="hyperspace"
            className="w-100"
            style={{ height: "13rem", objectFit: "cover" }}
          ></img>
        </div>

        <div className="ms-4 me-4">
          <div className="mt-3">
            <div className="fs-3 fw-bold">Hyperspace</div>
            <p className="mt-1 fs-6">
              Hyperspace is a Web Based online forum, designed to to provide
              solutions to existing online forum problems. Hyperspace app
              contains features including a category navigator to assist users
              in finding the collection of information they want to view, an
              option to access content without logging in, as well as a feature
              to provide users the chance to make money from the app.
            </p>
          </div>

          <div className="mt-4">
            <div className="fs-3 fw-bold ">
              Technology used when developing apps
            </div>
            <ul className="mt-1">
              <li>Visual Studio Code and Github</li>
              <li>ReactJS</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="mt-4">
            <div className="fs-3 fw-bold">UI/UX of the application</div>
            <p>
              Hyperspace provides a seamless and intuitive user experience.
              Users can easily create a thread (post), create a space
              (community) and search for content easily. Below are some
              screenshot from the apps.
            </p>

            <div className="d-flex flex-column justify-content-center text-start w-100">
              <div className="mb-3 ">
                <img
                  src={Loginpage}
                  alt="..."
                  style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                ></img>
                <div className="fw-bold fs-4 mt-2">Login Page</div>
                <p className="mt-1">
                  Here the user can enter user credential to login into the
                  Hyperspace
                </p>
              </div>

              <div className="mb-3">
                <img
                  src={Homepage}
                  alt="..."
                  style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                ></img>
                <div className="fw-bold fs-4 mt-2">Home Page</div>
                <p className="mt-1">
                  This is the homepage, if the user has logged in, user's
                  profile picture will be shown at the top left corner. User can
                  also search for a thread here using the search feature at the
                  navbar. In addition, all the spaces that user has joined also
                  shown on the left side. If the user click one of the space, it
                  will automaticaly redirect into the space that user clicked.
                  User can also click discover more so that the user can search
                  for another space to explore
                </p>
              </div>

              <div className="mb-3">
                <img
                  src={HomepageGuest}
                  alt="..."
                  style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                ></img>
                <div className="fw-bold fs-4 mt-2">Guest Home Page</div>
                <p className="mt-1">
                  This is the homepage for guest, here user only can view all
                  the thread. If the user wish to interact with the thread
                  (like, dislike or comment) the user have to login into
                  Hyperspace. Furthermore, the left side now show all the spaces
                  in the Hyperspace instead of joined space
                </p>
              </div>

              <div className="mb-3">
                <img
                  src={ProfilePage}
                  alt="..."
                  style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                ></img>
                <div className="fw-bold fs-4 mt-2">Profile Page</div>
                <p className="mt-1">
                  This is the user's Profile page, only logged in user can
                  access this page. Here user can see all the thread that user
                  has created, user can also see when the user joined
                  Hyperspace, user subscription status, total view of their
                  thread, and total income gained from the view. User can also
                  purchase a subscription here.
                </p>
              </div>

              <div className="mb-3">
                <img
                  src={Spacepage}
                  alt="..."
                  style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                ></img>
                <div className="fw-bold fs-4 mt-2">Space Page</div>
                <p className="mt-1">
                  This is an example of space page, here user can choose to join
                  or leave the space (community), user can also change channel
                  to personalise the content that user want to see. User can
                  also create a thread (post) here. if the user is the space
                  owner, user can create a new channel here.
                </p>
              </div>

              <div className="mb-3">
                <img
                  src={ThreadUserInterface}
                  alt="..."
                  style={{
                    width: "70vw",
                    height: "35vw",
                    objectFit: "contain",
                  }}
                ></img>
                <div className="fw-bold fs-4 mt-2">Thread</div>
                <p className="mt-1">
                  This is an example of a thread. User that have logged in can
                  like, dislike, or comment at the thread. user can also see
                  when the thread have been posted and how many view the thread
                  have.
                </p>
              </div>
            </div>

            <div>
              <div className="fs-3 fw-bold ">Additional information</div>
              <div>
                <p>
                  My team made this application to fulfill the Research
                  methodolgy in Computer Science course project and we also made
                  a journal about this application. You can view this journal
                  at:
                </p>
                <a href="https://binusianorg-my.sharepoint.com/personal/hans_cupiterson_binus_ac_id/_layouts/15/guestaccess.aspx?share=EaucP9PIisFHjRo-iOUYOwoBN_vvJRGsZpNinQw6G4Kx7Q&e=sArRRe">
                  Hyperspace Journal
                </a>
              </div>

              <div className="mt-4">
                <div className="fs-4 fw-semibold">
                  Contributor for this application:
                </div>
                <ul>
                  <li>
                    <span className="fst-italic">Hans Arthur Cupiterson -</span>{" "}
                    (Responsible for journal making and responsible for
                    designing the front-end of the application){" "}
                  </li>
                  <li>
                    <span className="fst-italic">Norbert Oliver -</span>{" "}
                    (Responsible for making the backend for the hyperspace (API
                    and mongodb)){" "}
                  </li>
                  <li>
                    <span className="fst-italic">Gavriel Reynard -</span> Help
                    developed the app
                  </li>
                  <li>
                    <span className="fst-italic">Steven -</span> Help developed
                    the app
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <div className="fs-4 fw-semibold">Source code</div>
                <p>You can see our source code at:</p>
                <a href="https://github.com/pewpewnor/HyperSpace">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
