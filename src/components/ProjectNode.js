import { motion } from "framer-motion";
import "./ProjectNode.css";

export default function ProjectNode({ data }) {
  const programmingLanguage = data.ProjectProgrammingLanguage.split(",");
  return (
    <motion.div className="project_node_container">
      <div className="project_node_data">
        <div className="project_node_name">{data.ProjectName}</div>
        <div className="project_node_year">{data.ProjectYear}</div>
        <div className="project_node_desc">{data.ProjectDescription}</div>
      </div>
      <div className="project_node_action">
        <div className="project_node_programming_language_container">
          {programmingLanguage.map((language, index) => (
            <div className="project_node_programming_language" key={index}>
              {language}
            </div>
          ))}
        </div>
        <a
          className="project_node_button"
          href={data.ProjectGithubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Details
        </a>
      </div>
    </motion.div>
  );
}
