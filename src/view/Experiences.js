import { motion, AnimatePresence } from "framer-motion";
import ExperiencesNode from "../components/ExperiencesNode";
import experiencesData from "../data/ExperiencesData";
import "./Experiences.css";

function Experiences() {
  const delay = 4;

  return (
    <motion.div
      id="experiences_container"
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeIn", duration: 1 }}
      delay={delay}
      viewport={{ once: true }} // only animate once when the component comes into vie
    >
      <div class="segments_title">Experiences</div>
      <motion.div
        id="experiences_container"
        transition={{ staggerChildren: 1 }}
      >
        <AnimatePresence>
          {experiencesData.map((exp) => (
            <ExperiencesNode key={exp.index} year={exp.year} desc={exp.desc} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default Experiences;
