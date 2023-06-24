import "client-only";
import { LocalStorageKey } from "./types";

export const setLocalValue = <T>(key: LocalStorageKey, value: T) => {
  try {
    if (!key) throw new Error("key is required");
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};
