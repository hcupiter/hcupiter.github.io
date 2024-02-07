import Footer from "../Components/Navbar/Footer";
import Navbar from "../Components/Navbar/Navbar";

import FigmaLogo from "../Assets/figma-logo-1.png";
import Hyperspace1 from "../Assets/Figma/HyperspaceDesign1.png";
import Hyperspace2 from "../Assets/Figma/HyperspaceDesign2.png";
import TravelWebsite1 from "../Assets/Figma/TravelWebsite1.png";
import TravelWebsite2 from "../Assets/Figma/TravelWebsite2.png";
import OnlineUniversityWebsite1 from "../Assets/Figma/OnlineUniversityWebsite1.png";
import OnlineUniversityWebsite2 from "../Assets/Figma/OnlineUniversityWebsite2.png";

export default function FigmaDesign() {
  return (
    <div>
      <Navbar />
      <div className="text-start mt-3 ms-3 me-5">
        <div>
          <img
            src={FigmaLogo}
            alt="kpopzstation"
            className="w-100"
            style={{ height: "13rem", objectFit: "cover" }}
          ></img>
        </div>

        <div className="ms-4 me-4">
          <div className="mt-3">
            <div className="fs-3 fw-bold">Figma Design</div>
            <p className="mt-1 fs-6">
              <p>
                On this page, you'll find all the different designs I've created
                for user interfaces. It's like a collection of pictures showing
                the various styles and looks I've made throughout my career. You
                can explore and look at them to get ideas or just appreciate the
                different designs I've come up with. It's a way to see how my
                skills in design have grown and changed over time.
              </p>
            </p>
          </div>

          <div className="d-flex flex-column justify-content-center text-start w-100">
            <div className="mb-3 border-bottom border-primary">
              <div className="d-flex overflow-x-scroll">
                <img
                  src={Hyperspace1}
                  alt="..."
                  style={{
                    width: "70vw",
                    height: "35vw",
                    objectFit: "contain",
                  }}
                  className="border border-primary me-4"
                ></img>
                <img
                  src={Hyperspace2}
                  alt="..."
                  style={{
                    width: "70vw",
                    height: "35vw",
                    objectFit: "contain",
                  }}
                  className="border border-primary"
                ></img>
              </div>
              <div className="fw-bold fs-4 mt-2">
                Hypersace UI/UX Design Concept
              </div>
              <div className="fw-light fs-6">Created in 2023</div>
              <p className="mt-1">
                This is my attempt to design the UI/UX for the Hyperspace
                application, an exciting online forum similar to Discord. In
                this project, I aimed to create an engaging and user-friendly
                interface that fosters seamless communication and content
                sharing within a vibrant virtual community.
              </p>
              <p className="mt-1">
                Imagine a visually captivating space where users can
                effortlessly navigate through different categories of content,
                just like exploring various rooms in a cosmic environment. Each
                category offers a unique atmosphere and collection of
                discussions, enabling users to dive into their preferred topics
                with ease. Whether it's technology, entertainment, or any other
                fascinating subject, Hyperspace provides a visually immersive
                experience that draws users into an expansive universe of
                diverse conversations.
              </p>
              <p className="mt-1">
                One of the key elements of the UI design is the user profile
                page. It serves as a personal hub for individuals to showcase
                their presence in the Hyperspace community. Within this page,
                users can access essential information such as their date of
                joining, total views accumulated from their post, and even the
                revenue generated from those views. Additionally, the profile
                page features a subscription button, allowing users to support
                the community and remove ads in the application.
              </p>
              <div className="mb-3">
                <div className="fs-5 fw-semibold">
                  You can see more details about this design concept at:
                </div>
                <div>
                  <a href="https://www.figma.com/file/YM9Dz9rIt7EoYfAfYXu0C1/HyperSpace-Design?type=design&t=qYqDih00mQ3XZDdb-1">
                    Hyperspace Design Concept
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-3 border-bottom border-primary">
              <div className="d-flex overflow-x-scroll">
                <img
                  src={TravelWebsite1}
                  alt="..."
                  style={{
                    width: "70vw",
                    height: "35vw",
                    objectFit: "contain",
                  }}
                  className="border border-primary me-4"
                ></img>
                <img
                  src={TravelWebsite2}
                  alt="..."
                  style={{
                    width: "70vw",
                    height: "35vw",
                    objectFit: "contain",
                  }}
                  className="border border-primary"
                ></img>
              </div>
              <div className="fw-bold fs-4 mt-2">
                Travel Website UI/UX Design Concept
              </div>
              <div className="fw-light fs-6">Created in 2022</div>
              <p className="mt-1">
                This is my attempt to design the UI/UX for an immersive travel
                website, aimed at providing users with a seamless and
                captivating experience as they explore exciting destinations
                around the world.
              </p>
              <p className="mt-1">
                The focal point of my design efforts lies in crafting a visually
                stunning and informative landing page for one of the most
                awe-inspiring destinations: Borobudur. This landing page serves
                as a gateway to the rich history and cultural significance of
                the Borobudur temple, offering users a comprehensive glimpse
                into its fascinating heritage. Through carefully curated
                visuals, captivating descriptions, and engaging multimedia
                elements, visitors can delve into the temple's intriguing past,
                architectural marvels, and the spiritual essence it embodies.
                It's a virtual window into the wonders that await those who
                venture to Borobudur.
              </p>
              <p className="mt-1">
                In addition to the captivating landing page, I've designed a
                dedicated section where users can explore an extensive
                collection of hotels situated near the Borobudur temple. This
                page provides a convenient and comprehensive overview of
                accommodation options, ensuring that travelers have all the
                necessary information to make informed decisions. Users can
                browse through an array of hotels, accessing details such as
                pricing, amenities, and user reviews, allowing them to choose
                the perfect place to stay during their visit to Borobudur.
              </p>
              <div className="mb-3">
                <div className="fs-5 fw-semibold">
                  You can see more details about this design concept at:
                </div>
                <div>
                  <a href="https://www.figma.com/file/ItBZQxI80rtsJfWMN6RtWh/UAS-HCI?type=design&t=52lxbLGoX2fj2dsl-1">
                    Travel website design concept
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-3 border-bottom border-primary">
              <div className="d-flex overflow-x-scroll">
                <img
                  src={OnlineUniversityWebsite1}
                  alt="..."
                  style={{
                    width: "70vw",
                    height: "35vw",
                    objectFit: "contain",
                  }}
                  className="border border-primary me-4"
                ></img>
                <img
                  src={OnlineUniversityWebsite2}
                  alt="..."
                  style={{
                    width: "70vw",
                    height: "35vw",
                    objectFit: "contain",
                  }}
                  className="border border-primary"
                ></img>
              </div>
              <div className="fw-bold fs-4 mt-2">
                Online University UI/UX Design Concept
              </div>
              <div className="fw-light fs-6">Created in 2022</div>
              <p className="mt-1">
                "This is my attempt to design the UI/UX for an immersive Online
                University website, dedicated to providing a seamless and
                enriching educational experience for students worldwide.
              </p>
              <p className="mt-1">
                At the heart of my design efforts is a captivating landing page
                that serves as the virtual gateway to the Online University.
                This page showcases the university's motto, creating an
                immediate connection with visitors by highlighting its core
                values and mission. Additionally, it offers essential
                information such as the university's location, allowing
                prospective students to get a sense of its global reach. The
                landing page also showcases the university's achievements,
                providing a glimpse into its academic excellence and recognition
                within the education community.
              </p>
              <p className="mt-1">
                In addition to the landing page section, I've created an
                engaging About Us page. This page provides users with a
                comprehensive understanding of the Online University's history,
                showcasing its growth and milestones over time. Furthermore, it
                explains the distinct advantages and benefits of choosing the
                Online University as a preferred educational institution. Users
                can explore the university's commitment to innovative online
                learning methodologies, flexible study options, and its
                dedication to fostering a supportive and inclusive learning
                community. It's a page that aims to build trust and showcase the
                university's credibility as a leading institution in the realm
                of online education.
              </p>
              <div className="mb-3">
                <div className="fs-5 fw-semibold">
                  You can see more details about this design concept at:
                </div>
                <div>
                  <a href="https://www.figma.com/file/StZIwPZROjraHe9YIuDb84/Assignment-1?type=design&t=1IxRlt9L4E0c2AMM-1">
                    Online University Website concept
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
