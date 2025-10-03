import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeaderLogo from "../assets/images/Ashoka_Header_Logo.jpg"; // Adjust path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              {/* <img
                src="/lovable-uploads/96853bb4-77fd-420c-a2d7-3051ea1fe292.png"
                alt="Ashoka International Logo"
                className="h-12 w-auto"
              /> */}
              <img
                src={HeaderLogo}
                alt="Ashoka International Logo"
                className="h-12 w-auto"
              />
              {/* <img
                src="/lovable-uploads/96853bb4-77fd-420c-a2d7-3051ea1fe292.png"
                alt="Ashoka International Logo"
                className="logo-img"
              /> */}
              <h1
                className="text-2xl font-bold pl-8"
                style={{ color: "#0c71b3" }}
              >
                Ashoka International Ltd
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-ashoka-gray hover:text-ashoka-blue font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-ashoka-gray hover:text-ashoka-blue font-medium"
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="text-ashoka-gray hover:text-ashoka-blue font-medium"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-ashoka-gray hover:text-ashoka-blue font-medium"
            >
              Contact
            </Link>
            <Link to="/quote">
              <Button className="bg-ashoka-orange hover:bg-ashoka-blue text-white">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-ashoka-gray hover:text-ashoka-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ashoka-blue"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className="text-ashoka-gray hover:text-ashoka-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-ashoka-gray hover:text-ashoka-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="text-ashoka-gray hover:text-ashoka-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-ashoka-gray hover:text-ashoka-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link to="/quote" onClick={toggleMenu}>
              <Button className="w-full bg-ashoka-orange hover:bg-ashoka-blue text-white mt-2">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
