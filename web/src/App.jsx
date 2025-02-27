import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Bars/Navbar';
import Shop from './pages/Shop';
import Search from './pages/Search';
import Footer from './components/Bars/Footer';

function App() {
  return (
    <div className="h-screen">
      <Router>
        {/* Navbar */}
        <div className='mt-5'>
          <Navbar />
        </div>

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/search' element={<Search />} />
        </Routes>

        {/* Footer */}
        <div className='mt-5'>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
