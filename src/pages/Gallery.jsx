import { motion } from 'framer-motion';
import MasonryGallery from '../MasonryGallery';
import CallToAction from '../CallToAction';

const Gallery = () => {
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
                        <span className="text-hihs-accent font-bold tracking-[0.2em] uppercase text-sm block mb-4">Portfolio</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-hihs-charcoal mb-6">
                            Our Masterpieces
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Explore our diverse portfolio of transformations. From intricate drywall repairs to complete home renovations, every project is a testament to our commitment to excellence.
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
