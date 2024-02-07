import "./ProjectsView.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getListProject } from "../controller/DataFetcher.js";
import ProjectNode from "../components/ProjectNode.js";

function ProjectsView() {
  const [projectData, setProjectData] = useState([]);
  const [isDataRetrieved, setIsDataRetrieved] = useState(false);

  useEffect(() => {
    // fetch data from API and saves it
    const fetchData = async () => {
      const datas = await getListProject();
      setProjectData(datas);
      setIsDataRetrieved(true);
    };

    fetchData();
  }, []);

  return (
    <motion.div
      id="project_view_container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 1 }}
      delay={6}
    >
      <div className="segments_title">Projects List</div>
      <div id="project_list_container">
        {isDataRetrieved ? (
          projectData.map((project, index) => (
            <ProjectNode key={index} data={project} />
          ))
        ) : (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectsView;
