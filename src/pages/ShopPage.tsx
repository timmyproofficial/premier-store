import NavHero from '../components/NavHero';
import NewArrivals from '../components/NewArrivals';
import starIcon from '../assets/star-filled.svg';

const ShopPage = () => {
  return (
    <section className="grid grid-cols-[300px_1fr]">
      <aside className="p-12">
        <p className="text-gray-color font-medium flex justify-end mb-10">
          Filters
        </p>

        <div className="flex flex-col gap-12">
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
          <div>
            <h4 className="text-primary-color text-[2rem] mb-6">Ratings</h4>

            <span className="flex gap-5 ml-5">
              <img className="w-10" src={starIcon} alt="Star Icon" />
              <img className="w-10" src={starIcon} alt="Star Icon" />
              <img className="w-10" src={starIcon} alt="Star Icon" />
              <img className="w-10" src={starIcon} alt="Star Icon" />
              <img className="w-10" src={starIcon} alt="Star Icon" />
            </span>
          </div>
        </div>
      </aside>
      <section className="bg-block-color py-12 px-16 rounded-tl-[50px]">
        <NavHero textColor="black" classes="flex justify-end mr-8 mb-20" />
        <NewArrivals />
      </section>
    </section>
  );
};

export default ShopPage;
