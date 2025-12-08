import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-20 bg-white" id="contact">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">Let's work together.</h2>
                <p className="text-xl text-neutral-600 mb-12">
                    I'm currently available for freelance projects and open to full-time opportunities.
                </p>
                <a
                    href="mailto:ertan.ozaydin@gmail.com"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors text-lg"
                >
                    <Mail className="w-5 h-5" />
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
