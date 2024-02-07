import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Navbar/Footer";

import KPOPZstationLogo from "../Assets/KPOPZstation.png";
import HomepageGuest from "../Assets/KPOPZstation/Homepage-Guest.png";
import HomepageAdmin from "../Assets/KPOPZstation/Homepage-Admin.png";
import Loginpage from "../Assets/KPOPZstation/Loginpage.png";
import Homepage from "../Assets/KPOPZstation/Homepage.png";
import ArtistDetail from "../Assets/KPOPZstation/ArtistDetail.png";
import ArtistDetailAdmin from "../Assets/KPOPZstation/ArtistDetail-admin.png";
import AlbumDetail from "../Assets/KPOPZstation/AlbumDetail.png";
import TransactionHistory from "../Assets/KPOPZstation/TransactionHistory.png";

export default function KPOPZstation() {
  return (
    <div>
      <Navbar />

      <div className="text-start mt-3 ms-3 me-5">
        <div>
          <img
            src={KPOPZstationLogo}
            alt="kpopzstation"
            className="w-100"
            style={{ height: "13rem", objectFit: "cover" }}
          ></img>
        </div>

        <div className="ms-4 me-4">
          <div className="mt-3">
            <div className="fs-3 fw-bold">KpopZstation</div>
            <p className="mt-1 fs-6">
              <p>
                KpopZtation is a K-pop album shop in Indonesia. To expand its
                business, KpopZtation wants to create a website for their shop.
                In that website, people can find information about the K-pop
                album and order it. This website enables the customers to know
                what is inside KpopZtation. As a web developer, I am asked to
                create a website using ASP.NET for this online shop. I also
                required to use Domain Driven Design method to develop the
                website.
              </p>
            </p>
          </div>

          <div className="mt-4">
            <div className="fs-3 fw-bold ">
              Technology used when developing apps
            </div>
            <ul className="mt-1">
              <li>Visual Studio 2019 and Github</li>
              <li>ASP.NET Web application Framewrok (C#)</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="mt-4">
            <div className="fs-3 fw-bold">UI/UX of the application</div>
            <p>
              In this project i will be more focused on the concept of the
              pattern software design. For the styling, i use Bootstrap so i can
              style the applicationn quickly. There are 3 roles in this
              application, namely Admin, User, and Guest. Each role has
              different access. Below are some screenshot from the apps.
            </p>

            <div className="d-flex flex-column justify-content-center text-start w-100">
              <div className="mb-3 border-bottom border-primary">
                <img
                  src={HomepageGuest}
                  alt="..."
                  style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                  className="border border-primary"
                ></img>
                <div className="fw-bold fs-4 mt-2">Homepage Guest</div>
                <p className="mt-1">
                  This is the homepage for guest user, User can only view
                  artist, view artist detail, view albums. If the user wishes to
                  do more, user have to sign in (login/register) into the
                  application on the top right corner.
                </p>
              </div>

              <div className="mb-3 border-bottom border-primary">
                <img
                  src={Loginpage}
                  alt="..."
                  style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                  className="border border-primary"
                ></img>
                <div className="fw-bold fs-4 mt-2">Login page</div>
                <p className="mt-1">
                  This is the login page. Here the user can enter user's
                  credential to sign in into the application. When the user
                  clicked login button, it will send the data into the
                  controller to be checked. If the data is valid, it will
                  redirect the user to the Homepage for logged in User.
                </p>
              </div>

              <div className="mb-3 border-bottom border-primary">
                <div className="d-flex overflow-x-scroll">
                  <img
                    src={Homepage}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                  <img
                    src={HomepageAdmin}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary"
                  ></img>
                </div>
                <div className="fw-bold fs-4 mt-2">
                  Homepage for logged in user
                </div>
                <p className="mt-1">
                  This page allows user to see all KpopZtation's artists. This
                  page allows user to redirect into Artists Detail Page if user
                  click the card. This page allows admin to insert, update and
                  delete the artist. In this page, there is an Insert Artist
                  button. If admin click Insert Artist button, then it will
                  redirect them to Insert Artist page. Each album in the lists
                  have `update` and `Delete` buttons: - If Admin click Delete
                  button, delete selected artist. - If Admin click Update
                  button, it will redirect them to Update Artist page and the
                  selected Artist ID will be passed using the URL's query string
                  parameter.
                </p>
              </div>

              <div className="mb-3 border-bottom border-primary">
                <div className="d-flex overflow-x-scroll">
                  <img
                    src={ArtistDetail}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary me-4"
                  ></img>
                  <img
                    src={ArtistDetailAdmin}
                    alt="..."
                    style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                    className="border border-primary"
                  ></img>
                </div>
                <div className="fw-bold fs-4 mt-2">Artist Detail Page</div>
                <p className="mt-1">
                  If user click the Artist card in homepage, redirect user to
                  this details page. This page displays the artist image, name,
                  and album details owned by this artist such as album image,
                  name, price and description. This page allows user to redirect
                  into Album Detail Page if user click the card. This page
                  allows admin to insert, update and delete the album. If admin
                  click Insert Album button, then it will redirect them to
                  Insert Album page. Each album in the lists have 'Update' and
                  'Delete' buttons: - If Admin click Delete button, delete
                  selected album. - If Admin click Update button, it will
                  redirect them to Update Album page and the selected Artist ID
                  will be passed using the URL's query string parameter.
                </p>
              </div>

              <div className="mb-3 border-bottom border-primary">
                <img
                  src={AlbumDetail}
                  alt="..."
                  style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                  className="border border-primary"
                ></img>
                <div className="fw-bold fs-4 mt-2">Album Detail Page</div>
                <p className="mt-1">
                  This page is accessible for all users. If user click the
                  Details button in homepage, redirect user to this details
                  page. This page displays all the album details such as album's
                  name, album's description, album's price, and album's stock.
                  There is also a “Add to Cart” button. Validate the button to
                  only appear if the user's login as Customer. Customer could
                  fill the quantity number before adding the item to cart.
                </p>
              </div>
              <div className="mb-3 border-bottom border-primary">
                <img
                  src={TransactionHistory}
                  alt="..."
                  style={{ width: "70vw", height: "35vw", objectFit: "fill" }}
                  className="border border-primary"
                ></img>
                <div className="fw-bold fs-4 mt-2">
                  Transaction History Page
                </div>
                <p className="mt-1">
                  This page is only accessible for customers to show customer's
                  transaction history. The information of transaction that must
                  be shown are transaction id, transaction date, customer's
                  name, courier, album's picture, album's name, album's
                  quantity, and album's price.
                </p>
              </div>
            </div>

            <div>
              <div className="fs-3 fw-bold ">Additional information</div>
              <div>
                <p>
                  My team made this application to fulfill the Pattern Software
                  Design LAB course project. Here i focused on applying the
                  concept of Pattern Software Design. You can see my source code
                  for KPOPZstation at:
                </p>
                <a href="https://github.com/KetsunoAna117/KpopZtation">
                  Github
                </a>
              </div>

              <div className="mt-4">
                <div className="fs-4 fw-semibold">
                  Contributor for this application:
                </div>
                <ul>
                  <li>
                    <span className="fst-italic">
                      Hans Arthur Cupiterson -{" "}
                    </span>
                    Responsible for designing the front end and backend for the
                    application
                  </li>
                  <li>
                    <span className="fst-italic">Steven -</span> Help do the
                    testing for the application
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
