import React from "react";
import Map from "../SubComponents/Map";
import "leaflet/dist/leaflet.css";

const Home: React.FC = () => {
  return (
    <div id="Map" style={{ height: "100vh", width: "100%" }}>
      <Map />
    </div>
  );
};

export default Home;
