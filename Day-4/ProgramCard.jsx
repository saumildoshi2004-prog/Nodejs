function ProgramCard({ program, onApply }) {
  return (
    <div
      style={{
        background: "#1e293b",
        color: "#fff",
        padding: "28px",
        borderRadius: "18px",
        border: "1px solid rgba(139,92,246,.4)",
        boxShadow: "0 8px 25px rgba(0,0,0,.25)",
        transition: ".3s",
      }}
    >
      <div
        style={{
          fontSize: "50px",
          marginBottom: "15px",
        }}
      >
        {program.icon}
      </div>

      <h3
        style={{
          marginBottom: "12px",
        }}
      >
        {program.name}
      </h3>

      <p
        style={{
          marginBottom: "15px",
          color: "#cbd5e1",
        }}
      >
        {program.desc}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <span>📚 {program.duration}</span>
        <span>👨‍🎓 {program.seats} Seats</span>
      </div>

      <div
        style={{
          marginBottom: "18px",
        }}
      >
        ⭐ Industry Focused
        <br />
        💼 Placement Support
        <br />
        🔬 Modern Labs
      </div>

      <button onClick={onApply}>
        Apply Now →
      </button>
    </div>
  );
}

export default ProgramCard;