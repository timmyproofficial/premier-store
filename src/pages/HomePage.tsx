import AboutBlock from '../components/AboutBlock';
import FeaturedProuductsBlock from '../components/FeaturedProuductsBlock';
import Hero from '../components/Hero';
import NavbarTop from '../components/NavbarTop';

const HomePage = () => {
  return (
    <>
      <header>
        <NavbarTop />
        <Hero />
      </header>
      <FeaturedProuductsBlock />
      <AboutBlock />
    </>
  );
};

export default HomePage;
