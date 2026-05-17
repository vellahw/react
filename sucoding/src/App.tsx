import PrintValue from "./components/PrintValue";

export default function App() {
  const stringValue = "Hello, World!";
  const numberValue = 42;
  const booleanValue = true;
  const objectValue = { name: "Alice", age: 30 };
  const arrayValue = [1, 2, 3, 4, 5];
  const handleClick = () => alert("Button clicked!");

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
    </div>
  );
}
