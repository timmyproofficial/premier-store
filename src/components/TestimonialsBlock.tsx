import BlockWhite from './BlockWhite';
import HeadingPlain from './HeadingPlain';
import Testimonials from './Testimonials';

const TestimonialsBlock = () => {
  return (
    <BlockWhite>
      <HeadingPlain mainText="Precious Words From Our Customers" />

      <Testimonials />
    </BlockWhite>
  );
};

export default TestimonialsBlock;
