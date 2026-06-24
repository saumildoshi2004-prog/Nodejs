function TestimonialCard({ testimonial }) {
  return (
    <div
      style={{
        background: "#1e293b",
        border: "1px solid rgba(139,92,246,.4)",
        borderRadius: "18px",
        padding: "25px",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          marginBottom: "15px",
        }}
      >
        ⭐⭐⭐⭐⭐
      </div>

      <p
        style={{
          color: "#fff",
          lineHeight: "1.8",
          fontStyle: "italic",
        }}
      >
        "{testimonial.quote}"
      </p>

      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid rgba(255,255,255,.1)",
          paddingTop: "15px",
        }}
      >
        <h4>{testimonial.name}</h4>

        <span
          style={{
            color: "#06b6d4",
            fontWeight: "600",
          }}
        >
          {testimonial.company}
        </span>
      </div>
    </div>
  );
}

export default TestimonialCard;