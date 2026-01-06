import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PracticeGrid from './components/PracticeGrid';
import ExpertiseCloud from './components/ExpertiseCloud';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="font-sans text-zinc-100 bg-zinc-950 selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeGrid />
        <ExpertiseCloud />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;