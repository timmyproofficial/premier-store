import { Link } from 'react-router-dom';
import starIcon from '../assets/star-filled.svg';
import cartIcon from '../assets/cart-white.svg';

interface Props {
  id: number;
  title: string;
  img: string;
  price: number;
  discount: number;
}

const ProductCard = ({ id, title, img, price, discount }: Props) => {
  return (
    <div className="bg-dark-color rounded-[30px] relative overflow-hidden shadow-product-shadow flex flex-col">
      <div className="relative">
        <img src={img} alt={title} />
        <span className="bg-white-color font-extrabold flex justify-center items-center rounded-full absolute top-[70%] right-[2rem] md:top-3/4 md:right-20 w-16 h-16">
          {discount}%
        </span>
      </div>
      {/* <div className="flex justify-between items-center relative pr-16 pl-10  top-[-40px]"> */}
      {/* <div className="flex justify-between items-center pr-16 pl-10 pb-6"> */}
      <div className="grid grid-cols-[80%_20%] items-center px-8 py-4">
        <div className="text-white-color flex flex-col gap-5 md:gap-10">
          <div>
            <Link to={`/products/${id}`}>
              <p className="text-[1.5rem] md:text-[1.8rem] lg:text-[2.4rem]">
                {title}
              </p>
            </Link>
            <span className="flex gap-3">
              <img className="w-3 md:w-5" src={starIcon} alt="Star Icon" />
              <img className="w-3 md:w-5" src={starIcon} alt="Star Icon" />
              <img className="w-3 md:w-5" src={starIcon} alt="Star Icon" />
              <img className="w-3 md:w-5" src={starIcon} alt="Star Icon" />
              <img className="w-3 md:w-5" src={starIcon} alt="Star Icon" />
            </span>
          </div>
          <span className="inline-flex flex-col self-start">
            <p className="font-extrabold">$ {price}.00</p>
            <small className="text-gray-color mt-[-5px] self-end">
              $ {price}.00
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
