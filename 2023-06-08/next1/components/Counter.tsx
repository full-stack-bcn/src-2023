"use client";

import { useState } from "react";
import Title from "./Title";

export default function Counter() {
  const [count, setCount] = useState(0);

  const inc = () => setCount(x => x + 1);
  const dec = () => setCount(x => x - 1);

  return <div className="border p-2 flex flex-row justify-center">
    <button onClick={dec}>decrement</button>
    <div className="text-2xl font-bold mx-5">{count}</div>
    <button onClick={inc}>increment</button>
  </div>
}