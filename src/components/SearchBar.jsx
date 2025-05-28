const SearchBar = () => {
  return (
    <div className="px-4 py-2">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl">🔍</span>
        <input
          type="text"
          placeholder="Buscar sets..."
          className="w-full pl-12 pr-4 py-2 bg-gray-100 rounded-full text-base placeholder-gray-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
