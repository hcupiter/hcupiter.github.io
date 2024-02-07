import { IconButton } from "../components/IconButton";
import "./ContactMeView.css";

const ContactMeView = () => {
  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/hans-arthur-cupiterson/",
      "_blank"
    );
  };

  return (
    <div id="contact_me_view_container">
      <div id="contact_me_left_container">
        <div className="contact_me_title">Contact Me at:</div>
        <div className="contact_me_text">(ID) +62-878-3135-3001</div>
        <div className="contact_me_text">hnsarthh@gmail.com</div>
      </div>
      <div id="contact_me_right_container">
        <div className="contact_me_title">Linkedin</div>
        <IconButton
          onClick={handleLinkedinClick}
          text={"Connect with me"}
          className={"icon_button_secondary"}
        />
      </div>
    </div>
  );
};

export default ContactMeView;
