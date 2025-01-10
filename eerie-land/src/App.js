import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="App">
      {!showMap ? (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="explore-button" onClick={() => setShowMap(true)}>
            Explore Land
          </button>
        </header>
      ) : (
        <div className="map-container">
          {/* Full-Screen Map */}
          <div className="map">
            {/* Navigation Buttons */}
            <button className="nav-button up">↑</button>
            <button className="nav-button down">↓</button>
            <button className="nav-button left">←</button>
            <button className="nav-button right">→</button>

            {/* Mini Map at Bottom Right */}
            <div className="full-map"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
