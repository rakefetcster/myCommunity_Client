import React, { useEffect, useRef } from 'react';
import L from 'leaflet'; // Import Leaflet
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const OSMMap = ({ latitude, longitude }) => {
  const mapContainerRef = useRef(null); // Reference for the map container

  useEffect(() => {
    // Initialize the map only if it's not already initialized
    const map = L.map(mapContainerRef.current, {
      center: [latitude, longitude],
      zoom: 13, // Set the zoom level
    });

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker at the specified latitude and longitude
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup('This is your location')
      .openPopup();

    // Clean up the map instance when the component unmounts or when the location changes
    return () => {
      map.remove(); // This removes the map instance and prevents reinitialization errors
    };
  }, [latitude, longitude]); // Re-run the effect only if latitude or longitude changes

  return (
    <div>
      <h3>OpenStreetMap Location</h3>
      <div
        ref={mapContainerRef} // Reference to the map container
        style={{ width: '100%', height: '450px' }} // Make sure to set the height and width
      />
    </div>
  );
};

export default OSMMap;
