import AboutBlock from '../components/AboutBlock';
import DiscountBlock from '../components/DiscountBlock';
import FeaturedProuductsBlock from '../components/FeaturedProuductsBlock';
import FooterBlock from '../components/FooterBlock';
import Hero from '../components/Hero';
import NavbarTop from '../components/NavbarTop';
import NewArrivalsBlock from '../components/NewArrivalsBlock';
import NewsFeedBlock from '../components/NewsFeedBlock';
import OffersBlock from '../components/offersBlock';
import TestimonialsBlock from '../components/TestimonialsBlock';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProuductsBlock />
      <AboutBlock />
      <OffersBlock />
      <NewArrivalsBlock />
      <TestimonialsBlock />
      <DiscountBlock />
      <NewsFeedBlock />
    </>
  );
};

export default HomePage;
