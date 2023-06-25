import { BsCircleHalf } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export const Loader = ({ size = 22, classNames = [] }) => {
  return (
    <BsCircleHalf
      size={22}
      className={twMerge("duration-1000 animate-spin ease-linear", ...classNames)}
    />
  );
};
