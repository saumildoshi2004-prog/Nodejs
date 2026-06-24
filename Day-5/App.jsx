import { useState, useMemo } from "react";
import { Search, Plus, X, ArrowRight } from "lucide-react";
import "./index.css";

const initialStudents = [
  { id: 1, name: "Aarav Sharma", degree: "B.Tech CS", year: 2, gpa: 8.6, skills: ["React", "Node", "SQL", "Git"], status: "Active" },
  { id: 2, name: "Diya Iyer", degree: "B.Des", year: 3, gpa: 9.2, skills: ["Figma", "Illustrator", "Branding"], status: "Active" },
  { id: 3, name: "Karan Mehta", degree: "B.Sc DS", year: 1, gpa: 7.4, skills: ["Python", "Pandas", "NumPy", "Matplotlib"], status: "On Leave" },
  { id: 4, name: "Priya Nair", degree: "BBA", year: 4, gpa: 8.1, skills: ["Finance", "Excel", "Strategy"], status: "Graduated" },
  { id: 5, name: "Rohan Verma", degree: "B.Tech IT", year: 2, gpa: 6.9, skills: ["JavaScript", "CSS", "Express"], status: "Active" },
  { id: 6, name: "Saanvi Kapoor", degree: "BCA", year: 3, gpa: 9.5, skills: ["Java", "Spring", "Kotlin", "Android"], status: "Active" },
  { id: 7, name: "Aditya Rao", degree: "B.Tech ECE", year: 3, gpa: 8.3, skills: ["C++", "Embedded", "MATLAB"], status: "Active" },
  { id: 8, name: "Neha Gupta", degree: "B.Sc IT", year: 1, gpa: 7.9, skills: ["HTML", "CSS", "JavaScript"], status: "Active" },
  { id: 9, name: "Vikram Singh", degree: "B.Tech ME", year: 4, gpa: 6.5, skills: ["SolidWorks", "AutoCAD", "ANSYS"], status: "On Leave" },
  { id: 10, name: "Pooja Reddy", degree: "MCA", year: 2, gpa: 9.0, skills: ["Java", "Spring Boot", "MySQL"], status: "Active" },
  { id: 11, name: "Siddharth Joshi", degree: "B.Tech CE", year: 3, gpa: 7.2, skills: ["AutoCAD", "Survey", "Concrete Tech"], status: "Active" },
  { id: 12, name: "Tanya Malhotra", degree: "BBA", year: 1, gpa: 8.8, skills: ["Marketing", "Excel", "Communication"], status: "Active" },
  { id: 13, name: "Harsh Patel", degree: "B.Tech IT", year: 4, gpa: 9.4, skills: ["React", "MongoDB", "AWS"], status: "Graduated" },
  { id: 14, name: "Ananya Bose", degree: "B.Des", year: 2, gpa: 8.0, skills: ["Photoshop", "UI/UX", "Sketch"], status: "Active" },
  { id: 15, name: "Rahul Kulkarni", degree: "B.Sc DS", year: 3, gpa: 6.8, skills: ["R", "Tableau", "SQL"], status: "On Leave" },
  { id: 16, name: "Sneha Pillai", degree: "BCA", year: 1, gpa: 9.6, skills: ["Python", "Django", "Git"], status: "Active" },
];

const AVATAR_COLORS = ["#a78bfa", "#60a5fa", "#34d399", "#f472b6", "#fbbf24", "#22d3ee"];
const STATUSES = ["Active", "On Leave", "Graduated"];
const initials = (name) => name.split(" ").map((p) => p[0]).slice(0, 2).join("");

// GPA color tone — conditional rendering driven purely by the gpa prop
const gpaClass = (gpa) => {
  if (gpa >= 9) return "gpa-high";
  if (gpa >= 8) return "gpa-mid";
  if (gpa >= 7) return "gpa-ok";
  return "gpa-low";
};

// Status badge tone — conditional rendering driven purely by the status prop
const STATUS_CLASS = {
  Active: "status-active",
  "On Leave": "status-leave",
  Graduated: "status-graduated",
};

// Pure — every number here is derived from the students array passed in, nothing local
function StatsBar({ students }) {
  const active = students.filter((s) => s.status === "Active").length;
  const avgGpa = students.length ? (students.reduce((sum, s) => sum + s.gpa, 0) / students.length).toFixed(2) : "0.00";
  const topCourse = useMemo(() => {
    const counts = {};
    students.forEach((s) => (counts[s.degree] = (counts[s.degree] || 0) + 1));
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
  }, [students]);

  return (
    <div className="stats-bar">
      <div className="stat-item">
        <p className="stat-value">{students.length}</p>
        <p className="stat-label">Students</p>
      </div>
      <div className="stat-item">
        <p className="stat-value tone-active">{active}</p>
        <p className="stat-label">Active</p>
      </div>
      <div className="stat-item">
        <p className="stat-value tone-gpa">{avgGpa}</p>
        <p className="stat-label">Avg GPA</p>
      </div>
      <div className="stat-item">
        <p className="stat-value">{topCourse}</p>
        <p className="stat-label">Top Course</p>
      </div>
    </div>
  );
}

const YEARS = ["All", 1, 2, 3, 4];

// Controlled filter bar — owns no data itself, just relays every change up via callbacks
function FilterBar({ search, onSearchChange, year, onYearChange, sortBy, onSortChange, onAddClick }) {
  return (
    <div className="filter-bar">
      <div className="search-box">
        <Search size={15} className="search-icon" />
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name..."
        />
      </div>

      <div className="year-pills">
        {YEARS.map((y) => (
          <button
            key={y}
            onClick={() => onYearChange(y)}
            className={`year-pill ${year === y ? "active" : ""}`}
          >
            {y === "All" ? "All" : `Year ${y}`}
          </button>
        ))}
      </div>

      <select className="sort-select" value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="name-asc">Name (A → Z)</option>
        <option value="name-desc">Name (Z → A)</option>
        <option value="gpa-desc">GPA (High → Low)</option>
        <option value="gpa-asc">GPA (Low → High)</option>
      </select>

      <button className="add-student-btn" onClick={onAddClick}>
        <Plus size={14} /> Add student
      </button>
    </div>
  );
}

// Pure card — reads a single student via props, reports every change up via callbacks
function StudentCard({ student, color, onViewProfile, onStatusChange }) {
  const shown = student.skills.slice(0, 3);
  const extra = student.skills.length - shown.length;

  return (
    <div className="dash-card">
      <div className="dash-card-top">
        <div className="dash-identity">
          <div className="dash-avatar" style={{ background: color }}>
            {initials(student.name)}
          </div>
          <div>
            <p className="dash-name">{student.name}</p>
            <p className="dash-meta">{student.degree} · Year {student.year}</p>
          </div>
        </div>
        <span className={`status-pill ${STATUS_CLASS[student.status]}`}>{student.status}</span>
      </div>

      <p className="gpa-line">
        GPA <span className={`gpa-value ${gpaClass(student.gpa)}`}>{student.gpa.toFixed(2)}</span>
      </p>

      {/* Lets any student be moved between statuses — e.g. back to Active once their leave ends */}
      <select
        className="status-select"
        value={student.status}
        onChange={(e) => onStatusChange(student.id, e.target.value)}
      >
        {STATUSES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <div className="skills">
        {shown.map((skill) => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
        {extra > 0 && <span className="skill-badge">+{extra}</span>}
      </div>

      <button className="contact-btn" onClick={() => onViewProfile(student.id)}>
        View profile <ArrowRight size={14} />
      </button>
    </div>
  );
}

function AddStudentModal({ onAdd, onClose }) {
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState(1);
  const [gpa, setGpa] = useState("");
  const [skills, setSkills] = useState("");

  const submit = () => {
    if (!name.trim() || !degree.trim() || !gpa) return;
    onAdd({
      name: name.trim(),
      degree: degree.trim(),
      year: Number(year),
      gpa: Number(gpa),
      skills: skills.split(",").map((s) => s.trim()).filter(Boolean),
      status: "Active",
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3>
          Add student
          <button onClick={onClose}><X size={16} /></button>
        </h3>
        <input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
        <div className="modal-row">
          <input placeholder="Degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            {[1, 2, 3, 4].map((y) => <option key={y} value={y}>Year {y}</option>)}
          </select>
        </div>
        <input placeholder="GPA" type="number" step="0.1" min="0" max="10" value={gpa} onChange={(e) => setGpa(e.target.value)} />
        <input placeholder="Skills (comma separated)" value={skills} onChange={(e) => setSkills(e.target.value)} />
        <button className="modal-submit-btn" onClick={submit}>Add to dashboard</button>
      </div>
    </div>
  );
}

function ProfileModal({ student, color, onClose, onStatusChange }) {
  if (!student) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <div className="popup-banner">
          <button className="popup-close" onClick={onClose}><X size={14} /></button>
        </div>
        <div className="popup-header">
          <div className="dash-avatar" style={{ background: color }}>{initials(student.name)}</div>
          <strong>{student.name}</strong>
          <p>{student.degree} · Year {student.year}</p>
        </div>
        <div className="popup-body">
          <div className="info-line">
            <span className={`status-pill ${STATUS_CLASS[student.status]}`}>{student.status}</span>
          </div>
          <select
            className="status-select"
            value={student.status}
            onChange={(e) => onStatusChange(student.id, e.target.value)}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <div className="info-line">
            GPA <span className={`gpa-value ${gpaClass(student.gpa)}`}>{student.gpa.toFixed(2)}</span>
          </div>
          <hr />
          <div className="skills">
            {student.skills.map((skill) => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StudentDashboard() {
  // Single source of truth — search, year filter, sort, status changes, and stats all read from this one array
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleAdd = (student) => setStudents((prev) => [...prev, { ...student, id: Date.now() }]);

  const handleStatusChange = (id, status) =>
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));

  const filtered = useMemo(() => {
    let list = students.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));
    if (year !== "All") list = list.filter((s) => s.year === year);

    const sorters = {
      "name-asc": (a, b) => a.name.localeCompare(b.name),
      "name-desc": (a, b) => b.name.localeCompare(a.name),
      "gpa-desc": (a, b) => b.gpa - a.gpa,
      "gpa-asc": (a, b) => a.gpa - b.gpa,
    };
    return [...list].sort(sorters[sortBy]);
  }, [students, search, year, sortBy]);

  const selectedStudent = students.find((s) => s.id === selectedId) || null;

  return (
    <div className="app-wrapper">
      <StatsBar students={filtered} />

      <FilterBar
        search={search}
        onSearchChange={setSearch}
        year={year}
        onYearChange={setYear}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onAddClick={() => setShowAddModal(true)}
      />

      <div className="student-grid">
        {filtered.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            color={AVATAR_COLORS[student.id % AVATAR_COLORS.length]}
            onViewProfile={setSelectedId}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>

      {filtered.length === 0 && <p className="no-results">No students match these filters.</p>}

      {showAddModal && <AddStudentModal onAdd={handleAdd} onClose={() => setShowAddModal(false)} />}
      <ProfileModal
        student={selectedStudent}
        color={selectedStudent ? AVATAR_COLORS[selectedStudent.id % AVATAR_COLORS.length] : ""}
        onClose={() => setSelectedId(null)}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}