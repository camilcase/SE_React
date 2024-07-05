import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './PocHeadDashb.css';

function Header() {
    return (
      <div className="header">
        <div className="header-left">
          <div className="logo-container">
            <div className="logo"></div>
            <span className="title">EIEMS</span>
          </div>
        </div>
        <div className="header-right">
          <i className="bi bi-bell icon"></i>
        </div>
      </div>
    );
  }

  function Sidebar({ setActiveComponent }) {
    return (
      <div className="sidebar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to='/admin-dashboard' className="nav-link" onClick={() => setActiveComponent('Dashboard')}>
              <i className="bi bi-grid-1x2-fill icon"></i>Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/admin-dashboard/active-college-pocs' className="nav-link" onClick={() => setActiveComponent('ActiveCollegePOCs')}>
              <i className="bi bi-person-workspace icon"></i>Active College POCs
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/admin-dashboard/implementing-subjects' className="nav-link" onClick={() => setActiveComponent('ImplementingSubjects')}>
              <i className="bi bi-book-fill icon"></i>Implementing Subjects
            </Link>
          </li>
        </ul>
        <ul className="logout-nav-list">
          <li className="nav-item">
            <Link to='/admin-dashboard/profile' className="nav-link">
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
    return <div>Dashboard Content</div>;
  }
  
  function ActiveCollegePOCs() {
    return <div>Active College POCs Content</div>;
  }
  
  function ImplementingSubjects() {
    return <div>Implementing Subjects Content</div>;
  }
  
  function Profile() {
    return <div>Profile Content</div>;
  }

function PocHeadDashb(){
    const [activeComponent, setActiveComponent] = useState('Dashboard');

    return (
      <div className="admin-page">
        <Header />
        <div className="main-layout">
          <Sidebar setActiveComponent={setActiveComponent} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="active-college-pocs" element={<ActiveCollegePOCs />} />
              <Route path="implementing-subjects" element={<ImplementingSubjects />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    );
}

export default PocHeadDashb;