import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CallToAction from '../CallToAction';

const OurStory = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <section className="py-24 bg-hihs-offwhite">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-hihs-accent font-bold tracking-[0.2em] uppercase text-sm block mb-4">{t('our_story.label')}</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-hihs-charcoal mb-8 leading-tight">
                            {t('our_story.title')}
                        </h1>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                {t('our_story.p1')}
                            </p>
                            <p>
                                {t('our_story.p2')}
                            </p>
                            <p>
                                {t('our_story.p3')}
                            </p>

                            <div className="my-12 p-8 bg-white border-l-4 border-hihs-accent shadow-sm rounded-r-sm">
                                <h3 className="text-xl font-bold text-hihs-charcoal mb-2">{t('our_story.why_us_title')}</h3>
                                <p className="text-gray-600">
                                    {t('our_story.why_us_content')}
                                </p>
                            </div>

                            <p className="font-medium text-hihs-charcoal text-xl">
                                {t('our_story.tagline')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
};

export default OurStory;
