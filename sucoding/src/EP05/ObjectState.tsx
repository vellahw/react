import { useState } from "react";

export default function ObjectState() {
  const [userInfo, setUserInfo] = useState({
    name: "jack",
    age: 20,
    gender: "male",
  });

  const handleUpdateUserInfo = () => {
    // 일부 변경 시 스프레드 연산자 사용
    // 현재 상태값을 참조하기 때문에 함수형 업데이트 방식 사용 권장
    setUserInfo((userInfo) => ({
      ...userInfo,
      name: "jessie",
      gender: "female",
    }));
  };

  return (
    <>
      <h1>객체 상태 정의하기</h1>
      <p>name: {userInfo.name}</p>
      <p>age: {userInfo.age}</p>
      <p>gender: {userInfo.gender}</p>
      <button type="button" onClick={handleUpdateUserInfo}>
        UpdateUserInfo
      </button>
    </>
  );
}
