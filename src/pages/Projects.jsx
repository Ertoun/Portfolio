import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <main className="container mx-auto px-4 md:px-8 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">All Projects</h1>
                <p className="text-xl text-neutral-600 max-w-2xl mb-12">
                    A collection of my work in UX/UI design, branding, and development.
                </p>
                <p className="text-xl text-neutral-600 max-w-2xl mb-12">
                    This section is currently under construction. Please check back soon for updates!
                </p>
            </motion.div>

            {/*
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholder for more projects - reusing structure implies consistency }
                <div className="bg-neutral-100 rounded-2xl aspect-[4/3] flex items-center justify-center text-neutral-400">
                    Project 1
                </div>
                <div className="bg-neutral-100 rounded-2xl aspect-[4/3] flex items-center justify-center text-neutral-400">
                    Project 2
                </div>
                <div className="bg-neutral-100 rounded-2xl aspect-[4/3] flex items-center justify-center text-neutral-400">
                    Project 3
                </div>
            </div>
            */}
        </main>
    );
};

export default Projects;
