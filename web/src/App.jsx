import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Bars/Navbar';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="h-screen">
      {/* Navbar */}
      <div className='mt-5'>
        <Navbar />
      </div>

      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
