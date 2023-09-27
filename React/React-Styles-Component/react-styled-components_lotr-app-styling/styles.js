import { createGlobalStyle } from "styled-components";
import "@fontsource/lora";

// const lora = Lora({
//   subsets: ["latin"],
//   style: ["normal", "italic"],
// });

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Lora;
  }
`;
