import { motion } from "framer-motion";
import "./SkillNode.css";

function SkillNode({ skill }) {
  return (
    <motion.a
      key={skill.key}
      className="skill_node_container"
      initial={{ opacity: 0, x: 5 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeIn", duration: 1 }}
      delay={skill.index * 2}
      href={skill.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="skill_node_logo" alt="logo" src={skill.location}></img>
      <div className="skill_node_data">
        <div className="skill_node_title">{skill.title}</div>
        <div className="skill_node_desc">{skill.desc}</div>
      </div>
    </motion.a>
  );
}

export default SkillNode;
