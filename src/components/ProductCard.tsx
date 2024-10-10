import arrival1 from '../assets/arrival1.png';
import starIcon from '../assets/star-filled.svg';
import cartIcon from '../assets/cart-white.svg';

const ProductCard = () => {
  return (
    <div className="bg-dark-color max-w-[400px] rounded-[30px] relative overflow-hidden shadow-product-shadow flex flex-col m-10">
      <div className="relative">
        <img src={arrival1} alt="Product Photo" />
        <span className="bg-white-color font-extrabold flex justify-center items-center rounded-full absolute top-3/4 right-20 w-16 h-16">
          20%
        </span>
      </div>
      <div className="flex justify-between items-center relative pr-16 pl-10  top-[-40px]">
        <div className="text-white-color flex flex-col gap-10">
          <div>
            <p>Product Title</p>
            <span className="flex gap-3">
              <img className="w-5" src={starIcon} alt="Star Icon" />
              <img className="w-5" src={starIcon} alt="Star Icon" />
              <img className="w-5" src={starIcon} alt="Star Icon" />
              <img className="w-5" src={starIcon} alt="Star Icon" />
              <img className="w-5" src={starIcon} alt="Star Icon" />
            </span>
          </div>
          <span className="inline-flex flex-col self-start">
            <p className="font-extrabold">$ 10.00</p>
            <small className="text-gray-color mt-[-5px] self-end">
              $ 10.00
            </small>
          </span>
        </div>
        <div>
          <img src={cartIcon} alt="Cart Icon" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;