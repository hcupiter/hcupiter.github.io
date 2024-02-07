import hans_mainpage from "../assets/hans_mainpage.png";
import { IconButton } from "../components/IconButton";
import "./MainBanner.css";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function MainBanner() {
  const jobTitles = useMemo(
    () => [
      "Mobile Developer",
      2000,
      "Web Developer",
      2000,
      "Software Engineer",
      2000,
      "Front-End Developer",
      2000,
    ],
    []
  );

  const [isScrolling, setIsScrolling] = useState(false);

  const handleClick = () => {
    const targetElement = document.getElementById("contact_me_view_container");
    if (targetElement) {
      setIsScrolling(true);
      targetElement.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const handleDownloadCvClick = () => {
    window.open(
      "https://drive.google.com/file/d/10lO5GI3MBNG4c3SVspQbC-Q8xEEw-a4h/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <motion.div
      id="main_banner"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "linear", duration: 1 }}
      delay={1}
    >
      <motion.div
        id="hans_img_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 1 }}
        delay={2}
      >
        <img src={hans_mainpage} alt="hans_mainpage"></img>
      </motion.div>
      <motion.div
        id="main_banner_text_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 1 }}
        delay={3}
      >
        <div id="main_banner_intro">Hello! My name is</div>
        <div id="main_banner_name">Hans Arthur Cupiterson</div>
        <TypeAnimation
          speed={10}
          sequence={jobTitles}
          wrapper="div"
          className="main_banner_jobs"
          cursor={true}
          repeat={Infinity}
        />
        <div id="main_banner_desc">
          I'm a passionate Software Engineer, dedicated Mobile Developer,
          Intermediate Front-End Developer, and Ambitious Web Programmer from
          Jakarta, Indonesia. With a deep enthusiasm for technology, I thrive on
          continuous learning, exploring new horizons every day.
        </div>
        <IconButton
          onClick={handleDownloadCvClick}
          id={"button_download_cv"}
          text={"Download CV"}
          icon={"material-symbols:download"}
          className={"icon_button_primary"}
        />
        <IconButton
          id={"button_contact_me"}
          text={"Contact Me"}
          icon={"mdi:contact"}
          className={"icon_button_secondary"}
          onClick={handleClick}
          disabled={isScrolling}
        />
      </motion.div>
    </motion.div>
  );
}
