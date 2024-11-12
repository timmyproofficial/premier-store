import FilterProdCats from './FilterProdCats';
import FilterProdPrices from './FilterProdPrices';
import FilterProdRatings from './FilterProdRatings';

const ShopSidebar = () => {
  return (
    <aside className="p-12">
      <p className="text-gray-color font-medium flex justify-end mb-10">
        Filters
      </p>

      <div className="flex flex-col gap-12">
        <FilterProdCats />
        <FilterProdPrices />
        <FilterProdRatings />
      </div>
    </aside>
  );
};

export default ShopSidebar;
