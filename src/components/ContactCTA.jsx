import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ContactCTA = ({ id, className = "" }) => {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);
    
    // Fallback email if not in translations
    const email = t.contact?.email || 'hello@example.com';

    const handleCopy = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id={id} className={`container mx-auto px-4 md:px-8 pb-24 pt-24 ${className}`}>
            <div className="max-w-2xl mx-auto text-center p-10 md:p-16 bg-background rounded-2xl border border-secondary shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group/container">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary tracking-tight">
                    {t.contact.title}
                </h2>
                <p className="text-base md:text-lg text-muted text-center mb-10 max-w-lg mx-auto leading-relaxed">
                    {t.contact.description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a id='send-mail-button'
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-background rounded-full font-bold text-base hover:opacity-90 hover:scale-[1.02] transition-all shadow-md active:scale-95"
                    >
                        {t.contact.button}
                        <Mail className="w-5 h-5" />
                    </a>

                    <button id='copy-mail-button'
                        onClick={handleCopy}
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary/30 hover:bg-secondary/50 border border-secondary text-sm font-semibold rounded-full transition-all group relative overflow-hidden active:scale-95"
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
                                    <Check className="w-4 h-4" />
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
                                    <Copy className="w-4 h-4" />
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
