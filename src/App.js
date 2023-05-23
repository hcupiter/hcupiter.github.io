import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/home";
import Hyperspace from "./Pages/hyperspace";
import KPOPZstation from "./Pages/kpopzstation";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hyperspace" element={<Hyperspace />} />
          <Route path="/kpopzstation" element={<KPOPZstation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
