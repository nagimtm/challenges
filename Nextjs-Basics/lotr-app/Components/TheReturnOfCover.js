import Image from "next/image";
import cover3 from "/resources/public/images/the-return-of-the-king.png";

function TheReturnOfCover() {
  return <Image src={cover3} width={140} height={230} alt="cover_picture_1" />;
}

export default TheReturnOfCover;
