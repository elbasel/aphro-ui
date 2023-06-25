"use client";

import { LocalStorageKey } from "@/app/database/local-storage/types";
import { useContext } from "react";
import { LocalStorageContext } from "./LocalStorageProvider";
import { type ClassNameValue, twMerge } from "tailwind-merge";

interface Props {
  itemKey: LocalStorageKey;
  itemValue: number | string | [];
  children?: React.ReactNode;
  classNames?: ClassNameValue[];
}

export const SetLocalValueButton = <T,>({
  itemKey,
  itemValue,
  children,
  classNames = [],
}: Props) => {
  const [_, setValue] = useContext(LocalStorageContext);

  const handleOnClick = () => {
    setValue(itemKey, itemValue);
  };

  return (
    <button className={twMerge(...classNames)} onClick={handleOnClick}>
      {children}
    </button>
  );
};
