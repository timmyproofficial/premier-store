import ProductCard from './ProductCard';
import { newArrivals } from '../constants';

const NewArrivals = () => {
  return (
    <div className="grid gap-10 md:gap-y-20 md:grid-cols-2 lg:grid-cols-4">
      {newArrivals.map((prod) => (
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

export default NewArrivals;
