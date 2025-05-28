const PhoneFrame = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-[330px] h-[658px]">
        <img
          src="/iphone-13-frame.png"
          alt="iPhone 13 Frame"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10 rounded-[36px] mt-10 mx-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
