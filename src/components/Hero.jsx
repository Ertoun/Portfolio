import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-20">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-8">
                        {t.hero.titlePlain1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">{t.hero.titleHighlight1}</span>{t.hero.titlePlain2}<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">{t.hero.titleHighlight2}</span>{t.hero.titlePlain3}
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed mb-12"
                >
                    {t.hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    {/* <Link to="/projects" className="px-8 py-4 bg-neutral-900 text-white rounded-full font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group">
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link> */}
                    <HashLink smooth to="/#contact" className="px-8 py-4 border border-secondary text-primary rounded-full font-semibold hover:bg-secondary transition-all flex items-center justify-center">
                        {t.hero.cta}
                    </HashLink>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
