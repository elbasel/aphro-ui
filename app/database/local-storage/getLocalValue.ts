import "client-only";
import { LocalStorageKey } from "./types";

export const getLocalValue = <T>(itemKey: LocalStorageKey): T | undefined => {
  try {
    const itemValue: T = JSON.parse(localStorage.getItem(itemKey) ?? "");
    return itemValue;
  } catch (error: any) {
    console.log(error);
  }
};
