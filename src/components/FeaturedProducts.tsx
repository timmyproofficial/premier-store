import ProductCard from './ProductCard';
import { productsFeature } from '../constants';

const FeaturedProducts = () => {
  return (
    <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
      {productsFeature.map((prod) => (
        <ProductCard
          key={prod.id}
          id={prod.id}
          title={prod.title}
          img={prod.img}
          price={prod.price}
          discount={prod.discount}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
