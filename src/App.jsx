import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ThemeSwitcher from './Components/ThemeSwitcher/ThemeSwitcher'; // Import ThemeSwitcher

const App = () => {
  return (
    <div>
      <Navbar />
      <ThemeSwitcher /> {/* Add ThemeSwitcher here */}
      <Hero />

      <div className='container'>
        <Title subtitle="Our Program" title="What We Offer" />
        <Programs />
        <About />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Contact />
      </div>
    </div>
  );
};

export default App;
