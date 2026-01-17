import React from 'react';
import Hero from '../components/Hero';
import ImpactSection from '../components/ImpactSection';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
    return (
        <main>
            <Hero />
            <ImpactSection />
            <ContactCTA id="contact" />
        </main>
    );
};

export default Home;
