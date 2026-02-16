import { motion } from 'framer-motion';
import { Palette, Hammer, Zap, Droplet, Grid3X3, Home, Package, Plug, Ruler } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: <Grid3X3 size={40} />,
            title: t('services.tile_flooring'),
            description: t('services.tile_desc')
        },
        {
            icon: <Hammer size={40} />,
            title: t('services.drywall'),
            description: t('services.drywall_desc')
        },
        {
            icon: <Palette size={40} />,
            title: t('services.painting'),
            description: t('services.painting_desc')
        },
        {
            icon: <Droplet size={40} />,
            title: t('services.plumbing'),
            description: t('services.plumbing_desc')
        },
        {
            icon: <Zap size={40} />,
            title: t('services.electrical'),
            description: t('services.electrical_desc')
        },
        {
            icon: <Home size={40} />,
            title: t('services.remodeling'),
            description: t('services.remodeling_desc')
        },
        {
            icon: <Package size={40} />,
            title: t('services.custom_closets'),
            description: t('services.custom_closets_desc')
        },
        {
            icon: <Plug size={40} />,
            title: t('services.appliance'),
            description: t('services.appliance_desc')
        },
        {
            icon: <Ruler size={40} />,
            title: t('services.carpentry'),
            description: t('services.carpentry_desc')
        }
    ];

    return (
        <section id="services" className="py-16 md:py-24 bg-hihs-offwhite">
            <div className="max-w-7xl mx-auto px-6 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-hihs-accent font-bold tracking-[0.2em] uppercase text-sm mb-3">{t('services.expertise_label')}</span>
                        <div className="w-12 h-1 bg-hihs-accent mb-6"></div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-hihs-charcoal mb-6">{t('services.title')}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        {t('services.description')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-4 md:p-8 bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-hihs-accent group"
                        >
                            <div className="text-hihs-accent mb-4 md:mb-6 bg-hihs-accent/5 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center group-hover:bg-hihs-accent group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-hihs-charcoal mb-2 md:mb-4">{service.title}</h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
