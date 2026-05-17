import PrintValue from "./components/PrintValue";
import Button from "./components/ui/Button";
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
      {/* 스프레드 연산자 */}
      <User {...userObj} />
      <hr />

      <div>
        <h1>children props</h1>
        <Button>
          <em>login</em>
        </Button>
        <Button>
          <em>logout</em>
        </Button>
      </div>

      <hr />
    </div>
  );
}
