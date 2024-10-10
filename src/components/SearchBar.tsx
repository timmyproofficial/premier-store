import inputSearch from '../assets/search.svg';

const SearchBar = () => {
  return (
    <div className="flex rounded-xl overflow-hidden">
      <input
        className="grow outline-0 px-3 text-dark-color text-[1.6rem]"
        placeholder="Search Product"
      />
      <span className="bg-primary-color text-white py-2 px-5">
        <img
          className="text-body-color w-[30px]"
          src={inputSearch}
          alt="Search Icon"
        />
      </span>
    </div>
  );
};

export default SearchBar;
