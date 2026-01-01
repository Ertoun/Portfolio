import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    return (
        <main className="container mx-auto px-4 md:px-8 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">{t.projects.title}</h1>
                <p className="text-xl text-muted max-w-2xl mb-12">
                    {t.projects.subtitle}
                </p>
                <p className="text-xl text-muted max-w-2xl mb-12">
                    {t.projects.construction}
                </p>
            </motion.div>

            {/*
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholder for more projects - reusing structure implies consistency }
                <div className="bg-secondary rounded-2xl aspect-[4/3] flex items-center justify-center text-muted">
                    Project 1
                </div>
                <div className="bg-secondary rounded-2xl aspect-[4/3] flex items-center justify-center text-muted">
                    Project 2
                </div>
                <div className="bg-secondary rounded-2xl aspect-[4/3] flex items-center justify-center text-muted">
                    Project 3
                </div>
            </div>
            */}
        </main>
    );
};

export default Projects;
