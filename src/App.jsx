import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';

import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-indigo-500 selection:text-white">
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <Hero />
        <PortfolioGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
