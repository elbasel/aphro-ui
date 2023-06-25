"use client";

import { type LocalStorageKey } from "@/app/database/local-storage/types";
import { useContext } from "react";
import { LocalStorageContext } from "./LocalStorageProvider";

interface Props {
  itemKey: LocalStorageKey;
  fallback?: React.ReactNode;
}

export const LocalValue = ({ itemKey, fallback = "loading" }: Props) => {
  const [allValues] = useContext(LocalStorageContext);
  const key = itemKey as keyof typeof allValues;

  const value = allValues[key];
  if (value === undefined || value === null) return fallback;

  return <>{value}</>;
};
