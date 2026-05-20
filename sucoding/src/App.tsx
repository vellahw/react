import { useState } from "react";

export default function App() {
  const [state, setState] = useState<number>(0);
  const handleClick = () => {
    setState(10);
  };
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // 상태 업데이트 함수
    // 이전 값을 참조해서 값을 변경
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <>
      <div>
        <h1>Ep.05 useState</h1>
        <hr />
        <div>
          <p>state: {state}</p>
          <button type="button" onClick={handleClick}>
            Set to 10
          </button>
        </div>
      </div>
      <h1>Ep.05 함수형 업데이트 방식</h1>
      <hr />
      <div>
        <p>count: {count}</p>
      </div>
      <button onClick={handleIncrement}>Update Profile</button>
    </>
  );
}
