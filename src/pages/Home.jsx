import React from 'react';
import Hero from '../components/Hero';
import PortfolioGrid from '../components/PortfolioGrid';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main className="container mx-auto px-4 md:px-8">
            <Hero />
            <PortfolioGrid />
            <Contact />
        </main>
    );
};

export default Home;
