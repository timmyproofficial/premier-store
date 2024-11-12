const FilterProdCats = () => {
  return (
    <div>
      <h4 className="text-primary-color text-[2rem] mb-6">Categories</h4>

      <div className="flex flex-col gap-5 ml-5">
        <div className="shop-cat">
          <input type="radio" id="cat1" name="cat" />
          <label htmlFor="cat1">Category 1</label>
        </div>
        <div className="shop-cat">
          <input type="radio" id="cat2" name="cat" />
          <label htmlFor="cat2">Category 2</label>
        </div>
        <div className="shop-cat">
          <input type="radio" id="cat3" name="cat" />
          <label htmlFor="cat3">Category 3</label>
        </div>
        <div className="shop-cat">
          <input type="radio" id="cat4" name="cat" />
          <label htmlFor="cat4">Category 4</label>
        </div>
      </div>
    </div>
  );
};

export default FilterProdCats;
