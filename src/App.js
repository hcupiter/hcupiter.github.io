import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/home";
import Hyperspace from "./Pages/hyperspace";
import KPOPZstation from "./Pages/kpopzstation";
import VOGreens from "./Pages/vogreens";
import ComputerNetwork from "./Pages/ComputerNetwork";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FigmaDesign from "./Pages/Figma";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Homepage />} />
          <Route path="/hyperspace" element={<Hyperspace />} />
          <Route path="/kpopzstation" element={<KPOPZstation />} />
          <Route path="/vo-Greens" element={<VOGreens />} />
          <Route path="/computer-network" element={<ComputerNetwork />} />
          <Route path="/figma-design" element={<FigmaDesign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
