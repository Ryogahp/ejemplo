import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Graficas from "./components/Graficasdelineas";
import MapaEnVivo from "./components/MapaEnVivo";
import { Container,} from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Graficas />
      </Container>
      <MapaEnVivo />
    </>
  );
}

export default App;
