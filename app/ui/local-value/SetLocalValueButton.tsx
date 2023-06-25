"use client";

import { type ReactNode, useContext } from "react";
import { type ClassNameValue, twMerge } from "tailwind-merge";

import {
  type GlobalState,
  type LocalStorageValue,
} from "@/app/database/local-storage/types";
import { LocalStorageContext } from "./LocalStorageProvider";

interface Props {
  itemKey: keyof GlobalState;
  itemValue: LocalStorageValue;
  children?: ReactNode;
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
