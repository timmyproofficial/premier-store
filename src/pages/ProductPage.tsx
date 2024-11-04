import ProductImages from '../components/shop/ProductImages';
import ShopContainer from '../components/ShopContainer';

const ProductPage = () => {
  return (
    <ShopContainer classes="w-[95%] ml-auto">
      <article className="grid grid-cols-[75%_25%]">
        <section className="grid grid-cols-[40%_55%]">
          <ProductImages />
          <div className="bg-gray-400 h-10"></div>
        </section>
        <aside className="bg-green-200 justify-self-end">
          <h4 className="text-[1.8rem] text-gray-color mb-6">
            Similar Products
          </h4>

          <div className="flex flex-col gap-7">
            <div className="w-[150px] h-[120px] bg-orange-200"></div>
            <div className="w-[150px] h-[120px] bg-orange-200"></div>
          </div>
        </aside>
      </article>
    </ShopContainer>
  );
};

export default ProductPage;
