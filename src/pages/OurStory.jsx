import { motion } from 'framer-motion';
import CallToAction from '../CallToAction';

const OurStory = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <section className="py-24 bg-hihs-offwhite">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-hihs-accent font-bold tracking-[0.2em] uppercase text-sm block mb-4">Our Story</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-hihs-charcoal mb-8 leading-tight">
                            More than just a space—it&apos;s a reflection of you.
                        </h1>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                At <span className="font-bold text-hihs-charcoal">HIHS</span>, we recognize that your home is more than just a space—it&apos;s a reflection of your lifestyle and personality. Our promise is to treat your home with the respect and care it deserves, ensuring that every project is a seamless blend of professionalism and personalized attention.
                            </p>
                            <p>
                                Over the years we have done everything from basic drywall repair to kitchen remodels to full house renovations. No job is too small for us; however, in recent years we have been focusing on full renovations.
                            </p>
                            <p>
                                We specialize in complete kitchen and bathroom demos and rebuilding, as well as helping local landlords transform their properties for both short and long-term rentals, giving them maximum return on their investments.
                            </p>

                            <div className="my-12 p-8 bg-white border-l-4 border-hihs-accent shadow-sm rounded-r-sm">
                                <h3 className="text-xl font-bold text-hihs-charcoal mb-2">Why Us</h3>
                                <p className="text-gray-600">
                                    Founded with a deep-seated passion for transforming houses into homes, Hernandez Interior Home Solutions has emerged as a beacon of reliability and skill in the handyman industry. Our journey began with the vision of creating a service that not only excels in technical proficiency but also prioritizes transparency and customer satisfaction. Benefit from our extensive experience, as our team boasts over 35 years of combined knowledge in the realms of drywall, painting, and comprehensive home repairs. Each member brings a unique skill set, contributing to a collaborative environment that thrives on excellence.
                                </p>
                            </div>

                            <p className="font-medium text-hihs-charcoal text-xl">
                                Your home deserves the best—Hernandez Interior Home Solutions is here to deliver it.
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
