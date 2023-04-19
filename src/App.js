import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Blog from './components/Blog';

function App() {
  return (
    <div  >

        <BrowserRouter>

          <Navbar/>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:title" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />

          </Routes>     
        </BrowserRouter>
      
    </div>
  );
}

export default App;
