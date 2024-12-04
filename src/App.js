import "./App.css";
import MainBanner from "./view/MainBanner";
import Navbar from "./view/Navbar";
import Experiences from "./view/Experiences";
import SkillsView from "./view/SkillsView";
import ProjectsView from "./view/ProjectsView";
import ContactMeView from "./view/ContactMeView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBanner />
      <Experiences />
      <ProjectsView />
      <a id="back_to_top_shortcut" href="#main_banner">
        Back to the top
      </a>
      <ContactMeView />
    </div>
  );
}

export default App;
