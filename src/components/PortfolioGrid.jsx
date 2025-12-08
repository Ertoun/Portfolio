import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Brand Identity Redesign",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000",
    },
    {
        id: 2,
        title: "E-commerce Mobile App",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=2000",
    },
    {
        id: 3,
        title: "Eco-Friendly Packaging",
        category: "Print Design",
        image: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?q=80&w=1171",
    },
    {
        id: 4,
        title: "Finance Dashboard",
        category: "Product Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    },
];

const PortfolioGrid = () => {
    return (
        <section className="py-20" id="work">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Selected Work</h2>
                <a href="#" className="hidden md:flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700">
                    View all projects <ExternalLink className="w-4 h-4" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 mb-4 relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-500 mt-1">{project.category}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-medium">
                    View all projects <ExternalLink className="w-4 h-4" />
                </a>
            </div>
        </section>
    );
};

export default PortfolioGrid;
