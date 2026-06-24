import { useEffect } from "react";

function ModalOverlay({ children, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        style={{
          background: "#111827",
          color: "#ffffff",
          padding: "30px",
          borderRadius: "15px",
          width: "90%",
          maxWidth: "600px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,.4)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ModalOverlay;