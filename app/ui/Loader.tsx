import { BsCircleHalf } from "react-icons/bs";
import { type ClassNameValue, twMerge } from "tailwind-merge";

interface Props {
  size?: number;
  classNames?: ClassNameValue[];
}

export const Loader = ({ size = 22, classNames = [] }: Props) => {
  return (
    <BsCircleHalf
      size={size}
      className={twMerge("duration-1000 animate-spin ease-linear", ...classNames)}
    />
  );
};
