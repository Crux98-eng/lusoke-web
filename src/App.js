
import './App.css';
import { useRef } from 'react';
import Home from './pages/home';
import Services from './pages/services';
import videobg from "./assets/videos/videobg.mp4";
import HomeIcon from '@mui/icons-material/Home';
import About from './pages/about';
import Contact from './pages/contact';
import book from './assets/images/book.jpg'
import Footer from './pages/footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Onepercent from './pages/onePercent';
import MoreAbout from './moreAbout';

function FullPageLayout() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const ServicesRef = useRef();
  const ContactRef = useRef();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <video src={videobg} autoPlay muted loop></video>

      <nav className='navigation-container'>
        <button className='navbtn' onClick={() => scrollToSection(homeRef)}>
          <HomeIcon />
        </button>
        <button className='navbtn' onClick={() => scrollToSection(aboutRef)}>About</button>
        <button className='navbtn' onClick={() => scrollToSection(ServicesRef)}>Services</button>
        <button className='navbtn' onClick={() => scrollToSection(ContactRef)}>Contact</button>
      </nav>
      {/* home section which is the defaullt section */}
      <section ref={homeRef} className='home'>
        <Home />
      </section>

      {/* about section */}
      <section ref={aboutRef} className='about'>
        <About />
      </section>

      {/* our services */}
      <section ref={ServicesRef} className='servicesSection'>
        <h1>SERVICES</h1>
        <Services />
      </section>
       {/* book section */}
 <section className='book-section'>
          <div className='book-container'>
            <img 
            src={book}
            style={{width:400,height:400,borderRadius:15}}
            />

          </div>
          <div className='book-text'>
          <p>
          One Percent is a transformational book by Christopher Lusoke scheduled to be released in October.
          This powerful piece explores the art and discipline of goal setting — and more importantly — goal hitting.
          Built from real-life strategies and high-performance habits, this book is written to help
          individuals unlock daily actions that lead to long-term success
          </p>
          </div>
      </section>
      {/* contact section */}
      <section ref={ContactRef} className='contact-section'>
        <h1 className='contact-header'> Email us for more information</h1>
        <Contact />
      </section>
     
      
      {/* footer  */}
      <footer className='footer-section'>
        <Footer />
      </footer>
    </div>
  );
}

function App() {
  const location = useLocation();

  return (
    <Routes>
      {/* rendering the default sections */}
      <Route path="/" element={<FullPageLayout />} />
      {/* an extra page for further deals */}
      <Route path="/onePercent" element={<Onepercent />} />
      <Route path="/moreAbout" element={<MoreAbout />} />
    </Routes>
  );
}

export default App;
