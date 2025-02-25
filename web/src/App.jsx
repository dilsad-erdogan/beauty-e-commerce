import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="h-screen">
      {/* Navbar */}
      <div className='m-5'>
        <Navbar />
      </div>

      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
