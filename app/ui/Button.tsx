"use client";

import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  action?: (formData: FormData) => Promise<any>;
  children?: ReactNode;
  className?: string[];
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  action = () => Promise.resolve(),
  children,
  className = [],
  type = "submit",
}: Props) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} action={action}>
        <button type={type} className={twMerge(...className)}></button>;
      </form>
    </>
  );
};

export default Button;
