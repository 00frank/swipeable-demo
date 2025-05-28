const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 h-16">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">Swipeable</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-xl">
          📱
        </button>
        <button className="text-xl">
          🔔
        </button>
        <button className="text-xl">
          👤
        </button>
      </div>
    </div>
  );
};

export default Header;
