import React from "react";
import { Map, TileLayer } from "react-leaflet";
import Marhers from "./Marhers";

import "leaflet/dist/leaflet.css";

const MapEnVivo = () => {
  return (
    <>
          <Map center={{ lat: "-16.5285372", lng: "-62.5942999" }} zoom={6}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marhers />
          </Map>
    </>
  );
};

export default MapEnVivo;
