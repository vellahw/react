import { useState } from "react";

export default function Misson2() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>카운터 앱 만들기</h1>
      <h1>count: {count}</h1>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
