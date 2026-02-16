import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false); // Tracks if we are down the page (>50px)
    const [isScrolling, setIsScrolling] = useState(false); // Tracks if currently scrolling
    const [isHovered, setIsHovered] = useState(false); // Tracks mouse hover
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        let scrollTimeout;
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 1500); // 1.5s idle time
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const navLinks = [
        { name: t('nav.home'), href: '/#home', type: 'hash' },
        { name: t('nav.services'), href: '/#services', type: 'hash' },
        { name: t('nav.gallery'), href: '/gallery', type: 'page' },
        { name: t('nav.our_story'), href: '/our-story', type: 'page' },
        { name: t('nav.contact'), href: '/#contact', type: 'hash' },
    ];

    const handleNavClick = (e, link) => {
        e.preventDefault();
        setIsOpen(false);

        if (link.type === 'page') {
            navigate(link.href);
            window.scrollTo(0, 0);
        } else {
            // Hash link handling
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const hash = link.href.split('#')[1];
                    const element = document.getElementById(hash);
                    if (element) {
                        const offsetTop = element.offsetTop - 100;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    }
                }, 100);
            } else {
                const hash = link.href.split('#')[1];
                const element = document.getElementById(hash);
                if (element) {
                    const offsetTop = element.offsetTop - 100;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
        }
    };

    // Smart Navbar Logic
    const getNavbarClasses = () => {
        if (!scrolled) {
            // Top of page
            if (isHovered || isOpen) {
                return 'bg-white shadow-md py-4 border-gray-100';
            }
            return 'bg-white/20 backdrop-blur-md py-5 border-white/10';
        }

        // Scrolled down
        if (isScrolling || isHovered || isOpen) {
            // Active state (Scrolling, Hovered, or Menu Open) -> Solid/Readable
            return 'bg-white shadow-md py-4 border-gray-100';
        } else {
            // Idle state -> Frosted/Glass (More Transparent)
            return 'bg-white/20 backdrop-blur-md shadow-sm py-4 border-white/20';
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 font-sans">
            {/* Top Bar - Hidden on mobile, visible on desktop */}
            <div className={`hidden lg:flex justify-between items-center px-6 lg:px-24 py-2 text-xs font-medium transition-all duration-300 ${scrolled ? 'bg-hihs-charcoal text-white/80' : 'bg-hihs-charcoal/90 text-white/90 backdrop-blur-sm'}`}>
                <div className="flex gap-6">
                    <a href="tel:6892932987" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Phone size={14} className="text-hihs-accent" />
                        <span>{t('nav.phone')} (689) 293-2987</span>
                    </a>
                    <a href="mailto:info@flrepairmen.com" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Mail size={14} className="text-hihs-accent" />
                        <span>{t('nav.email')} info@flrepairmen.com</span>
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <Clock size={14} className="text-hihs-accent" />
                    <span>{t('nav.mon_sat')}</span>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`transition-all duration-500 border-b ${getNavbarClasses()}`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-24 flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex-shrink-0"
                    >
                        <img src="/Logo.png" alt="Hernandez Interior Home Solutions" className="h-14 w-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href} // Changed key to href since name changes with language
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className="text-sm font-semibold text-hihs-charcoal hover:text-hihs-accent tracking-wide uppercase transition-colors relative group cursor-pointer"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hihs-accent transition-all group-hover:w-full"></span>
                            </a>
                        ))}

                        <LanguageSwitcher />

                        {/* CTA Button */}
                        <a
                            href="/#contact"
                            onClick={(e) => handleNavClick(e, { href: '/#contact', type: 'hash' })}
                            className="bg-hihs-accent text-white px-6 py-3 rounded-sm text-sm font-bold tracking-wider hover:bg-hihs-charcoal transition-all shadow-lg shadow-hihs-accent/20 cursor-pointer"
                        >
                            {t('nav.get_quote_btn')}
                        </a>
                    </div>


                    {/* Mobile Menu Button + Language Switcher (Mobile) */}
                    <div className="lg:hidden flex items-center gap-4">
                        <LanguageSwitcher />
                        <button
                            className="text-hihs-charcoal"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="flex flex-col p-8 space-y-6 items-center text-center">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link)}
                                        className="text-xl font-bold text-hihs-charcoal hover:text-hihs-accent"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="/#contact"
                                    onClick={(e) => handleNavClick(e, { href: '/#contact', type: 'hash' })}
                                    className="w-full bg-hihs-accent text-white py-4 rounded-sm text-lg font-bold hover:bg-hihs-charcoal transition-colors transform active:scale-95"
                                >
                                    {t('nav.get_quote_btn')}
                                </a>

                                <div className="pt-6 border-t border-gray-100 w-full flex flex-col gap-4 text-sm text-gray-500">
                                    <div className="flex justify-center items-center gap-2">
                                        <Phone size={16} className="text-hihs-accent" />
                                        <span>{t('nav.phone')}</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <Mail size={16} className="text-hihs-accent" />
                                        <span>{t('nav.email')}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header >
    );
};

export default Navbar;
