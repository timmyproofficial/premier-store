import inputSearch from '../assets/search.svg';

const SearchBar = () => {
  return (
    <div className="hidden md:flex rounded-xl overflow-hidden grow">
      <input
        className="grow outline-0 px-3 py-4 text-dark-color text-[1.6rem]"
        placeholder="Search Product"
      />
      <span className="bg-primary-color flex justify-center items-center text-white py-2 px-10">
        <img
          className="text-body-color w-[22px]"
          src={inputSearch}
          alt="Search Icon"
        />
      </span>
    </div>
  );
};

export default SearchBar;
