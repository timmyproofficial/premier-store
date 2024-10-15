import AboutBlock from '../components/AboutBlock';
import DiscountBlock from '../components/DiscountBlock';
import FeaturedProuductsBlock from '../components/FeaturedProuductsBlock';
import Hero from '../components/Hero';
import NavbarTop from '../components/NavbarTop';
import NewArrivalsBlock from '../components/NewArrivalsBlock';
import OffersBlock from '../components/offersBlock';
import TestimonialsBlock from '../components/TestimonialsBlock';

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
      <TestimonialsBlock />
      <DiscountBlock />
    </>
  );
};

export default HomePage;
