import { useState } from "react";

function ApplyModal({
  onClose,
  programs,
  setPrograms,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedProgram =
      programs.find(
        (p) => p.name === form.program
      );

    if (!selectedProgram) {
      alert("Please select a program.");
      return;
    }

    if (selectedProgram.seats <= 0) {
      alert(
        "Sorry! No seats available in this program."
      );
      return;
    }

    const updatedPrograms =
      programs.map((program) => {
        if (
          program.name === form.program
        ) {
          return {
            ...program,
            seats: program.seats - 1,
          };
        }

        return program;
      });

    setPrograms(updatedPrograms);

    alert(
      `Application Submitted Successfully!\nRemaining Seats: ${
        selectedProgram.seats - 1
      }`
    );

    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.75)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "650px",
          background: "#111827",
          border:
            "1px solid rgba(139,92,246,.4)",
          borderRadius: "20px",
          padding: "35px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,.4)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <h2>
            🎓 Apply For Admission
          </h2>

          <button
            onClick={onClose}
            style={{
              background: "transparent",
              color: "white",
              fontSize: "22px",
              padding: "0",
            }}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              marginBottom: "15px",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              marginBottom: "15px",
            }}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            style={{
              marginBottom: "15px",
            }}
          />

          <select
            name="program"
            value={form.program}
            onChange={handleChange}
            required
            style={{
              marginBottom: "20px",
            }}
          >
            <option value="">
              Select Program
            </option>

            {programs.map(
              (program) => (
                <option
                  key={program.code}
                  value={program.name}
                >
                  {program.name}
                  {" - "}
                  {program.seats} Seats
                </option>
              )
            )}
          </select>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "16px",
              fontWeight: "700",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg,#8b5cf6,#06b6d4)",
              color: "white",
            }}
          >
            Submit Application 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplyModal;