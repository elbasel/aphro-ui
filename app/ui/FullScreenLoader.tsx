"use client";

import { useEffect, useState } from "react";
import { Loader } from "./Loader";

export const FullScreenLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center w-screen min-h-screen text-white bg-black">
        <Loader size={200} />
      </div>
    );

  return <></>;
};
