import ProductDetails from '../components/shop/ProductDetails';
import ProductImages from '../components/shop/ProductImages';
import SimilarProduct from '../components/shop/SimilarProduct';
import ShopContainer from '../components/ShopContainer';

const ProductPage = () => {
  return (
    <ShopContainer classes="w-[95%] ml-auto">
      <article className="grid grid-cols-[75%_25%]">
        <section className="grid grid-cols-[50%_55%]">
          <ProductImages />
          <ProductDetails />
        </section>
        <aside className="justify-self-end">
          <SimilarProduct />
        </aside>
      </article>
    </ShopContainer>
  );
};

export default ProductPage;
