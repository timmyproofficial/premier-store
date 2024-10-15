import discountImg from '../assets/discount.png';
import HeadingDiscount from './HeadingDiscount';

const DiscountBlock = () => {
  return (
    <section className="bg-block-color py-5 md:py-10">
      <div className="grid md:grid-cols-[25%_1fr] md:gap-52 items-center p-16 md:px-20 my-40 discount-block">
        <img
          src={discountImg}
          className="w-full discount-img hidden md:block"
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
