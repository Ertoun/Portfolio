import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Github, ExternalLink, Zap, Users, User } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Works = () => {
    const { t, language } = useLanguage();
    const { title, subtitle, vibeBadge, soloBadge, collabBadge, githubLabel, projects } = t.works;

    return (
        <main className="min-h-screen bg-background text-primary">

            {/* ── Hero ── */}
            <section className="container mx-auto px-4 md:px-8 py-20 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl">
                        {subtitle}
                    </p>
                </motion.div>
            </section>

            {/* ── Vibe coding context banner ── */}
            <section className="bg-accent/5 border-y border-accent/20 py-6">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex items-start gap-4 max-w-3xl">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent mt-0.5">
                            <Zap className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-primary mb-1">{vibeBadge}</p>
                            <p className="text-sm text-muted leading-relaxed">
                                {language === 'fr'
                                    ? "Ces projets ont été réalisés avec Antigravity (IA). En tant qu'UX Designer & Manager, je supervise chaque décision de design et contrôle la base de code — l'IA m'aide à aller plus vite, pas à décider à ma place."
                                    : "These projects were built using Antigravity (AI). As a UX Designer & Manager, I own every design decision and oversee the codebase — AI accelerates my workflow, it doesn't replace my judgement."
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Projects grid ── */}
            <section className="container mx-auto px-4 md:px-8 py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <motion.article
                            key={project.id}
                            variants={itemVariants}
                            className="group relative flex flex-col bg-secondary/10 rounded-3xl border border-secondary hover:border-accent/40 transition-all duration-300 overflow-hidden"
                        >
                            {/* Card body */}
                            <div className="flex flex-col flex-1 p-8 gap-5">

                                {/* Badges row */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                                        <Zap className="w-3 h-3" />
                                        {vibeBadge}
                                    </span>
                                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${
                                        project.solo
                                            ? 'bg-background border-secondary text-muted'
                                            : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
                                    }`}>
                                        {project.solo
                                            ? <><User className="w-3 h-3" />{soloBadge}</>
                                            : <><Users className="w-3 h-3" />{collabBadge}</>
                                        }
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h2>

                                {/* Live URL */}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors duration-200 -mt-2 font-mono"
                                    >
                                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                                        {project.liveUrl.replace(/^https?:\/\//, '')}
                                    </a>
                                )}

                                {/* Description */}
                                <p className="text-base text-muted leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-background rounded-lg border border-secondary text-muted">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* GitHub button — only shown if repo is public */}
                                {project.githubUrl && (
                                <div className="pt-2">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary text-sm font-medium text-muted hover:text-primary hover:border-primary transition-colors duration-200"
                                    >
                                        <Github className="w-4 h-4" />
                                        {githubLabel}
                                        <ExternalLink className="w-3 h-3 opacity-50" />
                                    </a>
                                </div>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </section>

            {/* ── CTA ── */}
            <ContactCTA />
        </main>
    );
};

export default Works;
