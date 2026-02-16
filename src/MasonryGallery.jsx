import { motion } from 'framer-motion';

const images = [
    {
        src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
        alt: 'Modern kitchen renovation',
        className: 'md:col-span-2 md:row-span-2 h-[400px]'
    },
    {
        src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop',
        alt: 'Luxurious bathroom remodel',
        className: 'md:col-span-1 md:row-span-1 h-[200px]'
    },
    {
        src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
        alt: 'Professional wall painting',
        className: 'md:col-span-1 md:row-span-1 h-[200px]'
    },
    {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
        alt: 'Spacious living room makeover',
        className: 'md:col-span-1 md:row-span-2 h-[400px]'
    },
    {
        src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
        alt: 'Master bedroom renovation',
        className: 'md:col-span-2 md:row-span-1 h-[200px]'
    },
    {
        src: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=800&auto=format&fit=crop',
        alt: 'Elegant dining area',
        className: 'md:col-span-1 md:row-span-1 h-[200px]'
    },
    {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
        alt: 'Modern exterior home update',
        className: 'md:col-span-2 md:row-span-2 h-[400px]'
    },
    {
        src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop',
        alt: 'Interior finishing details',
        className: 'md:col-span-1 md:row-span-1 h-[200px]'
    },
    {
        src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop',
        alt: 'Custom bathroom tiling',
        className: 'md:col-span-1 md:row-span-1 h-[200px]'
    },
    {
        src: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop',
        alt: 'Drywall repair process',
        className: 'md:col-span-1 md:row-span-2 h-[400px]'
    },
    {
        src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
        alt: 'Modern kitchen cabinetry',
        className: 'md:col-span-2 md:row-span-1 h-[200px]'
    },
    {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
        alt: 'Hardwood flooring installation',
        className: 'md:col-span-1 md:row-span-1 h-[200px]'
    }
];

const MasonryGallery = () => {
    return (
        <section className="py-12 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-24">
                <div className="mb-12">
                    <span className="text-hihs-accent font-semibold tracking-widest uppercase text-sm">Portfolio</span>
                    <h2 className="mt-2 text-4xl font-bold text-hihs-charcoal">Recent Transformations</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`relative rounded-sm overflow-hidden group ${img.className}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MasonryGallery;
