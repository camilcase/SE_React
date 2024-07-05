import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import ForgotPass from './pages/Forgot Pass/ForgotPass'
import PocHeadDashb from './pages/PocHead/PocHeadDashb'
import CollegePocDashb from './pages/CollegePoc/CollegePocDashb'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/admin-dashboard/*" element={<PocHeadDashb />} />
        <Route path="/collegepoc-dashboard/*" element={<CollegePocDashb />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
