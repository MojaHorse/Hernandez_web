import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-hihs-offwhite text-hihs-charcoal py-8 md:py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="text-center md:text-left md:w-1/3">
                    <h3 className="text-2xl font-bold tracking-tighter">
                        <img src="/Logo.png" alt="Hernandez Interior Home Solutions" className="h-10 w-auto mx-auto md:mx-0" />
                    </h3>
                    <p className="text-gray-600 mt-4 text-sm">
                        © {new Date().getFullYear()} Hernandez Interior Home Solutions, LLC. <br />
                        All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6 justify-center md:w-1/3">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" aria-label="Google Maps Location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
                            <circle cx="12" cy="9" r="2.5" fill="#fff" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-hihs-accent transition-colors">
                        <Facebook size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-hihs-accent transition-colors">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-hihs-accent transition-colors">
                        <Twitter size={24} />
                    </a>
                </div>

                <div className="flex flex-col items-center md:items-end justify-center md:justify-end md:w-1/3">
                    <span className="text-[14px] text-black uppercase tracking-widest mb-2">Built By</span>
                    <img src="/ZeroToOne_Logo.png" alt="Zero To One" className="h-13 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                </div>

            </div>
        </footer>
    );
};

export default Footer;
