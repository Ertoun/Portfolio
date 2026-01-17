import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Trophy, Users, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const icons = {
    results: TrendingUp,
    leadership: Users,
    scale: Trophy,
    product: Zap
};

const ImpactSection = () => {
    const { t } = useLanguage();
    const [activeTabId, setActiveTabId] = useState('results');
    const [isPaused, setIsPaused] = useState(false);

    const tabs = t.impact.tabs || [];
    const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setActiveTabId(prev => {
                const currentIndex = tabs.findIndex(tab => tab.id === prev);
                const nextIndex = (currentIndex + 1) % tabs.length;
                return tabs[nextIndex].id;
            });
        }, 8500);

        return () => clearInterval(timer);
    }, [isPaused, tabs]);

    if (!activeTab) return null;

    return (
        <section className="py-24 bg-secondary text-primary relative overflow-hidden w-full">
             {/* Background elements */}
             <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 transform origin-top-right blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col gap-16">
                
                {/* Row 1: Static Header Section */}
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                        {t.impact.title}
                    </h2>
                    <p className="text-xl text-muted font-light leading-relaxed mb-8">
                        {t.impact.subtitle}
                    </p>
                    <Link 
                        to="/case-studies" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
                    >
                        {t.impact.sectionCta}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Row 2: Content Area (Split Layout) */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:h-[580px] h-auto">
                    
                    {/* Left Column (Small): Stats & Details */}
                    {/* Width fixed to ~30-35% on large screens to mimic Stripe */}
                    <div className="w-full lg:w-[350px] flex-shrink-0 flex flex-col border-l-2 border-primary/10 pl-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                                className="flex flex-col gap-4"
                            >
                                <div className="relative">
                                    <div className="absolute left-[-34px] top-0 h-8 w-[2px] bg-accent" />
                                    <h3 className="text-2xl font-bold text-primary mb-1">
                                        {activeTab.title}
                                    </h3>
                                    <p className="text-muted leading-normal text-sm">
                                        {activeTab.description}
                                    </p>
                                </div>

                                <div className="mt-5 pt-5 border-t border-primary/10 flex flex-col gap-5">
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="relative">
                                            <div className="absolute left-[-34px] top-0 h-8 w-[2px] bg-accent" />
                                            <div className="text-2xl font-bold text-primary mb-1 tracking-tight">
                                                {activeTab.stat.value}
                                            </div>
                                            <div className="text-sm font-semibold text-muted">
                                                {activeTab.stat.label}
                                            </div>
                                        </div>
                                        
                                        {activeTab.stat2 && (
                                            <div className="relative">
                                                <div className="absolute left-[-34px] top-0 h-8 w-[2px] bg-accent" />
                                                <div className="text-2xl font-bold text-primary mb-1 tracking-tight">
                                                    {activeTab.stat2.value}
                                                </div>
                                                <div className="text-sm font-semibold text-muted">
                                                    {activeTab.stat2.label}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Methods / Tags Section */}
                                    {activeTab.tags && (
                                        <div className="pt-4 border-t border-primary/10 transition-opacity duration-[850ms] delay-100">
                                            <div className="relative mb-2">
                                                <div className="absolute left-[-34px] top-0 bottom-0 w-[2px] bg-accent" />
                                                <h4 className="text-sm font-bold text-primary">
                                                    {t.impact.tagsLabel}
                                                </h4>
                                            </div>
                                            <ul className="space-y-2">
                                                {activeTab.tags.map((tag, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-muted text-sm font-medium">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                        {tag}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column (Big): Visual Image */}
                    {/* Flex grow to fill remaining space. Aspect ratio needs to handle content well. */}
                    <Link 
                        to={activeTab.link || "/case-studies"}
                        className="w-full lg:flex-1 relative rounded-3xl overflow-hidden shadow-2xl bg-background group cursor-pointer block h-[400px] lg:h-auto"
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeTab.image}
                                src={activeTab.image}
                                alt={activeTab.title}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.35 }}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[850ms] group-hover:scale-105"
                            />
                        </AnimatePresence>
                        
                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                        
                        <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white z-20">
                             {icons[activeTab.id] && React.createElement(icons[activeTab.id], { size: 24 })}
                        </div>

                         <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col items-start justify-end">
                             <h3 className="text-2xl font-bold text-white mb-2 leading-tight opacity-90 transition-all duration-[350ms] transform group-hover:-translate-y-2">
                                {activeTab.imageCaption}
                            </h3>
                            
                            <span 
                                className="inline-flex items-center gap-2 text-white font-semibold text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[350ms] delay-75 pointer-events-none"
                            >
                                {t.impact.cta}
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Row 3: Navigation Tabs */}
                <div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-primary/10"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {tabs.map((tab) => {
                        const Icon = icons[tab.id] || Zap;
                        const isActive = activeTabId === tab.id;
                        
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTabId(tab.id)}
                                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-[850ms] text-left relative group overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50
                                    ${isActive 
                                        ? 'bg-background shadow-lg scale-[1.02] border border-transparent' 
                                        : 'hover:bg-primary/5 opacity-60 hover:opacity-100 border border-transparent'
                                    }
                                `}
                            >
                                {isActive && (
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                        <rect 
                                            width="100%" 
                                            height="100%" 
                                            rx="12" 
                                            className="stroke-primary/5 stroke-2 fill-none" 
                                        />
                                        <motion.rect
                                            width="100%" 
                                            height="100%" 
                                            rx="12" 
                                            className="stroke-accent stroke-2 fill-none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 8, ease: "linear" }}
                                        />
                                    </svg>
                                )}

                                <div className={`p-2 rounded-lg transition-colors relative z-10 ${isActive ? 'bg-accent text-white' : 'bg-secondary text-muted group-hover:text-primary'}`}>
                                    <Icon size={20} />
                                </div>
                                <span className={`font-semibold relative z-10 ${isActive ? 'text-primary' : 'text-muted group-hover:text-primary'}`}>
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default ImpactSection;
