import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="py-16 md:py-24 bg-hihs-offwhite overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-24">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-24"
                >
                    <span className="text-hihs-accent font-semibold tracking-widest uppercase text-sm">
                        {t('about.section_label')}
                    </span>
                    <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-hihs-charcoal leading-tight max-w-2xl">
                        {t('about.title_building')} <br />
                        {t('about.title_one_home')}
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">

                    {/* Left Column: Text & Values */}
                    <div className="space-y-8 md:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-bold text-hihs-charcoal mb-4">
                                {t('about.legacy_title')}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                <Trans i18nKey="about.legacy_text_1" components={[<span className="font-semibold text-hihs-charcoal" key="0"></span>]} />
                                <br /><br />
                                {t('about.legacy_text_2')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-8 rounded-sm shadow-md border-l-4 border-hihs-accent"
                        >
                            <h4 className="text-xl font-bold text-hihs-charcoal mb-6">{t('about.why_choose_title')}</h4>
                            <ul className="space-y-4">
                                {[
                                    t('about.reason_1'),
                                    t('about.reason_2'),
                                    t('about.reason_3'),
                                    t('about.reason_4')
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-hihs-accent flex-shrink-0" size={20} />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual Collage */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative grid grid-cols-2 gap-4"
                    >
                        {/* Decorative Element */}
                        <div className="absolute -top-10 -right-10 w-full h-full bg-hihs-charcoal/5 -z-10 rounded-sm transform rotate-3" />

                        <div className="space-y-4 mt-12">
                            <img
                                src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800&auto=format&fit=crop"
                                alt="Detail work"
                                className="w-full h-64 object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform duration-500"
                            />
                            <div className="bg-hihs-charcoal text-white p-6 rounded-sm shadow-lg text-center">
                                <span className="block text-4xl font-bold text-hihs-accent mb-1">35+</span>
                                <span className="uppercase text-xs tracking-widest text-gray-400">{t('about.years_exp')}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-hihs-accent text-white p-6 rounded-sm shadow-lg text-center">
                                <span className="block text-4xl font-bold mb-1">1k+</span>
                                <span className="uppercase text-xs tracking-widest text-white/80">{t('about.projects_completed')}</span>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop"
                                alt="Interior texture"
                                className="w-full h-80 object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
