const NavBar = ({ onNext }) => {
  return (
    <div className="absolute bottom-8 left-0 right-0 mx-6 p-2 bg-gray-400 border-4 rounded-2xl">
      <div className="flex justify-around">
        <button className="text-2xl mr-3">
          🏠
        </button>
        <button className="text-4xl absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-black flex items-center justify-center">
          <button className="cursor-pointer" onClick={onNext}>➕</button>
        </button>
        <button className="text-2xl ml-3">
          📜
        </button>
      </div>
    </div>
  );
};

export default NavBar;
