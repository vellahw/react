export default function User({
  name,
  age,
  gender,
}: {
  name: string;
  age: number;
  gender: string;
}) {
  return (
    <>
      <h1>User Component</h1>
      <p>{name}</p>
      <p>{age}</p>
      <p>{gender}</p>
    </>
  );
}
