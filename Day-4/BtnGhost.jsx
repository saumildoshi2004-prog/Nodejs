import { C } from "./theme";

export default function BtnGhost({
  children,
  onClick,
  style = {}
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "transparent",
        border: `1px solid ${C.indigo}`,
        color: C.indigo,
        borderRadius: "10px",
        padding: "12px 25px",
        cursor: "pointer",
        ...style
      }}
    >
      {children}
    </button>
  );
}