import Header from "../components/Header";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Categories from "../components/Categories";
import About from "../components/About";
import Explore from "../components/Explore";
import Faq from "../components/Faq";
import Instructor from "../components/Instructor";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Hero />
            <Courses />
            <Categories/>
            <Explore/>
            <About />
            <Faq/>
            <Instructor/>
            <Testimonials />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Home;