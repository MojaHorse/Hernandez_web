import { motion } from 'framer-motion';
import { Send, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ServiceMap from './ServiceMap';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <section id="contact" className="py-6 lg:py-10 bg-hihs-charcoal text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-hihs-accent font-semibold tracking-widest uppercase text-sm">
                                {t('contact.get_in_touch')}
                            </span>
                            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                                {t('contact.ready_start')} <br />
                                <span className="text-gray-400">{t('contact.next_project')}</span>
                            </h2>
                            <p className="mt-6 text-gray-400 text-base md:text-lg max-w-md">
                                {t('contact.description')}
                            </p>

                            <div className="mt-10 md:mt-12 space-y-6 md:space-y-8">
                                {/* ... existing contact details ... */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-white/10 rounded-sm group-hover:bg-hihs-accent transition-colors shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">{t('contact.call_us')}</h4>
                                        <a href="tel:6892932987" className="text-gray-400 hover:text-white transition-colors">
                                            (689) 293-2987
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-white/10 rounded-sm group-hover:bg-hihs-accent transition-colors shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">{t('contact.email_us')}</h4>
                                        <a href="mailto:info@flrepairmen.com" className="text-gray-400 hover:text-white transition-colors">
                                            info@flrepairmen.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Map Section - Mobile: Stacked, Desktop: Below Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-full h-[300px] md:h-[350px] rounded-sm overflow-hidden border border-white/10"
                        >
                            <ServiceMap />
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white text-hihs-charcoal p-6 md:p-8 lg:p-12 rounded-sm shadow-2xl mt-8 lg:mt-0"
                    >
                        <form className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">{t('contact.form_first_name')}</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-hihs-accent focus:border-transparent transition-all text-base" placeholder={t('contact.placeholder_name')} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">{t('contact.form_last_name')}</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-hihs-accent focus:border-transparent transition-all text-base" placeholder={t('contact.placeholder_lastname')} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">{t('contact.form_email')}</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-hihs-accent focus:border-transparent transition-all text-base" placeholder={t('contact.placeholder_email')} />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">{t('contact.form_project_type')}</label>
                                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-hihs-accent focus:border-transparent transition-all text-base">
                                    <option>{t('contact.select_service')}</option>
                                    <option>{t('contact.service_painting')}</option>
                                    <option>{t('contact.service_drywall')}</option>
                                    <option>{t('contact.service_restoration')}</option>
                                    <option>{t('contact.service_other')}</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">{t('contact.form_message')}</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-hihs-accent focus:border-transparent transition-all text-base" placeholder={t('contact.placeholder_message')}></textarea>
                            </div>

                            <button type="submit" className="w-full bg-hihs-accent text-white py-4 rounded-sm font-bold tracking-wide hover:bg-hihs-charcoal transition-all shadow-lg shadow-hihs-accent/30 hover:shadow-xl flex items-center justify-center gap-2 text-base">
                                {t('contact.send_request')}
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
