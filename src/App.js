import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Graficas from "./components/Graficasdelineas";
import MapaEnVivo from "./components/MapaEnVivo";

import "./App.css";

function App() {
  return (
    <div className="container">
     
      <Graficas />
      <MapaEnVivo />

    </div>
  );
}

export default App;
