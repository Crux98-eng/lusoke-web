
import './App.css';
import { useRef } from 'react';
import Home from './pages/home';
import Services from './pages/services';
import videobg from "./assets/videos/videobg.mp4";
import HomeIcon from '@mui/icons-material/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './pages/footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Onepercent from './pages/onePercent';

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
    </Routes>
  );
}

export default App;
