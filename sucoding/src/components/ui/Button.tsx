import type React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button type="button">{children}</button>
    </>
  );
}
