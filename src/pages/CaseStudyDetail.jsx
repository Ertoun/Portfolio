import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { HashLink } from 'react-router-hash-link';
import ContactCTA from '../components/ContactCTA';

const CaseStudyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useLanguage();

    // Scroll to top on mount or id change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const caseStudy = t.caseStudies.items[id];

    // Handle invalid ID
    if (!caseStudy) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
                    <Link to="/case-studies" className="text-primary underline">Back to Case Studies</Link>
                </div>
            </div>
        );
    }

    // Determine Prev/Next Logic
    // Convert object items to array to find indices
    const itemKeys = Object.keys(t.caseStudies.items);
    const currentIndex = itemKeys.indexOf(id);
    const nextIndex = (currentIndex + 1) % itemKeys.length;
    const nextKey = itemKeys[nextIndex];
    const nextCaseStudy = t.caseStudies.items[nextKey];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className="min-h-screen bg-background text-primary">
            {/* Hero Image - Full Width */}
            <div className="w-full h-[50vh] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img 
                    src={caseStudy.heroImage} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 p-8 bg-gradient-to-t from-background to-transparent">
                    <div className="container mx-auto">
                        <Link to="/case-studies" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Case Studies
                        </Link>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-4"
                        >
                            {caseStudy.title}
                        </motion.h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-12">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                >
                    {/* Sidebar / Metadata */}
                    <motion.aside variants={itemVariants} className="lg:col-span-1 space-y-8">
                        <div className="p-6 bg-secondary/30 rounded-2xl border border-secondary">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Role</h3>
                                    <div className="flex items-center gap-2 font-medium">
                                        <User className="w-4 h-4 text-accent" />
                                        {caseStudy.role}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Duration</h3>
                                    <div className="flex items-center gap-2 font-medium">
                                        <Calendar className="w-4 h-4 text-accent" />
                                        {caseStudy.duration}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {caseStudy.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* Result Stats Preview (Mobile only, or repeated) */}
                         <div className="lg:hidden grid grid-cols-3 gap-4">
                            {caseStudy.result.stats.map((stat, i) => (
                                <div key={i} className="text-center p-3 bg-accent/5 rounded-xl border border-accent/10">
                                    <div className="text-xl font-bold text-accent">{stat.value}</div>
                                    <div className="text-[10px] text-muted">{stat.label}</div>
                                </div>
                            ))}
                         </div>
                    </motion.aside>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Challenge */}
                        <motion.section variants={itemVariants}>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-accent inline-block"></span>
                                {caseStudy.challenge.title}
                            </h2>
                            <p className="text-lg text-muted leading-relaxed">
                                {caseStudy.challenge.content}
                            </p>
                        </motion.section>

                        {/* Solution */}
                        <motion.section variants={itemVariants}>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-accent inline-block"></span>
                                {caseStudy.solution.title}
                            </h2>
                            <p className="text-lg text-muted leading-relaxed">
                                {caseStudy.solution.content}
                            </p>
                        </motion.section>

                        {/* Result */}
                        <motion.section variants={itemVariants}>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-accent inline-block"></span>
                                {caseStudy.result.title}
                            </h2>
                            <p className="text-lg text-muted leading-relaxed mb-8">
                                {caseStudy.result.content}
                            </p>
                            
                            {/* Key Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {caseStudy.result.stats.map((stat, i) => (
                                    <div key={i} className="p-6 bg-accent/5 rounded-2xl border border-accent/10 text-center">
                                        <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                                        <div className="text-sm font-medium text-muted">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    </div>
                </motion.div>

                {/* Next Project Navigation */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-10 border-t border-secondary"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-muted mb-2">{t.caseStudies.nextProject}</p>
                            <h3 className="text-2xl font-bold">{nextCaseStudy.title}</h3>
                        </div>
                        <Link 
                            to={`/case-studies/${nextKey}`}
                            className="group flex items-center gap-4 px-8 py-4 bg-secondary/50 hover:bg-secondary rounded-full transition-all"
                        >
                             <span>{t.caseStudies.readStory}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>

                {/* Global CTA */}
                <ContactCTA />
            </div>
        </main>
    );
};

export default CaseStudyDetail;
