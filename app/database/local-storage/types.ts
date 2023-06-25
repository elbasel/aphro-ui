export type LocalStorageKey = "defaultKey" | "globalState" | "user";
export type LocalStorageValue = number | string | [];

export type GlobalState = {
  counter: number;
  testKey: string;
};
