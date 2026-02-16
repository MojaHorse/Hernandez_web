import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1500&auto=format&fit=crop',
        title: 'Kitchen Renovation',
        location: 'Winter Park, FL'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1500&auto=format&fit=crop',
        title: 'Master Bathroom',
        location: 'Windermere, FL'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1500&auto=format&fit=crop',
        title: 'Outdoor Patio',
        location: 'Kissimmee, FL'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1500&auto=format&fit=crop',
        title: 'Home Office',
        location: 'Lake Nona, FL'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1500&auto=format&fit=crop',
        title: 'Modern Living Room',
        location: 'Orlando, FL'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1616594039964-b080481600b8?q=80&w=1500&auto=format&fit=crop',
        title: 'Bedroom Suite',
        location: 'Dr. Phillips, FL'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1500&auto=format&fit=crop',
        title: 'Dining Space',
        location: 'Baldwin Park, FL'
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1600596542815-369e8d355feb?q=80&w=1500&auto=format&fit=crop',
        title: 'Exterior Facade',
        location: 'Celebration, FL'
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1500&auto=format&fit=crop',
        title: 'Spa Bathroom',
        location: 'Winter Garden, FL'
    }
];

const Gallery = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <section id="gallery" className="py-16 md:py-24 bg-hihs-offwhite overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-24 mb-10 md:mb-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-hihs-accent font-semibold tracking-widest uppercase text-sm">Our Work</span>
                    <h2 className="mt-2 text-4xl font-bold text-hihs-charcoal">Featured Projects</h2>
                </motion.div>

                <motion.a
                    href="/gallery"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="group flex items-center gap-2 px-6 py-3 border border-hihs-charcoal text-hihs-charcoal font-bold tracking-wider hover:bg-hihs-charcoal hover:text-white transition-all duration-300"
                >
                    VIEW ALL PROJECTS
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
            </div>

            <div className="pl-6 lg:pl-24">
                <motion.div
                    ref={carousel}
                    className="cursor-grab overflow-hidden"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-8"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] h-[300px] md:h-[400px] relative rounded-sm overflow-hidden shadow-lg group"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                    <p className="text-gray-300 text-sm">{project.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
