// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

export default function Homepage() {
  const [showButton, setShowButton] = useState(false);

  function handleClick() {
    setShowButton(!showButton);
  }

  return (
    <div className="justify-content-center">
      <h2 class="text-light fw-bold">This is Home Page</h2>
      <button class="btn btn-primary mt-3" onClick={handleClick}>
        Click me
      </button>
      {showButton && <h2 class="fw-bold fs-1 text-danger mt-3">Fuck you</h2>}
    </div>
  );
}
