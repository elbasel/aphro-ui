"use client";

import { useEffect, useState } from "react";
import { getLocalValue } from "@/app/database/local-storage/getLocalValue";
import { GlobalState } from "@/app/database/local-storage/types";
import { LocalValue } from "@/app/ui/local-value/LocalValue";
import { SetLocalValueButton } from "@/app/ui/local-value/SetLocalValueButton";

const TestLocalValue = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const currentGlobalState = getLocalValue<GlobalState>("globalState");
    const storedCounter = currentGlobalState?.counter;
    if (storedCounter) setCounter(storedCounter);
  }, []);

  return (
    <>
      <h1 className="flex flex-col gap-4">
        <code>{"<LocalValue itemKey='counter' />"}</code>
      </h1>
      <p className="text-center text-7xl">
        <LocalValue itemKey="counter" />{" "}
      </p>

      <section className="flex items-center justify-center flex-1 gap-4">
        <div onClick={() => setCounter((prev) => prev - 1)}>
          <SetLocalValueButton
            classNames={["text-7xl"]}
            itemKey="counter"
            itemValue={counter - 1}
          >
            -1
          </SetLocalValueButton>
        </div>
        <div onClick={() => setCounter((prev) => prev + 1)}>
          <SetLocalValueButton
            classNames={["text-7xl"]}
            itemKey="counter"
            itemValue={counter + 1}
          >
            +1
          </SetLocalValueButton>
        </div>
      </section>
    </>
  );
};

export default TestLocalValue;
