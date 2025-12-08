import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-20">
            <div className="max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-8">
                        Designing experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">inspire</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">connect</span>.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-neutral-600 max-w-2xl leading-relaxed mb-12"
                >
                    Hello, I'm a UX Designer based in Paris. I specialize in crafting intuitive user interfaces and delightful digital products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <button className="px-8 py-4 bg-neutral-900 text-white rounded-full font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group">
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 border border-neutral-200 text-neutral-900 rounded-full font-semibold hover:bg-white hover:border-neutral-300 transition-all">
                        Get in touch
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
