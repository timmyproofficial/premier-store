import HeadingPlain from './HeadingPlain';
import FeaturedProducts from './FeaturedProducts';

const FeaturedProuductsBlock = () => {
  return (
    <section className="bg-block-color w-[98%] p-6 lg:px-24 lg:pb-60 lg:pt-28 lg:relative lg:top-[-15px] mx-auto lg:-z-50">
      <div className="relative top-40">
        <HeadingPlain mainText="Featured Products" />
        <FeaturedProducts />
      </div>
    </section>
  );
};

export default FeaturedProuductsBlock;
