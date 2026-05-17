export default function PrintValue({
  stringValue,
  numberValue,
  booleanValue,
  objectValue,
  arrayValue,
  handleClick,
}: PrintValue) {
  return (
    <>
      <h1>{stringValue}</h1>
      <p>Number: {numberValue}</p>
      <p>Boolean: {booleanValue.toString()}</p>
      <p>Object: {JSON.stringify(objectValue)}</p>
      <p>Array: {arrayValue}</p>
      <p>handleClick: {handleClick.toString()}</p>
    </>
  );
}
