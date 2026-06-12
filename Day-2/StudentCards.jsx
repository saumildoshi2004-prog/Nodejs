import React, { useState } from 'react';

function StudentCards() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aarav Patel', college: 'LJ Institute of Engineering', dept: 'Computer Engineering', skills: ['React', 'Python', 'SQL'], email: 'aarav.patel@example.com', phone: '+91 98765 43210', photo: 'https://i.pravatar.cc/100?img=12' },
    { id: 2, name: 'Diya Shah', college: 'Government Polytechnic', dept: 'Information Technology', skills: ['Java', 'Figma', 'Node.js'], email: 'diya.shah@example.com', phone: '+91 91234 56789', photo: 'https://i.pravatar.cc/100?img=47' },
    { id: 3, name: 'Karan Mehta', college: 'Sarvajanik College', dept: 'Computer Science', skills: ['C++', 'DSA', 'Linux'], email: 'karan.mehta@example.com', phone: '+91 99887 76655', photo: 'https://i.pravatar.cc/100?img=33' }
  ]);

  const [popup, setPopup] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', college: '', dept: '', skills: '', email: '', phone: '' });

  const addStudent = () => {
    if (!form.name) return;
    setStudents([...students, {
      id: Date.now(),
      ...form,
      skills: form.skills.split(',').map(s => s.trim()).filter(Boolean),
      photo: `https://i.pravatar.cc/100?u=${Date.now()}`
    }]);
    setForm({ name: '', college: '', dept: '', skills: '', email: '', phone: '' });
    setShowForm(false);
  };

  return (
    <div className="cards-container">
      <div className="cards-row">
        {students.map(s => (
          <div key={s.id} className="student-card">
            <img src={s.photo} alt={s.name} />
            <h3>{s.name}</h3>
            <p className="dept">{s.dept}</p>
            <p className="college">{s.college}</p>
            <div className="skills">
              {s.skills.map(sk => (
                <span key={sk} className="skill-badge-green">{sk}</span>
              ))}
            </div>
            <button className="contact-btn" onClick={() => setPopup(s)}>
              Contact
            </button>
          </div>
        ))}

        <div className="add-card" onClick={() => setShowForm(true)}>
          <span className="plus-icon">+</span>
          <p>Add New Student</p>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Add Student</h3>
            {['name', 'college', 'dept', 'skills', 'email', 'phone'].map(f => (
              <input
                key={f}
                placeholder={f === 'skills' ? 'skills (comma separated)' : f}
                value={form[f]}
                onChange={e => setForm({ ...form, [f]: e.target.value })}
              />
            ))}
            <div className="modal-actions">
              <button onClick={addStudent}>Add</button>
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {popup && (
        <div className="modal-overlay">
          <div className="popup-box">
            <div className="popup-banner"></div>
            <div className="popup-header">
              <img src={popup.photo} alt={popup.name} />
              <strong>{popup.name}</strong>
              <p>{popup.dept}</p>
            </div>
            <div className="popup-body">
              <hr />
              <p className="info-line">📧 {popup.email}</p>
              <p className="info-line">📞 {popup.phone}</p>
              <button onClick={() => setPopup(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentCards;