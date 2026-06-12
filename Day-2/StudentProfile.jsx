import React, { useState } from 'react';

function StudentProfile({ photo, name, college, dept, skills, email, phone }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="profile-card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p className="dept">{dept}</p>
      <p className="college">{college}</p>
      <div className="skills">
        {skills.map(s => (
          <span key={s} className="skill-badge">{s}</span>
        ))}
      </div>
      <button className="profile-contact-btn" onClick={() => setShowPopup(true)}>
        Contact
      </button>

      {showPopup && (
        <div className="modal-overlay">
          <div className="popup-box">
            <div className="popup-banner"></div>
            <div className="popup-header">
              <img src={photo} alt={name} />
              <strong>{name}</strong>
              <p>{dept}</p>
            </div>
            <div className="popup-body">
              <hr />
              <p className="info-line">📧 {email}</p>
              <p className="info-line">📞 {phone}</p>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentProfile;