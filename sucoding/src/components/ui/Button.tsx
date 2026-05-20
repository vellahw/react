import type React from "react";

export default function Button({
  children,
  massage,
}: {
  children: React.ReactNode;
  massage: string;
}) {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    message: string,
  ) => {
    console.log(event);
    alert(message);
  };

  return (
    <>
      <button type="button" onClick={(event) => handleClick(event, massage)}>
        {children}
      </button>
    </>
  );
}
