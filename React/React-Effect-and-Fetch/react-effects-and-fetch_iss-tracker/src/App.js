import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  console.log(coords);
  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCoords(data);
    } catch (e) {
      console.log(e.error);
    }
  }

  useEffect(() => {
    let intervalId = setInterval(getISSCoords, 5000);
    clearInterval(intervalId);
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
