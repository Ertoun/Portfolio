import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
// import PDFViewer from '../components/PDFViewer';
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
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">{t.projects.title}</h1>
                <p className="text-xl text-muted max-w-2xl mb-8">
                    {t.projects.subtitle}
                </p>
                <p className="text-xl text-muted max-w-5xl mb-8">
                    {t.projects.construction}
                </p>
            </motion.div>

            {/*
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                 <PDFViewer file={portfolioPdf} title="Portfolio Presentation" />
            </motion.div>
            */}
        </main>
    );
};

export default Projects;
