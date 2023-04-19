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
import BlogSearchParameter from './components/BlogSearchParameter';
import SetBlogSearchParameter from './components/SetBlogSearchParameter';

function App() {
  return (
    <div  >

        <BrowserRouter>

          <Navbar/>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:title" element={<Blog />} />
            <Route path="/blog" element={<BlogSearchParameter />} />
            <Route path="/setParameter" element={<SetBlogSearchParameter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />

          </Routes>     
        </BrowserRouter>
      
    </div>
  );
}

export default App;
