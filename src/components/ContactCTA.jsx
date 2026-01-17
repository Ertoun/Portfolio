import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ContactCTA = ({ id, className = "" }) => {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);
    
    // Fallback email if not in translations
    const email = t.contact?.email || 'ertan.ozaydin@gmail.com';

    const handleCopy = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id={id} className={`container mx-auto px-4 md:px-8 pb-20 pt-20 ${className}`}>
            <div className="text-center p-12 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-3xl border border-white/5">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
                <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">{t.contact.description}</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background rounded-full font-bold text-lg hover:opacity-90 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                    >
                        {t.contact.button}
                        <Mail className="w-5 h-5" />
                    </a>

                    <button
                        onClick={handleCopy}
                        className="inline-flex items-center gap-2 px-6 py-4 bg-secondary/50 hover:bg-secondary border border-secondary hover:border-accent/50 text-base font-semibold rounded-full transition-all group relative overflow-hidden"
                        title={t.contact.copy}
                    >
                        <AnimatePresence mode="wait">
                            {copied ? (
                                <motion.div
                                    key="check"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="flex items-center gap-2 text-green-500"
                                >
                                    <Check className="w-5 h-5" />
                                    <span>{t.contact.copied}</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="copy"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="flex items-center gap-2 text-muted group-hover:text-primary"
                                >
                                    <Copy className="w-5 h-5" />
                                    <span>{email}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
