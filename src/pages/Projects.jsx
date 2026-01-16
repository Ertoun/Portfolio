import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import PortfolioGrid from '../components/PortfolioGrid';
// import portfolioPdf from '../assets/portfolio.pdf';

const Projects = () => {
    const { t } = useLanguage();

    return (
        <main className="container mx-auto px-4 md:px-8 py-20 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t.projects.title}</h1>
                <p className="text-xl text-muted max-w-2xl">
                    {t.projects.subtitle}
                </p>
            </motion.div>

            <PortfolioGrid />
        </main>
    );
};

export default Projects;
