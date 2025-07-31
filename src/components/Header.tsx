import Logo from "./ui/Logo";

function Header() {
  return (
    <div className="pt-8 pb-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center space-x-6 text-white/80 font-light">
            <a href="#" className="hover:text-white transition-colors">
              My Trips
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Check-in
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Flight Status
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
