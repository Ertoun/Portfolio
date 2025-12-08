import React from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800">
            <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                <div className="text-2xl font-bold tracking-tighter text-neutral-900">
                    Portfolio.
                </div>
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
                            <a href="#" className="text-lg font-medium">Work</a>
                            <a href="#" className="text-lg font-medium">About</a>
                            <a href="#" className="text-lg font-medium">Contact</a>
                            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold w-full">
                                <Download className="w-4 h-4" />
                                <span>Download PDF</span>
                            </button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
