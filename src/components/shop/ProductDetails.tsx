import BtnCart from '../BtnCart';
import Rating from '../Rating';
import CartCounter from './CartCounter';

const ProductDetails = () => {
  return (
    <article className="flex flex-col gap-10 mb-24 lg:mb-0">
      <header>
        <h3 className="mb-3">Product Title</h3>
        <Rating size={8} />
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        soluta numquam praesentium, officiis aliquid minus ad eligendi provident
        sit a nihil cum labore, quaerat molestiae odio quo repellendus tempore
        molestias.
      </p>

      <div className="flex items-center gap-8">
        <h4 className="font-bold">$ 10.00</h4>
        <small className="text-[14px] text-gray-color">$ 10.00</small>
        <div className="bg-primary-color text-white-color py-2 px-5 rounded-[100px]">
          - 20%
        </div>
      </div>

      <p className="text-[1.6rem]">10 available in stock</p>

      <p className="text-[1.6rem]">People have viewed this product 100 times</p>

      <div className="flex gap-12 items-center">
        <p className="text-[1.6rem]">Select size</p>
        <div className="flex gap-6">
          <div className="product-sizes">
            <p>S</p>
          </div>
          <div className="product-sizes">
            <p>M</p>
          </div>
          <div className="product-sizes">
            <p>L</p>
          </div>
        </div>
      </div>

      <div className="flex gap-28">
        <CartCounter />
        <BtnCart />
      </div>
    </article>
  );
};

export default ProductDetails;
