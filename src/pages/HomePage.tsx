import AboutBlock from '../components/AboutBlock';
import FeaturedProuductsBlock from '../components/FeaturedProuductsBlock';
import Hero from '../components/Hero';
import NavbarTop from '../components/NavbarTop';
import NewArrivalsBlock from '../components/NewArrivalsBlock';
import OffersBlock from '../components/offersBlock';

const HomePage = () => {
  return (
    <>
      <header>
        <NavbarTop />
        <Hero />
      </header>
      <FeaturedProuductsBlock />
      <AboutBlock />
      <OffersBlock />
      <NewArrivalsBlock />
    </>
  );
};

export default HomePage;
