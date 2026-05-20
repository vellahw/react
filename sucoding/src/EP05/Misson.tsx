import { useState } from "react";

export default function Misson() {
  const [name, setName] = useState<string>("jack");
  const [age, setAge] = useState<number>(20);
  const [gender, setGender] = useState<"male" | "female">("male");

  const handleClick = () => {
    setName("hana");
    setAge(28);
    setGender("female");
  };
  return (
    <>
      <h1>Ep.04 Misson</h1>
      <hr />
      <div>
        <p>name: {name}</p>
        <p>age: {age}</p>
        <p>gender: {gender}</p>
      </div>

      <button onClick={handleClick}>Update Profile</button>
    </>
  );
}
