import './App.css';
import Navbar from './navbar';
import Hero from './hero';
import JourneySection from './journey';
import SkillsSection from './skills';
import AboutSection from './about';
import Footer from './footer';
import SideBar from './sidebar';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import MyDuck from './myDuck';
import { Route, Routes, useLocation } from 'react-router';

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.slice(1));
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay ensures DOM is ready
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <AboutSection />
      <JourneySection />
      <SkillsSection />
    </>
  );
}

function App() {

  useEffect(() => {
    const location = window.location.href;
    ReactGA.send({ hitType: "pageview", page: location })
  }, []);
  return (
    <div className="App">
      <Navbar />
      <SideBar />  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/my-duck" element={<MyDuck />} />
      </Routes>    
      <Footer />
    </div>
  );
}

export default App;
