"use client";

import { getLocalValue } from "@/app/database/local-storage/getLocalValue";
import { setLocalValue } from "@/app/database/local-storage/setLocalValue";
import {
  type GlobalState,
  type LocalStorageValue,
} from "@/app/database/local-storage/types";
import { createContext, useEffect, useState } from "react";

export const LocalStorageContext = createContext<[{}, any]>([{}, () => {}]);

interface Props {
  children?: React.ReactNode;
}
export const LocalStorageProvider = ({ children }: Props) => {
  const [globalState, setGlobalState] = useState<GlobalState>({
    counter: 0,
    testKey: "testValue",
  });

  const setValue = (
    itemKey: keyof GlobalState,
    itemValue: LocalStorageValue
  ) => {
    const newGlobalState = { ...globalState, [itemKey]: itemValue };
    setGlobalState(newGlobalState);
    setLocalValue("globalState", newGlobalState);
  };

  useEffect(() => {
    const storedGlobalState = getLocalValue<GlobalState>("globalState");
    if (storedGlobalState) setGlobalState(storedGlobalState);
    if (!storedGlobalState) setLocalValue("globalState", {});
  }, []);

  return (
    <LocalStorageContext.Provider value={[globalState, setValue]}>
      {children}
    </LocalStorageContext.Provider>
  );
};
