import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PortfolioGrid = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20" id="work">
            <div className="flex flex-col gap-20 md:gap-32">
                {t.projects.items.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                            index % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2 group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                             <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                            <span className="text-accent font-medium tracking-wide mb-2 uppercase text-sm">
                                {project.category}
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                                {project.title}
                            </h3>
                            <p className="text-muted text-lg leading-relaxed mb-8">
                                {project.description}
                            </p>
                            <button className="group flex items-center gap-2 px-6 py-3 bg-transparent border border-secondary text-primary rounded-full hover:bg-secondary transition-all font-medium">
                                View Case Study
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioGrid;
