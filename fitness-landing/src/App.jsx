import React from 'react';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import Clients from './components/clients.jsx';

function App() {
  return (
    <div className=' bg-cover bg-center bg-no-repeat bg-[url("./assets/background.jpg")] relative'>
      <div className="bg-black bg-opacity-50 h-full w-full absolute top-0 left-0 z-0"></div>
      <div className="relative z-10 p-4 m-auto">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Clients />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
