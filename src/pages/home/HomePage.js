import Home from './Home';
import About from './About';
import Education from './Education';
import Resume from './Resume';
import Skills from './Skills';
import Publication from './Publication';

export default function HomePage() {
    return (
        <div>
            <section id="Home">
                <Home />
            </section>
            <section id="About">
                <About />
            </section>
            <section id="Education">
                <Education />
            </section>
            <section id="Experience">
                <Resume />
            </section>
            <section id="Skills">
                <Skills />
            </section>
            <section id="Publication">
                <Publication />
            </section>
        </div>
    )
}