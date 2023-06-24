"use client";

import { useLocalStorage } from "@/app/hooks/useLocalStorage";

const TestLocalStorage = () => {
  const [value, setValue] = useLocalStorage<number>("defaultKey", 0);

  return (
    <>
      <h1>
        Test <code>localStorage</code>
      </h1>
      <section className="flex gap-4">
        <p className="flex items-center justify-center">
          Current value: {value ?? ".."}
        </p>
        <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
        <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
      </section>
    </>
  );
};

export default TestLocalStorage;
