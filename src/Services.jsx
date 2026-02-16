import { motion } from 'framer-motion';
import { Palette, Hammer, Zap, Droplet, Grid3X3, Home, Package, Plug, Ruler } from 'lucide-react';

const services = [
    {
        icon: <Grid3X3 size={40} />,
        title: 'Tile Flooring',
        description: 'Professional tile installation for floors, walls, and backsplashes. Detailed patterns and durable finishes.'
    },
    {
        icon: <Hammer size={40} />,
        title: 'Drywall Installation',
        description: 'Complete drywall services including installation, finishing, and repair for smooth, seamless walls.'
    },
    {
        icon: <Palette size={40} />,
        title: 'House Painting',
        description: 'Interior and exterior painting using premium products for vibrant, long-lasting color.'
    },
    {
        icon: <Droplet size={40} />,
        title: 'Plumbing',
        description: 'Reliable plumbing repairs and fixture installations for kitchens and bathrooms.'
    },
    {
        icon: <Zap size={40} />,
        title: 'Electrical',
        description: 'Safe and efficient electrical services, from fixture installation to minor repairs.'
    },
    {
        icon: <Home size={40} />,
        title: 'Remodeling',
        description: 'Full-service home remodeling to transform your kitchen, bath, or living space.'
    },
    {
        icon: <Package size={40} />,
        title: 'Custom Closets',
        description: 'Designed and installed custom shelving and storage solutions to maximize your space.'
    },
    {
        icon: <Plug size={40} />,
        title: 'Appliance Installation',
        description: 'Expert installation of household appliances ensuring proper setup and functionality.'
    },
    {
        icon: <Ruler size={40} />,
        title: 'General Carpentry',
        description: 'Custom carpentry work including trim, molding, and structural repairs.'
    }
];

const Services = () => {
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
                        <span className="text-hihs-accent font-bold tracking-[0.2em] uppercase text-sm mb-3">Our Expertise</span>
                        <div className="w-12 h-1 bg-hihs-accent mb-6"></div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-hihs-charcoal mb-6">Premium Home Services</h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        We bring over three decades of craftsmanship and attention to detail to every project. Whether it&apos;s a fresh coat of paint or a complex renovation, we have the skills to elevate your home.
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
