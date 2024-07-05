import Header from '../../components/Header';
import './StudentDashb.css';
import { Route, Routes, Link } from 'react-router-dom';

function Sidebar() {
    return (
      <div className="sidebar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to='/student-dashboard' className="nav-link">
              <i className="bi bi-grid-1x2-fill icon"></i>Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/student-dashboard/classroom' className="nav-link">
              <i className="bi bi-person-workspace icon"></i>Classroom
            </Link>
          </li>
        </ul>
        <ul className="logout-nav-list">
          <li className="nav-item">
            <Link to='/student-dashboard/profile' className="nav-link">
              <i className="bi bi-person-circle icon"></i>Profile
            </Link>
          </li> 
          <li className="nav-item">
            <Link to='/' className="nav-link">
              <i className="bi bi-box-arrow-left icon"></i>Logout
            </Link>
          </li>  
        </ul>
      </div>
    );
  }

  function Dashboard() {
    return (
      <div className="dashb-students-container">
        <h1 className="college-title">College of Computer Studies</h1>
        <span className="dashb-studs-label">Dashboard</span>
      </div>
    );
  }

  export function Classroom() {
    return (
        <div className="dashb-students-container">
            <h1 className="college-title">EIE Implementing Subjects</h1>
            {/* <span className="active-pocs-label">Class</span> */}
        </div>
    );
  }
  
  function Profile() {
    return <div>Profile Content</div>;
  }

const StudentDashb = () => {

  return (
    <div className="student-page">
        <Header />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="classroom" element={<Classroom />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default StudentDashb
