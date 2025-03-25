import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Audio from './pages/Audio'
import Sidebar from './components/Sidebar'
import Signup from './components/Signup'

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/audio' element={<Audio />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
