import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Blogs from './components/Blogs';

function App() {
  return (
    <div  >

        <BrowserRouter>
          <Routes>

            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>     
        </BrowserRouter>
      
    </div>
  );
}

export default App;
