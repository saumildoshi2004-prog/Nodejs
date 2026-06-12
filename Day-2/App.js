import React, { useState } from 'react';
import WebBasics from './WebBasics';
import StudentProfile from './StudentProfile';
import StudentCards from './StudentCards';

function App() {
  const [view, setView] = useState(null);

  return (
    <div className="app-wrapper">
      <section className="layer layer-purple">
        <WebBasics />
      </section>

      {!view && (
        <div className="choice-container">
          <button className="choice-btn choice-blue" onClick={() => setView('profile')}>
            Featured Student
          </button>
          <button className="choice-btn choice-green" onClick={() => setView('cards')}>
            All Students
          </button>
        </div>
      )}

      {view === 'profile' && (
        <section className="layer layer-blue">
          <h2 className="layer-title">Featured student</h2>
          <StudentProfile
            photo="https://i.pravatar.cc/100?img=15"
            name="Saumil Raval"
            college="LJ Institute of Engineering"
            dept="Computer Engineering"
            skills={['React', 'Python', 'DSA']}
            email="saumil.raval@example.com"
            phone="+91 96746 12345"
          />
          <button className="back-btn" onClick={() => setView(null)}>← Back</button>
        </section>
      )}

      {view === 'cards' && (
        <section className="layer layer-green">
          <h2 className="layer-title">All students</h2>
          <StudentCards />
          <button className="back-btn" onClick={() => setView(null)}>← Back</button>
        </section>
      )}
    </div>
  );
}

export default App;