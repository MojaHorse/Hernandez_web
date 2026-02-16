import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="bg-hihs-accent text-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                        Ready to transform your home?
                    </h2>
                    <p className="mt-2 text-white/90 text-base sm:text-lg">
                        Schedule your free consultation today.
                    </p>
                </div>
                <a href="/#contact" className="group bg-white text-hihs-accent px-8 py-4 rounded-sm font-bold tracking-wide hover:bg-hihs-charcoal hover:text-white transition-all shadow-xl flex items-center gap-2">
                    Get a Quote
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
};

export default CallToAction;
