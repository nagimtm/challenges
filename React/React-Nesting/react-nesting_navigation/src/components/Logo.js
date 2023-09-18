import { Image } from "./Image";
import logo from "../img/logo.jpg";

export function Logo() {
  return (
    <>
      <a href="#">
        <Image imgSrc={logo} />
      </a>
    </>
  );
}
