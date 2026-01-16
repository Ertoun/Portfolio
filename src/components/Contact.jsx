import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-background" id="contact">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">{t.contact.title}</h2>
                <p className="text-xl text-muted mb-12">
                    {t.contact.description}
                </p>
                <a
                    href="mailto:ertan.ozaydin@gmail.com"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors text-lg"
                >
                    <Mail className="w-5 h-5" />
                    {t.contact.button}
                </a>
            </div>
        </section>
    );
};

export default Contact;
