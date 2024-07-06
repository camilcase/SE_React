import { useEffect, useRef } from 'react';
import { Route, Routes, NavLink, useNavigate} from 'react-router-dom';
import './PocHeadDashb.css';
import Header from '../../components/Header';
import Table from './ActivePocsTable';

const data = [
  { no: 1, code: 'BIT323k', course: 'Advanced Software Engineering', yearLevel: '3rd Year', assignedPOC: 'JUNAR DANILA' },
  { no: 2, code: 'BCS323k', course: 'Software Engineering 2', yearLevel: '3rd Year', assignedPOC: 'JUNAR DANILA' },
  { no: 1, code: 'BIT323k', course: 'Advanced Software Engineering', yearLevel: '3rd Year', assignedPOC: 'JUNAR DANILA' },
  { no: 2, code: 'BCS323k', course: 'Software Engineering 2', yearLevel: '3rd Year', assignedPOC: 'JUNAR DANILA' },
  { no: 1, code: 'BIT323k', course: 'Advanced Software Engineering', yearLevel: '3rd Year', assignedPOC: 'JUNAR DANILA' },
  { no: 2, code: 'BCS323k', course: 'Software Engineering 2', yearLevel: '3rd Year', assignedPOC: 'JUNAR DANILA' },
  { no: 2, code: 'BCS323k', course: 'Software Engineering 2', yearLevel: '3rd Year', assignedPOC: 'JUNAR DANILA' },{ no: 1, code: 'BIT323k', course: 'Advanced Software Engineering', yearLevel: '3rd Year', assignedPOC: 'JUNAR DANILA' },
  { no: 2, code: 'BCS323k', course: 'Software Engineering 2', yearLevel: '3rd Year', assignedPOC: 'JUNAR DANILA' },

];

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
            <NavLink to='dashboard' className={({isActive}) => (isActive ? 'nav-item-active' : 'nav-link')}>
              <i className="bi bi-grid-1x2-fill icon"></i>Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='active-college-pocs' className={({isActive}) => (isActive ? 'nav-item-active' : 'nav-link')}>
              <i className="bi bi-person-workspace icon"></i>Active College POCs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='implementing-subjects' className={({isActive}) => (isActive ? 'nav-item-active' : 'nav-link')}>
              <i className="bi bi-book-fill icon"></i>Implementing Subjects
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
            <Table data={data}/>
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
