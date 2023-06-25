"use client";

import { useEffect, useState } from "react";
import { BsCircleHalf } from "react-icons/bs";

import { getLocalValue } from "@/app/database/local-storage/getLocalValue";
import { GlobalState } from "@/app/database/local-storage/types";
import { LocalValue } from "@/app/ui/local-value/LocalValue";
import { SetLocalValueButton } from "@/app/ui/local-value/SetLocalValueButton";
import { Loader } from "@/app/ui/Loader";

interface Props {}

const TestLocalValue = ({}: Props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const currentGlobalState = getLocalValue<GlobalState>("globalState");
    const storedCounter = currentGlobalState?.counter;
    if (storedCounter) setCounter(storedCounter);
  }, []);

  return (
    <>
      <h1>
        Test <code>LocalValue</code>
      </h1>
      <p>
        itemKey = <code>`counter`</code>
      </p>
      <section className="">
        <p>
          Value: <LocalValue itemKey="counter" />{" "}
        </p>
        <div>
          <h1>
            <code>{"<LocalValue />"}</code> with <code>fallback</code>
          </h1>
          <p>
            fallback = <code>{"<Loader /"}</code>
          </p>
          <p>
            Value with fallback:
            <LocalValue itemKey="counter" fallback={<Loader />} />
          </p>
        </div>

        <div onClick={() => setCounter((prev) => prev - 1)}>
          <SetLocalValueButton itemKey="counter" itemValue={counter - 1}>
            -1
          </SetLocalValueButton>
        </div>

        <div onClick={() => setCounter((prev) => prev + 1)}>
          <SetLocalValueButton itemKey="counter" itemValue={counter + 1}>
            +1
          </SetLocalValueButton>
        </div>
      </section>
    </>
  );
};

export default TestLocalValue;
