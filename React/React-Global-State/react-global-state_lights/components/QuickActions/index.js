import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lightsOff, lightsOn }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          lightsOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          lightsOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
