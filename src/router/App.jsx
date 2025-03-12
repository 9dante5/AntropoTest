import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../containers/LandingPage'
import Login from '../containers/Login'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/iniciarSesion" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App