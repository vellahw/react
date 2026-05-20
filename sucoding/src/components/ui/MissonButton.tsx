import type React from "react";

export default function MissonButton({
  message,
  children,
  handler,
}: {
  message: string;
  children: React.ReactNode;
  handler: (message: string) => void;
}) {
  return (
    <>
      <button type="button" onClick={() => handler(message)}>
        {children}
      </button>
    </>
  );
}
