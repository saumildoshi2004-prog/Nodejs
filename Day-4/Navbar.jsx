import BtnPrimary from "./BtnPrimary";
import scrollToSection from "./scrollTo";

export default function Navbar({ onApply }) {
  return (
    <nav
      style={{
        background: "rgba(15,23,42,.95)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(139,92,246,.4)",
        padding: "18px 35px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "18px",
        position: "sticky",
        top: "15px",
        zIndex: 100,
      }}
    >
      <div>
        <h2
          style={{
            color: "#fff",
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          🎓 Indus University
        </h2>

        <small
          style={{
            color: "#cbd5e1",
          }}
        >
          Ahmedabad, Gujarat
        </small>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <button onClick={() => scrollToSection("programs")}>
          Programs
        </button>

        <button onClick={() => scrollToSection("why-us")}>
          Why Us
        </button>

        <button onClick={() => scrollToSection("testimonials")}>
          Testimonials
        </button>

        <button onClick={() => scrollToSection("contact")}>
          Contact
        </button>

        <BtnPrimary onClick={onApply}>
          Apply Now
        </BtnPrimary>
      </div>
    </nav>
  );
}