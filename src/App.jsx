import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import ForgotPass from './pages/Forgot Pass/ForgotPass'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/forgot-password" element={<ForgotPass />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
