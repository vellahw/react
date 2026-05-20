import PrintValue from "./components/PrintValue";
import Button from "./components/ui/Button";
import MissonButton from "./components/ui/MissonButton";
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

  const missonHandler = (message: string) => {
    alert(message);
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
        <h1>Event Object</h1>
        <Button massage="message">onClick</Button>
      </div>
      <hr />

      <div>
        <h1>(미션) 버튼 컴포넌트 만들기</h1>
        <MissonButton message="미션!" handler={() => missonHandler("미션!")}>
          미션
        </MissonButton>
      </div>
    </div>
  );
}
