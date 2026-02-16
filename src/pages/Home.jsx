import Hero from '../Hero';
import Services from '../Services';
import Gallery from '../Gallery';
import About from '../About'; // Keeping distinct from Our Story page for now, or maybe replacing? 
import Contact from '../Contact';
import CallToAction from '../CallToAction';

const Home = () => {
    return (
        <main>
            <div id="home">
                <Hero />
            </div>
            <Services />
            <Gallery />
            <About />
            <Contact />
            <CallToAction />
        </main>
    );
};

export default Home;
