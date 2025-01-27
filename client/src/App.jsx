import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { isMobile } from 'react-device-detect';
import HomePage_MobileView from './pages/Homepage_MobileView';
function App() {

  return (

    <Routes >
      <Route path='/' element={isMobile ? <HomePage_MobileView /> : <HomePage />} />
    </Routes>

  )
}

export default App
