function Section({ id, children, bg = "#F0F4FF" }) {
  return (
    <section
      id={id}
      style={{
        background: bg,
        padding: "80px 40px",
      }}
    >
      {children}
    </section>
  );
}

export default Section;