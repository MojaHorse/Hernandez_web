import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                    alt="Luxury Interior"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative h-full w-full max-w-7xl mx-auto px-6 lg:px-24 flex flex-col justify-center text-white py-20 pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-1 w-12 bg-hihs-accent"></div>
                        <span className="uppercase tracking-[0.2em] text-sm font-medium text-gray-200">
                            {t('hero.est')}
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
                        {t('hero.crafting')} <span className="text-hihs-accent">{t('hero.exceptional')}</span> <br />
                        {t('hero.living_spaces')}
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mb-10">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-hihs-accent text-white font-bold tracking-wider rounded-sm hover:bg-white hover:text-hihs-charcoal transition-all duration-300 text-center shadow-lg"
                        >
                            {t('hero.start_project')}
                        </a>
                        <a
                            href="#gallery"
                            className="px-8 py-4 border border-white text-white font-bold tracking-wider rounded-sm hover:bg-white hover:text-hihs-charcoal transition-all duration-300 text-center backdrop-blur-sm"
                        >
                            {t('hero.view_portfolio')}
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest opacity-70">{t('hero.scroll')}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
