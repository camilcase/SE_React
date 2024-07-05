import Header from '../../components/Header';
import './CollegePocDashb.css';
import { Route, Routes, Link } from 'react-router-dom';

function Sidebar() {
    return (
      <div className="sidebar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to='/collegepoc-dashboard' className="nav-link" activeClassName='sample'>
              <i className="bi bi-grid-1x2-fill icon"></i>Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/collegepoc-dashboard/class-management' className="nav-link">
              <i className="bi bi-person-workspace icon"></i>Class Management
            </Link>
          </li>
        </ul>
        <ul className="logout-nav-list">
          <li className="nav-item">
            <Link to='/collegepoc-dashboard/profile' className="nav-link">
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
      <div className="dashb-college-pocs-container">
        <h1 className="college-title">College of Computer Studies</h1>
        <span className="dashb-pocs-label">Dashboard</span>
      </div>
    )
  }
  
  export function ClassManagement() {
    return (
        <div className="dashb-college-pocs-container">
            <h1 className="college-title">EIE Implementing Subjects</h1>
            {/* <span className="active-pocs-label">Class</span> */}
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
              <Route path="/" element={<Dashboard />} />
              <Route path="class-management" element={<ClassManagement />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
  )
}

export default CollegePocDashb
