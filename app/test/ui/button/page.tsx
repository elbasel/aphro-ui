"use client";

import { Button } from "@/app/ui/Button";

const TestButton = () => {
  return (
    <>
      <h1>
        <code>{"<Button />"}</code>
      </h1>
      <section className="space-y-4">
        <button>Plain Button</button>
        <Button action={() => alert("It works!")}>Button With Action</Button>
      </section>
    </>
  );
};

export default TestButton;
