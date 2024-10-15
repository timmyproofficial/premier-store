import discountImg from '../assets/discount.png';
import HeadingDiscount from './HeadingDiscount';

const DiscountBlock = () => {
  return (
    <section className="bg-block-color py-10">
      <div className="grid grid-cols-[25%_1fr] gap-52 items-center px-20 my-40 discount-block">
        <img
          src={discountImg}
          className="w-full discount-img"
          alt="Discount Image"
        />
        <HeadingDiscount
          mainText="20% Discount For this week only"
          topText="Limited Offer"
        />
      </div>
    </section>
  );
};

export default DiscountBlock;
