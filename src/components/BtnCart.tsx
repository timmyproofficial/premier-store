import cartImg from '../assets/cart-white.svg';

const BtnCart = () => {
  return (
    <button className="bg-primary-color text-white-color text-[1.8rem] py-2 px-6 rounded-[12px] flex items-center gap-4">
      <img src={cartImg} alt="Cart Image" className="w-8" />
      Add to cart
    </button>
  );
};

export default BtnCart;
