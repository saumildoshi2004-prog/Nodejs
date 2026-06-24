function Hero({ onApply, onLearnMore }) {
  return (
    <section
      id="hero"
      style={{
        background:
          "linear-gradient(135deg,#0f172a,#1e1b4b,#312e81)",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left Content */}
      <div style={{ maxWidth: "700px" }}>
        <span
          style={{
            background: "rgba(139,92,246,.2)",
            border: "1px solid rgba(139,92,246,.4)",
            padding: "8px 16px",
            borderRadius: "30px",
            color: "#c4b5fd",
            fontWeight: "600",
          }}
        >
          🎓 Admissions Open 2026-27
        </span>

        <h1
          style={{
            fontSize: "4rem",
            marginTop: "25px",
            lineHeight: "1.2",
          }}
        >
          Shape Your Future With
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg,#8b5cf6,#06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Indus University
          </span>
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            color: "#cbd5e1",
            lineHeight: "1.8",
            maxWidth: "650px",
          }}
        >
          Empowering future innovators through world-class education,
          advanced research facilities, industry partnerships,
          and outstanding placement opportunities.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <button onClick={onApply}>
            Apply Now
          </button>

          <button
            onClick={onLearnMore}
            style={{
              background: "transparent",
              border: "1px solid #8b5cf6",
              color: "white",
            }}
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "50px",
            flexWrap: "wrap",
          }}
        >
        </div>
      </div>

      {/* Right Side Card */}
      <div
        style={{
          background: "rgba(255,255,255,.08)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,.15)",
          borderRadius: "20px",
          padding: "30px",
          width: "320px",
        }}
      >
        <h3>🏆 Why Choose Indus?</h3>

        <ul
          style={{
            marginTop: "20px",
            lineHeight: "2",
            color: "#e2e8f0",
          }}
        >
          <li>✓ Industry-Oriented Curriculum</li>
          <li>✓ Modern Research Labs</li>
          <li>✓ Experienced Faculty</li>
          <li>✓ Global Exposure</li>
          <li>✓ Excellent Placements</li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;