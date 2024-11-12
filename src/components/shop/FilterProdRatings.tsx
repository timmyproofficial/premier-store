import Rating from '../Rating';

const FilterProdRatings = () => {
  return (
    <div>
      <h4 className="text-primary-color text-[2rem] mb-6">Ratings</h4>

      <Rating size={10} classes="ml-5" />
    </div>
  );
};

export default FilterProdRatings;
