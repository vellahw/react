import MissonButton from "../components/ui/MissonButton";

export default function EP04() {
  const missonHandler = (message: string) => {
    alert(message);
  };

  return (
    <>
      <div>
        <h1>(미션) 버튼 컴포넌트 만들기</h1>
        <MissonButton message="미션!" handler={() => missonHandler("미션!")}>
          미션
        </MissonButton>
      </div>
    </>
  );
}
