import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CallToAction = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-hihs-accent text-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                        {t('cta.title')}
                    </h2>
                    <p className="mt-2 text-white/90 text-base sm:text-lg">
                        {t('cta.subtitle')}
                    </p>
                </div>
                <a href="/#contact" className="group bg-white text-hihs-accent px-8 py-4 rounded-sm font-bold tracking-wide hover:bg-hihs-charcoal hover:text-white transition-all shadow-xl flex items-center gap-2">
                    {t('cta.button')}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
};

export default CallToAction;
