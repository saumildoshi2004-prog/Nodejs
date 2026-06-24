import stats from "./stats";

function StatStrip() {
  return (
    <section
      style={{
        background: "#0A1628",
        color: "white",
        padding: "50px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "20px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.label}
            style={{
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#00C2E0",
              }}
            >
              {item.value}
            </h2>

            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatStrip;