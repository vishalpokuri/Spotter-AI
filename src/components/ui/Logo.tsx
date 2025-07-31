function Logo() {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white font-med">
          Spotter Wings
        </h1>
        <p className="text-blue-100 text-sm font-reg">Premium Flight Booking</p>
      </div>
    </div>
  );
}

export default Logo;
