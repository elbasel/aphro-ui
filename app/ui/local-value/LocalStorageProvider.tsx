"use client";

import { getLocalValue } from "@/app/database/local-storage/getLocalValue";
import { setLocalValue } from "@/app/database/local-storage/setLocalValue";
import {
  GlobalState,
  LocalStorageKey,
} from "@/app/database/local-storage/types";
import { createContext, useEffect, useState } from "react";

export const LocalStorageContext = createContext<[{}, any]>([{}, () => {}]);

interface Props {
  children?: React.ReactNode;
}
export const LocalStorageProvider = ({ children }: Props) => {
  const [allValues, setAllValues] = useState<GlobalState>({
    counter: 0,
    testKey: "testValue",
  });

  const setValue = (itemKey: keyof GlobalState, itemValue: any) => {

    const newGlobalSTate = { ...allValues, [itemKey]: itemValue };
    setAllValues(newGlobalSTate);
    setLocalValue("globalState", newGlobalSTate);
  };

  useEffect(() => {
    const storedGlobalState = getLocalValue<GlobalState>("globalState");
    if (storedGlobalState) setAllValues(storedGlobalState);
    if (!storedGlobalState) setLocalValue("globalState", {});
  }, []);

  return (
    <LocalStorageContext.Provider value={[allValues, setValue]}>
      {children}
    </LocalStorageContext.Provider>
  );
};
