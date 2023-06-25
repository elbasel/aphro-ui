"use client";

import { LocalStorageKey } from "@/app/database/local-storage/types";
import { useContext } from "react";
import { LocalStorageContext } from "./LocalStorageProvider";

interface Props {
  itemKey: LocalStorageKey;
  itemValue: number | string | [];
  children?: React.ReactNode;
}

export const SetLocalValueButton = <T,>({
  itemKey,
  itemValue,
  children,
}: Props) => {
  const [_, setValue] = useContext(LocalStorageContext);

  const handleOnClick = () => {
    setValue(itemKey, itemValue);
  };

  return <button onClick={handleOnClick}>{children}</button>;
};
