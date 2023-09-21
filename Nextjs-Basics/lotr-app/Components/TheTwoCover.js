import Image from "next/image";
import cover2 from "/resources/public/images/the-two-towers.png";

function TheTwoCover() {
  return <Image src={cover2} width={140} height={230} alt="cover_picture_1" />;
}

export default TheTwoCover;
