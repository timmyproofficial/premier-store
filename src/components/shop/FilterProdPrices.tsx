const FilterProdPrices = () => {
  return (
    <div>
      <h4 className="text-primary-color text-[2rem] mb-6">Price</h4>

      <div className="ml-5">
        <input
          type="range"
          min="1"
          max="10000"
          value="5000"
          className="slider"
        />
        <div className="text-primary-color flex justify-between items-center">
          <span>$1</span>
          <span>$100,000</span>
        </div>
      </div>
    </div>
  );
};

export default FilterProdPrices;
