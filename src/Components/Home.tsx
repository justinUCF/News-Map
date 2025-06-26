import React from "react";
import Map from "../SubComponents/Map";
import "leaflet/dist/leaflet.css";

const Home: React.FC = () => {
  return (
    <div
      id="Map"
      style={{
        height: "100%",
        width: "100%",
        padding: "24px",
        overflow: "hidden",
      }}
    >
      <div style={{ height: "100%", width: "100%" }}>
        <Map />
      </div>
    </div>
  );
};

export default Home;
