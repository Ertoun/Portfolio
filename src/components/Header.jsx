import React from 'react';
import { Menu, X, Download, FileText, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();
    const { t, language, toggleLanguage } = useLanguage();

    const links = [
        { name: t.header.home, path: '/' },
        { name: t.header.projects, path: '/projects' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-secondary">
            <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold tracking-tighter text-primary">
                    Portfolio.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-muted hover:text-primary'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <ThemeToggle />

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 text-sm font-medium text-muted hover:text-primary transition-colors"
                    >
                        <Globe className="w-4 h-4" />
                        <span>{language === 'en' ? 'FR' : 'EN'}</span>
                    </button>

                    <a
                        href="/Portfolio/portfolio.pdf"
                        download="portfolio.pdf"
                        className="flex items-center gap-2 px-5 py-2.5 bg-primary text-background rounded-full text-sm font-semibold hover:opacity-90 transition-all"
                    >
                        <Download className="w-4 h-4" />
                        <span>{t.header.downloadPortfolio}</span>
                    </a>
                    <a
                        href="/Portfolio/resume_UX_Designer.pdf"
                        download="resume_UX_Designer.pdf"
                        className="flex items-center gap-2 px-5 py-2.5 bg-background border border-secondary text-primary rounded-full text-sm font-semibold hover:bg-secondary transition-all"
                    >
                        <FileText className="w-4 h-4" />
                        <span>{t.header.downloadResume}</span>
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 text-sm font-medium text-muted"
                    >
                        <Globe className="w-4 h-4" />
                        <span>{language === 'en' ? 'FR' : 'EN'}</span>
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-muted">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-secondary overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium ${location.pathname === link.path ? 'text-accent' : 'text-muted'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/Portfolio/portfolio.pdf"
                                download="resume_portfolio.pdf"
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold w-full"
                            >
                                <Download className="w-4 h-4" />
                                <span>{t.header.downloadPortfolio}</span>
                            </a>
                            <a
                                href="/Portfolio/resume_UX_Designer.pdf"
                                download="resume_UX_Designer.pdf"
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-background border border-secondary text-primary rounded-full text-sm font-semibold w-full"
                            >
                                <FileText className="w-4 h-4" />
                                <span>{t.header.downloadResume}</span>
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
