import React from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800">
            <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold tracking-tighter text-neutral-900">
                    Portfolio.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-indigo-600' : 'text-neutral-600 hover:text-neutral-900'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/Portfolio/portfolio.pdf"
                        download="Resume_Portfolio.pdf"
                        className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all"
                    >
                        <Download className="w-4 h-4" />
                        <span>Download Portfolio</span>
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-neutral-600">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-neutral-50 border-b border-neutral-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium ${location.pathname === link.path ? 'text-indigo-600' : 'text-neutral-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/Portfolio/portfolio.pdf"
                                download="Resume_Portfolio.pdf"
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold w-full"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download Portfolio</span>
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
