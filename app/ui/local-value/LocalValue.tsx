"use client";

import { type LocalStorageKey } from "@/app/database/local-storage/types";
import { useContext } from "react";
import { LocalStorageContext } from "./LocalStorageProvider";

interface Props {
  itemKey: LocalStorageKey;
}

export const LocalValue = ({ itemKey }: Props) => {
  const [allValues, setValue] = useContext(LocalStorageContext);
  const key = itemKey as keyof typeof allValues;

  return (
    <>
      {allValues[key]}
      <button onClick={() => setValue(key, "100")}>Set to 100</button>
    </>
  );
};
