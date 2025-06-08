import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Top Picks", path: "/top-picks" },
    { label: "Brands", path: "/brands" },
    { label: "Events", path: "/events" },
    { label: "Newsletter", path: "/newsletter" },
    { label: "Stories", path: "/stories" },
    { label: "Services", path: "/services" },
  ];

  const stripeLinks = [
    { label: "Top Picks", path: "/top-picks" },
    { label: "Services", path: "/services" },
    { label: "Stories", path: "/stories" },
  ];

  return (
    <header className="w-full bg-white relative z-50">
      <div className="w-full sm:max-w-7xl sm:mx-auto sm:px-6 lg:px-8 px-0">
        
        <div className="flex justify-center py-2">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-24 sm:h-40 w-auto" />
          </Link>
        </div>

        
        <div className="bg-blue-900 py-0 md:hidden">
          <div className="flex items-center justify-between px-4">
            
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="p-2"
            >
              {mobileOpen ? (
                <X size={28} className="text-white" />
              ) : (
                <Menu size={28} className="text-white" />
              )}
            </button>

            
            <div className="flex space-x-5">
              {stripeLinks.map(({ label, path }, i) => (
                <Link
                  key={i}
                  to={path}
                  className="text-white text-sm font-thin hover:underline"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        
        <nav className="hidden md:flex justify-center space-x-16 text-sm font-semibold py-2 border-t border-b border-gray-800">
          {navItems.map(({ label, path }, i) => (
            <Link
              key={i}
              to={path}
              className="hover:text-blue-900 cursor-pointer"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col px-6 pt-16`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          className="absolute top-4 left-4 p-2 bg-blue-900 rounded-full"
        >
          <X size={24} className="text-white" />
        </button>

        {navItems.map(({ label, path }, i) => (
          <Link
            key={i}
            to={path}
            onClick={() => setMobileOpen(false)}
            className="mb-6 text-lg font-medium hover:text-blue-900"
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
