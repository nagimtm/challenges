import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const initialRooms = [
    {
      id: 0,
      name: "Living Room",
      isOn: true,
    },
    {
      id: 1,
      name: "Kitchen",
      isOn: false,
    },
    {
      id: 2,
      name: "Bedroom",
      isOn: true,
    },
    {
      id: 3,
      name: "Bathroom",
      isOn: false,
    },
    {
      id: 4,
      name: "Garage",
      isOn: false,
    },
    {
      id: 5,
      name: "Porch",
      isOn: true,
    },
    {
      id: 6,
      name: "Garden",
      isOn: true,
    },
  ];

  const [lights, setLights] = useState(initialRooms);
  function toggleLight(id) {
    setLights(
      lights.map((room) =>
        room.id === id ? { ...room, isOn: !room.isOn } : room
      )
    );
  }
  function lightsOn() {
    console.log("you clicked all light on");
    setLights(
      lights.map((light) =>
        light.isOn === false ? { ...lights, isOn: true } : light
      )
    );
  }

  function lightsOff() {
    console.log("you clicked all light off");
    setLights(
      lights.map((light) =>
        light.isOn === true ? { ...lights, isOn: false } : light
      )
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        lightsOn={lightsOn}
        toggleLight={toggleLight}
        lightsOff={lightsOff}
      />
    </Layout>
  );
}
