function SectionHeading({
  eyebrow,
  title,
  subtitle,
}) {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "50px",
      }}
    >
      <span
        style={{
          color: "#c4b5fd",
          fontWeight: "700",
          fontSize: "14px",
          letterSpacing: "1px",
        }}
      >
        {eyebrow}
      </span>

      <h2
        style={{
          fontSize: "2.5rem",
          marginTop: "10px",
          color: "#ffffff",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#e2e8f0",
          marginTop: "10px",
          fontSize: "16px",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default SectionHeading;