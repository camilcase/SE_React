import { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import './CollegePocDashb.css';
import { Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import TaskCreation from './TaskCreation';
import TaskDetails from './TaskDetails';

function Sidebar() {
  const navigate = useNavigate();
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      navigate('/class-management');
    }
  }, [navigate]);

  return (
    <div className="sidebar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="dashboard" className={({ isActive }) => (isActive ? 'nav-item-active' : 'nav-link')}>
            <i className="bi bi-grid-1x2-fill icon"></i>Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="class-management" className={({ isActive }) => (isActive ? 'nav-item-active' : 'nav-link')}>
            <i className="bi bi-person-workspace icon"></i>Class Management
          </NavLink>
        </li>
      </ul>
      <ul className="logout-nav-list">
        <li className="nav-item">
          <NavLink to="profile" className={({ isActive }) => (isActive ? 'nav-item-active' : 'nav-link')}>
            <i className="bi bi-person-circle icon"></i>Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item-active' : 'nav-link')}>
            <i className="bi bi-box-arrow-left icon"></i>Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashb-college-pocs-container">
      <h1 className="college-title">College of Computer Studies</h1>
      <span className="dashb-pocs-label">Dashboard</span>
    </div>
  );
}

export function ClassManagement() {
  return (
    <div className="dashb-students-container">
      <h1 className="college-title">EIE Implementing Subjects</h1>
      <div className="subjects-cont">
        <NavLink to="task-manage" className="subject-box">
          <div className="subject-header">
            <h2>PNC</h2>
          </div>
          <div className="subject-body">
            <p>BIT111</p>
          </div>
        </NavLink>
        <NavLink to="pnc/bcs311" className="subject-box">
          <div className="subject-header">
            <h2>PNC</h2>
          </div>
          <div className="subject-body">
            <p>BCS311</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

function Profile() {
  return <div>Profile Content</div>;
}

const CollegePocDashb = () => {
  return (
    <div className="collegepoc-page">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="class-management" element={<ClassManagement />} />
            <Route path="profile" element={<Profile />} />
            <Route path="class-management/task-manage" element={<TaskCreation />} />
            <Route path="class-management/task-details" element={<TaskDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default CollegePocDashb;
