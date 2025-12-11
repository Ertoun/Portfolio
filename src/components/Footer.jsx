import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-neutral-100 bg-neutral-50">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-neutral-500 text-sm">
                    © {new Date().getFullYear()} Design Portfolio. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <a target="_blank" href="https://github.com/Ertoun" className="text-neutral-400 hover:text-indigo-600 transition-colors"><Github className="w-5 h-5" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/ertan-ozaydin/" className="text-neutral-400 hover:text-indigo-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a target="_blank" href="mailto:ertanozaydin@gmail.com" className="text-neutral-400 hover:text-indigo-600 transition-colors"><Mail className="w-5 h-5" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
