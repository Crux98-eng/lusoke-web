
import './App.css';
import { useRef } from 'react';
import Home from './pages/home'
import Services from './pages/services'
import videobg from "./assets/videos/videobg.mp4"
import HomeIcon from '@mui/icons-material/Home';
import About from './pages/about'
import Contact from './pages/contact'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const ServicesRef = useRef();
  const ContactRef = useRef();
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
   const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <div className="App">
    
      <video src={videobg} autoPlay muted loop></video>
   
      <nav className='navigation-container'>
        <button className='navbtn' onClick={() => { scrollToSection(homeRef) }}>

        <HomeIcon color="#ffff" />
        </button>
        <button className='navbtn' onClick={() => { scrollToSection(aboutRef) }}>About</button>
        <button className='navbtn' onClick={() => { scrollToSection(ServicesRef) }}>Services</button>
        <button className='navbtn' onClick={() => { scrollToSection(ContactRef) }}>Contact</button>


      </nav>
      <section ref={homeRef} className='home'>
        <Home />
      </section>

      {/* about section */}
      <section ref={aboutRef} className='about'>
        <About />
      </section>

      {/* services section */}
      <section ref={ServicesRef} className='servicesSection'>
        <h1>SERVICES</h1>
        <Services />
      </section>

      {/* contact section */}
      <section ref={ContactRef} className='contact-section'>
        <h1 className='contact-header'>Email us for more information</h1>
       <Contact />
      </section>
    </div>
  );
}

export default App;
