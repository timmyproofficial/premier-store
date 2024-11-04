import AboutBlock from '../components/AboutBlock';
import DiscountBlock from '../components/DiscountBlock';
import FeaturedProuductsBlock from '../components/FeaturedProuductsBlock';
import Hero from '../components/Hero';
import NewArrivalsBlock from '../components/NewArrivalsBlock';
import NewsFeedBlock from '../components/NewsFeedBlock';
import OffersBlock from '../components/OffersBlock';
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
