import hans_linkedin from "../assets/hans_linkedin.jpg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="navbar">
      <div id="navbar_profile">
        <div id="profile_picture_container">
          <img
            id="profile_picture"
            src={hans_linkedin}
            alt="hans_linkedin"
          ></img>
        </div>
        <div id="profile_name_status_container">
          <div id="profile_name">Hans Arthur Cupiterson</div>
          <div id="profile_status_container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#40FF6A" />
            </svg>
            <div id="profile_status">Available to recuit</div>
          </div>
        </div>
      </div>
      <div id="navbar_navigation_controls">
        <a href="#experiences_container">Experiences</a>
        <a href="#skillview_container">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </div>
    </div>
  );
}
