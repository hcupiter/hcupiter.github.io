import "./App.css";
import MainBanner from "./view/MainBanner";
import Navbar from "./view/Navbar";
import Experiences from "./view/Experiences";
import SkillsView from "./view/SkillsView";
import ProjectsView from "./view/ProjectsView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBanner />
      <Experiences />
      <SkillsView />
      <ProjectsView />
    </div>
  );
}

export default App;
