import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lights, toggleLight }) {
  return (
    <StyledLights>
      {lights.map((light) => {
        return (
          <Light
            key={light.id}
            name={light.name}
            toggleLight={toggleLight}
            id={light.id}
            isOn={light.isOn}
          />
        );
      })}
    </StyledLights>
  );
}
