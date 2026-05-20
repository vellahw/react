import { useState } from "react";

export default function EP05() {
  const [state, setState] = useState<number>(0);
  const handleClick = () => {
    setState(10);
  };

  return (
    <>
      <h1>useState</h1>
      <hr />
      <div>
        <p>state: {state}</p>
        <button type="button" onClick={handleClick}>
          Set to 10
        </button>
      </div>
    </>
  );
}
