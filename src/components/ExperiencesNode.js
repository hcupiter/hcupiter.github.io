import "./ExperiencesNode.css";
import { motion } from "framer-motion";

function ExperiencesNode({ index, year, desc }) {
  return (
    <motion.div
      key={index}
      className="experiences_node_container"
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeIn", duration: 1 }}
    >
      <div className="experiences_nodes_bar"></div>
      <div className="experiences_node_data">
        <div className="experiences_node_year">{year}</div>
        <div className="experiences_node_desc">{desc}</div>
      </div>
    </motion.div>
  );
}

export default ExperiencesNode;
