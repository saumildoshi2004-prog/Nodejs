import { C } from "./theme";

export default function BtnPrimary({
  children,
  onClick,
  style = {}
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: C.cyan,
        color: C.navy,
        border: "none",
        borderRadius: "10px",
        padding: "12px 25px",
        fontWeight: "700",
        cursor: "pointer",
        ...style
      }}
    >
      {children}
    </button>
  );
}