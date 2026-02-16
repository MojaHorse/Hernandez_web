import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MasonryGallery from '../MasonryGallery';
import CallToAction from '../CallToAction';

const Gallery = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-20">
            <section className="bg-hihs-offwhite py-10 pt-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-hihs-accent font-bold tracking-[0.2em] uppercase text-sm block mb-4">{t('gallery.label')}</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-hihs-charcoal mb-6">
                            {t('gallery.title')}
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            {t('gallery.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            <MasonryGallery />

            <CallToAction />
        </div>
    );
};

export default Gallery;
