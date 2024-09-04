import './App.css';
import Navbar from './navbar';
import Hero from './hero';
import JourneySection from './journey';
import SkillsSection from './skills';
import AboutSection from './about';
import Footer from './footer';
import SideBar from './sidebar';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    const location = window.location.href;
    console.log(location);
    ReactGA.pageview(location.pathname + location.search);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <Hero />
      <AboutSection />
      <JourneySection />
      <SkillsSection />
      <Footer />
    </div>
  );
}

export default App;
