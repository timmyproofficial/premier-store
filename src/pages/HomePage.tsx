import AboutBlock from '../components/AboutBlock';
import DiscountBlock from '../components/DiscountBlock';
import FeaturedProuductsBlock from '../components/FeaturedProuductsBlock';
import FooterBlock from '../components/FooterBlock';
import Hero from '../components/Hero';
import NavbarTop from '../components/NavbarTop';
import NewArrivalsBlock from '../components/NewArrivalsBlock';
import NewsFeedBlock from '../components/NewsFeedBlock';
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
      <NewArrivalsBlock />
      <TestimonialsBlock />
      <DiscountBlock />
      <NewsFeedBlock />
      <FooterBlock />
    </>
  );
};

export default HomePage;
