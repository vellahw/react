import PrintValue from "./components/PrintValue";
import User from "./components/User";

export default function App() {
  const stringValue = "Hello, World!";
  const numberValue = 42;
  const booleanValue = true;
  const objectValue = { name: "Alice", age: 30 };
  const arrayValue = [1, 2, 3, 4, 5];
  const handleClick = () => alert("Button clicked!");

  const userObj = {
    name: "Alice",
    age: 30,
    gender: "female",
  };

  return (
    <div>
      <PrintValue
        stringValue={stringValue}
        numberValue={numberValue}
        booleanValue={booleanValue}
        objectValue={objectValue}
        arrayValue={arrayValue}
        handleClick={handleClick}
      />
      <hr />
      <User {...userObj} />
    </div>
  );
}
