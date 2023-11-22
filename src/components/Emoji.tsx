import { Image } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating_top: number;
}

interface Image {
  src: string;
  alt: string;
  boxSize: string;
  marginTop?: string;
}
const Emoji = ({ rating_top }: Props) => {
  const emojieMap: { [key: number]: Image } = {
    3: { src: meh, alt: "meh", boxSize: "25px", marginTop: "10px" },
    4: {
      src: thumbsUp,
      alt: "recommended",
      boxSize: "25px",
      marginTop: "10px",
    },
    5: { src: bullsEye, alt: "expectional", boxSize: "35px" },
  };
  return <Image {...emojieMap[rating_top]}></Image>;
};

export default Emoji;
