import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Users, Globe, BarChart } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import ContactCTA from '../components/ContactCTA';

const CaseStudies = () => {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const icons = [Layout, Users, Globe, BarChart];

    return (
        <main className="min-h-screen bg-background text-primary">
            {/* Hero Section */}
            <section className="container mx-auto px-4 md:px-8 py-20 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        {t.caseStudies.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted leading-relaxed">
                        {t.caseStudies.subtitle}
                    </p>
                </motion.div>
            </section>

            {/* Global Overview & Methods */}
            <section className="bg-secondary/20 py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-16"
                    >
                        {/* Approach Text */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h2 className="text-3xl font-bold">{t.caseStudies.landing.overviewTitle}</h2>
                            <p className="text-lg text-muted leading-relaxed">
                                {t.caseStudies.landing.overviewText}
                            </p>
                            
                            <h3 className="text-2xl font-bold pt-8">{t.caseStudies.landing.environmentTitle}</h3>
                            <p className="text-lg text-muted leading-relaxed">
                                {t.caseStudies.landing.environmentText}
                            </p>
                        </motion.div>

                        {/* Methods Grid */}
                        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {t.caseStudies.landing.methods.map((method, index) => {
                                const Icon = icons[index % icons.length];
                                return (
                                    <div key={index} className="bg-background p-6 rounded-2xl border border-secondary shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-bold text-lg mb-2">{method.title}</h4>
                                        <p className="text-sm text-muted">{method.desc}</p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="container mx-auto px-4 md:px-8 py-24">
                <motion.div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {Object.values(t.caseStudies.items).map((project, index) => (
                        <Link 
                            to={`/case-studies/${project.id}`} 
                            key={project.id}
                            className="group relative bg-secondary/10 rounded-3xl overflow-hidden border border-secondary hover:border-accent/50 transition-all duration-300"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img 
                                    src={project.heroImage} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-background rounded-full border border-secondary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex items-center text-sm text-muted font-medium mb-4">
                                    <span>{project.role}</span>
                                    <span className="mx-2">•</span>
                                    <span>{project.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                    Read Case Study <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </section>

             {/* Global CTA */}
             <ContactCTA />
        </main>
    );
};

export default CaseStudies;
