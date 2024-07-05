import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import ForgotPass from './pages/Forgot Pass/ForgotPass'
import PocHeadDashb from './pages/PocHead/PocHeadDashb'
import CollegePocDashb from './pages/CollegePoc/CollegePocDashb'
import StudentDashb from './pages/Student/StudentDashb'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/pochead/*" element={<PocHeadDashb />} />
        <Route path="/collegepoc/*" element={<CollegePocDashb />} />
        <Route path="/student/*" element={<StudentDashb />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
