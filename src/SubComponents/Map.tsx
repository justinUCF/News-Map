import React from "react";
import { useEffect, useRef } from "react";
import * as leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  //<type>(initial);
  const mapRef = useRef<leaflet.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  // Initialize the map when the component mounts
  useEffect(() => {
    // If the map is already initialized, do not reinitialize
    if (mapContainerRef.current) {
      return;
    }

    // Create a new map instance and set its view
    mapRef.current = leaflet.map("Map").setView([51.505, -0.09], 5);
    leaflet
      .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 15,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(mapRef.current);

    // When Unmounting the component, remove the map instance for cleanup
    return () => {
      mapRef.current?.remove();
    };
  }, []);

  // Ensure the map container is always available
  return <div ref={mapContainerRef} className="w-100px h-100px" />;
};

export default Map;
