"use client";

import EventEmitter from "events";
import { useEffect, useState } from "react";
import { setLocalValue } from "../database/local-storage/setLocalValue";
import { getLocalValue } from "../database/local-storage/getLocalValue";
import { type LocalStorageKey } from "../database/local-storage/types";

const emitter = new EventEmitter();

export const useLocalStorage = <T,>(
  key: LocalStorageKey,
  initialValue: T
): [T | null, (func: (prev: T) => T) => void] => {
  const [state, setState] = useState<T | null>(null);

  useEffect(() => {
    const localValue: T | undefined = getLocalValue<T>(key);
    setValue(() => localValue ?? initialValue);
  }, []);

  const setValue = (func: (prev: T) => T) => {
    const newValue = func(state!);
    setState(newValue);
    setLocalValue(key, newValue);
  };

  return [state, setValue];
};
