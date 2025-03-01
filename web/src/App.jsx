import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Bars/Navbar';
import Shop from './pages/Shop';
import Search from './pages/Search';
import Footer from './components/Bars/Footer';
import ContactUs from './pages/ContactUs';
import Order from './pages/Order';
import Service from './pages/Service';

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
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/service' element={<Service />} />
          <Route path='/order' element={<Order />} />
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
