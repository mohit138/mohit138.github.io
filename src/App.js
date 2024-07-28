import './App.css';
import Navbar from './navbar';
import Hero from './hero';
import JourneySection from './journey';
import SkillsSection from './skills';
import AboutSection from './about';
import Footer from './footer';
import SideBar from './sidebar';

function App() {
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
