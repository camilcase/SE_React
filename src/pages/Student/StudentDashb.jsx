import { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import './StudentDashb.css';
import { Route, Routes, NavLink, useNavigate } from 'react-router-dom';

function Sidebar() {

    const navigate = useNavigate();

    const isMounted = useRef(false);

    useEffect(()=>{
      if(!isMounted.current){
        isMounted.current = true;
        navigate('/student/dashboard');
      }
    }, [navigate]);

    return (
      <div className="sidebar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to='dashboard' className={({isActive}) => (isActive ? 'nav-item-active' : 'nav-link')}>
              <i className="bi bi-grid-1x2-fill icon"></i>Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='classroom' className={({isActive}) => (isActive ? 'nav-item-active' : 'nav-link')}>
              <i className="bi bi-person-workspace icon"></i>Classroom
            </NavLink>
          </li>
        </ul>
        <ul className="logout-nav-list">
          <li className="nav-item">
            <NavLink to='profile' className={({isActive}) => (isActive ? 'nav-item-active' : 'nav-link')}>
              <i className="bi bi-person-circle icon"></i>Profile
            </NavLink>
          </li> 
          <li className="nav-item">
            <NavLink to='/' className={({isActive}) => (isActive ? 'nav-item-active' : 'nav-link')}>
              <i className="bi bi-box-arrow-left icon"></i>Logout
            </NavLink>
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
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="classroom" element={<Classroom />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default StudentDashb
