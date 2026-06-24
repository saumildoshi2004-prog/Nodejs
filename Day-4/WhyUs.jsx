function WhyUs() {
  const reasons = [
    {
      icon: "🎯",
      title: "Industry-Oriented Curriculum",
      desc: "Courses co-designed with industry experts so what you learn maps directly to what employers need.",
    },
    {
      icon: "🔬",
      title: "Modern Research Labs",
      desc: "Hands-on access to AI, IoT, Robotics, and Electronics labs equipped with the latest tools.",
    },
    {
      icon: "👨‍🏫",
      title: "Experienced Faculty",
      desc: "Learn from professors with real industry and research backgrounds, not just textbooks.",
    },
    {
      icon: "🌍",
      title: "Global Exposure",
      desc: "Exchange programs, international tie-ups, and global certifications to widen your horizon.",
    },
    {
      icon: "💼",
      title: "Excellent Placements",
      desc: "A dedicated placement cell with 150+ recruiters and a consistent 95% placement rate.",
    },
    {
      icon: "🏛️",
      title: "25+ Years of Excellence",
      desc: "A legacy of academic rigor, alumni success, and continuous institutional growth.",
    },
  ];

  return (
    <>
      <style>{`
        .whyus-section {
          padding: 90px 8%;
          background: #0f172a;
          color: white;
        }

        .whyus-container {
          max-width: 1200px;
          margin: auto;
        }

        .eyebrow {
          color: #8b5cf6;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: 2.8rem;
          margin-bottom: 15px;
        }

        .section-subtitle {
          color: #cbd5e1;
          max-width: 700px;
          margin-bottom: 50px;
          line-height: 1.7;
        }

        .whyus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .whyus-card {
          background: #1e293b;
          padding: 30px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.3s ease;
        }

        .whyus-card:hover {
          transform: translateY(-8px);
          border-color: #8b5cf6;
          box-shadow: 0 15px 35px rgba(139,92,246,0.25);
        }

        .icon-box {
          width: 65px;
          height: 65px;
          border-radius: 16px;
          background: linear-gradient(135deg,#8b5cf6,#06b6d4);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30px;
          margin-bottom: 20px;
        }

        .whyus-card h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .whyus-card p {
          color: #cbd5e1;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .whyus-section {
            padding: 60px 20px;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section id="why-us" className="whyus-section">
        <div className="whyus-container">
          <p className="eyebrow">WHY INDUS</p>

          <h2 className="section-title">
            Why Choose Indus University
          </h2>

          <p className="section-subtitle">
            Everything you need to build a strong foundation — and the
            launchpad to grow beyond it.
          </p>

          <div className="whyus-grid">
            {reasons.map((reason) => (
              <div className="whyus-card" key={reason.title}>
                <div className="icon-box">{reason.icon}</div>

                <h3>{reason.title}</h3>

                <p>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;