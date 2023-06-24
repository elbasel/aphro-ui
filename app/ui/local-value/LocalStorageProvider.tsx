"use client";

import { getLocalValue } from "@/app/database/local-storage/getLocalValue";
import { setLocalValue } from "@/app/database/local-storage/setLocalValue";
import { LocalStorageKey } from "@/app/database/local-storage/types";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export const LocalStorageContext = createContext<[{}, any]>([{}, () => {}]);

interface Props {
  children?: React.ReactNode;
}
export const LocalStorageProvider = ({ children }: Props) => {
  const [allValues, setAllValues] = useState({});

  const setValue = (key: LocalStorageKey, value: any) => {
    const newGlobalSTate = { ...allValues, [key]: value };
    setAllValues(newGlobalSTate);
    setLocalValue("globalState", newGlobalSTate);
  };

  useEffect(() => {
    const storedGlobalState = getLocalValue<{}>("globalState");
    if (storedGlobalState) setAllValues(storedGlobalState);
    if (!storedGlobalState) setLocalValue("globalState", {});
  }, []);

  return (
    <LocalStorageContext.Provider value={[allValues, setValue]}>
      {children}
    </LocalStorageContext.Provider>
  );
};
