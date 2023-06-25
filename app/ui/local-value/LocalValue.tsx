"use client";

import { type GlobalState } from "@/app/database/local-storage/types";
import { useContext } from "react";
import { LocalStorageContext } from "./LocalStorageProvider";

interface Props {
  itemKey: keyof GlobalState;
  fallback?: React.ReactNode;
}

export const LocalValue = ({ itemKey, fallback = "loading" }: Props) => {
  const [allValues] = useContext(LocalStorageContext);

  const value = allValues[itemKey];
  if (value === undefined || value === null) return fallback;

  return <>{value}</>;
};
