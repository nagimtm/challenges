import Image from "next/image";
import cover1 from "/resources/public/images/the-fellowship-of-the-ring.png";

function FellowShiopCover() {
  return <Image src={cover1} width={140} height={230} alt="cover_picture_1" />;
}

export default FellowShiopCover;
