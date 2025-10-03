import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ashoka-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-white text-xl font-bold">ASHOKA</span>
              <span className="text-ashoka-orange text-xl font-bold ml-2">
                INTERNATIONAL
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-400 ml-1">
                Ltd
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Complete Hardware Solutions for all your construction and building
              needs.
            </p>
            <div className="flex space-x-4 mb-4">
              {/* <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products#construction"
                  className="text-gray-300 hover:text-white"
                >
                  Construction Materials
                </Link>
              </li>
              <li>
                <Link
                  to="/products#paint"
                  className="text-gray-300 hover:text-white"
                >
                  Paints & Finishing
                </Link>
              </li>
              <li>
                <Link
                  to="/products#tools"
                  className="text-gray-300 hover:text-white"
                >
                  Tools & Equipment
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-ashoka-orange" />
                <span className="text-gray-300">
                  <p>
                    Plot No. 3,<p> Mulwana (Kibira) road</p>
                  </p>
                  <p>Industrial area, P.O.Box 20144</p>
                  <p>Kampala Uganda</p>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-ashoka-orange" />
                <span className="text-gray-300">
                  +256 755 968455 <br />
                  +256 755 344375
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 min-w-[20px] text-ashoka-orange mt-1" />
                <span className="text-gray-300">
                  ashokainternational07@gmail.com <br />
                  hemangjoshi10@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Ashoka International Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
