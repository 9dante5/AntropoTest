import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../containers/LandingPage'
import Login from '../containers/Login'
import Dashboard from './Dashboart'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/iniciarSesion" element={<Login />} />
          <Route path="/dashboard/:name/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App