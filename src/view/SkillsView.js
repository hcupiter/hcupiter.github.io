import SkillsData from "../data/SkillsData";
import "./SkillsView.css";
import { motion, AnimatePresence } from "framer-motion";
import SkillNode from "../components/SkillNode";

function SkillsView() {
  return (
    <motion.div
      id="skillview_container"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeIn", duration: 1 }}
      delay={5}
    >
      <div class="segments_title">Skills</div>
      <div id="skillview_skillcontainer">
        <AnimatePresence>
          {SkillsData.map((s) => (
            <SkillNode key={s.index} skill={s} />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default SkillsView;
