import ModalOverlay from "./ModalOverlay";

function LearnMoreModal({
  onClose,
  onApply,
}) {
  return (
    <ModalOverlay onClose={onClose}>
      <h2>
        Why Choose Indus University?
      </h2>

      <ul
        style={{
          marginTop: "20px",
          lineHeight: "2",
        }}
      >
        <li>NAAC Accredited</li>
        <li>Industry-Oriented Curriculum</li>
        <li>Modern Research Labs</li>
        <li>Excellent Placements</li>
        <li>Global Exposure</li>
      </ul>

      <p
        style={{
          marginTop: "20px",
        }}
      >
        Indus University focuses on
        innovation, research, and
        practical learning experiences.
      </p>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={onApply}>
          Apply Now
        </button>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </ModalOverlay>
  );
}

export default LearnMoreModal;