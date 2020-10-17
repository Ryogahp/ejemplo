import React from "react";
import { Marker} from "react-leaflet";
import { IconLocation } from "./IconLocation";



const Marhers = () => {
  return (
    <>
      <Marker position={{ lat: "-16.5285372", lng: "-62.5942999" }}  icon={IconLocation} />
      <Marker position={{ lat: "-15.5285372", lng: "-61.5942999" }}  icon={IconLocation} />
      <Marker position={{ lat: "-14.5285372", lng: "-60.5942999" }}  icon={IconLocation} />
      <Marker position={{ lat: "-16.5285372", lng: "-63.5942999" }}  icon={IconLocation} />
      <Marker position={{ lat: "-16.5285372", lng: "-64.5942999" }}  icon={IconLocation} />
    </>
  );
};

export default Marhers;
