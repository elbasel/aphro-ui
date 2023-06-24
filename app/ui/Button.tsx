"use client";

import {
  type ReactNode,
  useTransition,
  useState,
  useEffect,
  useRef,
  Ref,
} from "react";
import { twMerge } from "tailwind-merge";
import { BsCircleHalf } from "react-icons/bs";

interface Props {
  action?: () => any;
  children?: ReactNode;
  classNames?: string[];
  type?: "button" | "submit" | "reset";
  fallback?: ReactNode;
}

export const Button = ({
  action = async () => Promise.resolve(),
  children,
  classNames = [],
  type = "submit",
  fallback = <BsCircleHalf size={22} className="animate-spin" />,
}: Props) => {
  const [isPending, startTransition] = useTransition();
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  const buttonRef: Ref<HTMLButtonElement> = useRef(null);

  useEffect(() => {
    const buttonWidth = buttonRef.current?.clientWidth;
    const buttonHeight = buttonRef.current?.clientHeight;
    if (buttonWidth) setWidth(buttonWidth);
    if (buttonHeight) setHeight(buttonHeight);
  }, []);

  return (
    <>
      <button
        disabled={isPending}
        style={{
          minWidth: width,
          minHeight: height,
        }}
        ref={buttonRef}
        onClick={() => startTransition(() => action())}
        type={type}
        className={twMerge(...classNames)}
      >
        {isPending ? fallback : children}
      </button>
    </>
  );
};

