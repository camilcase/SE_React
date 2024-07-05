import { useEffect, useRef } from 'react';
import { Route, Routes, NavLink, useNavigate} from 'react-router-dom';
import './PocHeadDashb.css';
import Header from '../../components/Header';

// function Header() {
//     return (
//       <div className="header">
//         <div className="header-left">
//           <div className="logo-container">
//             <div className="logo"></div>
//             <span className="title">EIEMS</span>
//           </div>g//         </div>
//         <div className="header-right">
//           <i className="bi bi-bell icon"></i>
//         </div>
//       </div>
//     );
//   }

  function Sidebar() {

    const navigate = useNavigate();

    const isMounted = useRef(false);

    useEffect(()=>{
      if(!isMounted.current){
        isMounted.current = true;
        navigate('/pochead/dashboard');
      }
    }, [navigate]);

    return (
      <div className="sidebar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to='dashboard' className="nav-link">
              <i className="bi bi-grid-1x2-fill icon"></i>Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='active-college-pocs' className="nav-link" >
              <i className="bi bi-person-workspace icon"></i>Active College POCs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='implementing-subjects' className="nav-link">
              <i className="bi bi-book-fill icon"></i>Implementing Subjects
            </NavLink>
          </li>
        </ul>
        <ul className="logout-nav-list">
          <li className="nav-item">
            <NavLink to='profile' className="nav-link">
              <i className="bi bi-person-circle icon"></i>Profile
            </NavLink>
          </li> 
          <li className="nav-item">
            <NavLink to='/' className="nav-link">
              <i className="bi bi-box-arrow-left icon"></i>Logout
            </NavLink>
          </li>  
        </ul>
      </div>
    );
  }

  function Dashboard() {
    return (
      <div className="active-college-pocs-container">
        <h1 className="college-title">College of Computer Studies</h1>
        <span className="active-pocs-label">Dashboard</span>
      </div>
    )
  }
  
  export function ActiveCollegePOCs() {
    return (
        <div className="active-college-pocs-container">
            <h1 className="college-title">College of Computer Studies</h1>
            <span className="active-pocs-label">Active College POCs</span>
        </div>
    );
  }
  
  function ImplementingSubjects() {
    return (
      <div className="active-college-pocs-container">
          <h1 className="college-title">College of Computer Studies</h1>
          <span className="active-pocs-label">Implementing Subjects</span>
      </div>
  );
  }
  
  function Profile() {
    return <div>Profile Content</div>;
  }

function PocHeadDashb(){
  
    return (
      <div className="admin-page">
        <Header />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
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
