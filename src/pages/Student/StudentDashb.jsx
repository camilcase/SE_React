import { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import './StudentDashb.css';
import { Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import './Tasks';
import Tasks from './Tasks';
import TaskDetails from './TaskDetails';

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
        <h1 className="college-title">Monthly EIE Performance Summary</h1>
        <span className="dashb-studs-label">Dashboard</span>
      </div>
    );
  }

  export function Classroom() {
    return (
      <div className="dashb-students-container">
            <h1 className="college-title">EIE Implementing Subjects</h1>
            <div className='subjects-cont'>
                <NavLink to='subject' className='subject-box'>
                    <div className='subject-header'>
                        <h2>PNC</h2>
                        <span>BIT111</span>
                    </div>
                    <div className='subject-body'>
                        <p>Chin Borela</p>
                    </div>
                </NavLink>
                <NavLink to='quamet2' className='subject-box'>
                    <div className='subject-header'>
                        <h2>QUAMET 2</h2>
                        <span>BIT312</span>
                    </div>
                    <div className='subject-body'>
                        <p>Dennis Ignacio</p>
                    </div>
                </NavLink>
            </div>
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
              <Route path='classroom/subject' element={<Tasks/>}/>
              <Route path="classroom/subject/:id" element={<TaskDetails />} />

            </Routes>
          </div>
        </div>
      </div>
  );
}

export default StudentDashb

