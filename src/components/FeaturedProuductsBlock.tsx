import BlockWhite from './BlockWhite';
import HeadingPlain from './HeadingPlain';
import FeaturedProducts from './FeaturedProducts';

const FeaturedProuductsBlock = () => {
  return (
    <BlockWhite classes="lg:pb-[150px] lg:relative lg:top-[-15px] lg:-z-50">
      <div className="relative top-40">
        <HeadingPlain mainText="Featured Products" />
        <FeaturedProducts />
      </div>
    </BlockWhite>
  );
};

export default FeaturedProuductsBlock;
