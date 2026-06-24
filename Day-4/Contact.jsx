import { useState } from "react";

function Contact() {
  const contactInfo = [
    {
      icon: "📍",
      label: "Address",
      value: "Indus University, Bopal-Ghuma Road, Ahmedabad, Gujarat",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 79 6671 1311",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "admissions@indusuni.ac.in",
    },
    {
      icon: "🕒",
      label: "Office Hours",
      value: "Mon – Sat, 9:00 AM – 5:00 PM",
    },
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.message.trim();

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    setSent(true);
  };

  return (
    <>
      <style>{`
        .contact-section{
          padding:90px 8%;
          background:#0f172a;
          color:#fff;
        }

        .contact-container{
          max-width:1200px;
          margin:auto;
        }

        .eyebrow{
          color:#8b5cf6;
          text-transform:uppercase;
          letter-spacing:2px;
          font-weight:700;
          margin-bottom:10px;
        }

        .title{
          font-size:2.8rem;
          margin-bottom:15px;
        }

        .subtitle{
          color:#cbd5e1;
          max-width:700px;
          line-height:1.7;
          margin-bottom:50px;
        }

        .contact-grid{
          display:grid;
          grid-template-columns:1fr 1.2fr;
          gap:40px;
        }

        .info-list{
          display:flex;
          flex-direction:column;
          gap:25px;
        }

        .info-item{
          display:flex;
          gap:18px;
          align-items:flex-start;
        }

        .icon{
          width:55px;
          height:55px;
          border-radius:14px;
          display:flex;
          justify-content:center;
          align-items:center;
          background:linear-gradient(135deg,#8b5cf6,#06b6d4);
          font-size:24px;
          flex-shrink:0;
        }

        .label{
          color:#c4b5fd;
          font-size:13px;
          text-transform:uppercase;
          font-weight:700;
          letter-spacing:1px;
        }

        .value{
          margin-top:5px;
          color:#fff;
          line-height:1.6;
        }

        .form-box{
          background:#1e293b;
          padding:30px;
          border-radius:20px;
          border:1px solid rgba(255,255,255,.08);
        }

        .form-group{
          margin-bottom:20px;
        }

        .form-group label{
          display:block;
          margin-bottom:8px;
          font-size:14px;
        }

        .form-group input,
        .form-group textarea{
          width:100%;
          padding:14px;
          border:none;
          outline:none;
          border-radius:10px;
          background:#334155;
          color:#fff;
          font-size:15px;
          box-sizing:border-box;
        }

        .form-group textarea{
          min-height:120px;
          resize:vertical;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder{
          color:#94a3b8;
        }

        .submit-btn{
          width:100%;
          padding:15px;
          border:none;
          border-radius:10px;
          background:linear-gradient(135deg,#8b5cf6,#06b6d4);
          color:white;
          font-size:16px;
          font-weight:600;
          cursor:pointer;
          transition:.3s;
        }

        .submit-btn:hover{
          transform:translateY(-3px);
        }

        .submit-btn:disabled{
          opacity:.5;
          cursor:not-allowed;
          transform:none;
        }

        .success{
          text-align:center;
          padding:50px 20px;
        }

        .success h3{
          margin:15px 0;
          font-size:28px;
        }

        .success p{
          color:#cbd5e1;
          line-height:1.7;
        }

        @media(max-width:900px){
          .contact-grid{
            grid-template-columns:1fr;
          }

          .title{
            font-size:2rem;
          }

          .contact-section{
            padding:70px 20px;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-container">

          <p className="eyebrow">GET IN TOUCH</p>

          <h2 className="title">Contact Us</h2>

          <p className="subtitle">
            Have a question about admissions, programs, or campus life?
            Reach out — we're happy to help.
          </p>

          <div className="contact-grid">

            <div className="info-list">
              {contactInfo.map((item) => (
                <div className="info-item" key={item.label}>
                  <div className="icon">{item.icon}</div>

                  <div>
                    <div className="label">{item.label}</div>
                    <div className="value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="form-box">

              {sent ? (
                <div className="success">
                  <div style={{ fontSize: "60px" }}>✅</div>

                  <h3>Message Sent!</h3>

                  <p>
                    Thank you <b>{form.name}</b>.
                    <br />
                    We'll contact you soon at
                    <br />
                    <b>{form.email}</b>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>

                  <div className="form-group">
                    <label>Full Name</label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={(e) =>
                        handleChange("name", e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={(e) =>
                        handleChange("email", e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Message</label>

                    <textarea
                      placeholder="Write your message..."
                      value={form.message}
                      onChange={(e) =>
                        handleChange("message", e.target.value)
                      }
                    />
                  </div>

                  <button
                    className="submit-btn"
                    disabled={!isValid}
                  >
                    Send Message →
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;