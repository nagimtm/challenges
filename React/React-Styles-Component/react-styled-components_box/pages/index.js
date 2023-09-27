import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledDiv>
      <BoxWithClassName isBlack={true} />
      <BoxWithClassName />
      <BoxWithStyledComponents isBlack={true} />
      <BoxWithStyledComponents isBlack={false} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
`;
