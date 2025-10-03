import { Link } from "react-router-dom";
import { Download, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bgImage from "../assets/images/IMAGE2.jpg"; // Adjust the path as needed
import aboutImage from "../assets/images/Ashoka_Logo.jpg"; // Adjust path as needed
import constructionImg from "../assets/images/catergory/CSM_Images.jpg"; // adjust path as needed
import paintingImg from "../assets/images/catergory/Painting.jpg"; // adjust path as needed
import tool_and_equip_img from "../assets/images/catergory/Tools_and_Equip.jpg"; // adjust path as needed
// import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import plasconLogo from "../assets/images/logo/plasconlogo.png";
import steelTubeLogo from "../assets/images/logo/SteelandTube-logo.png";
import himaCementLogo from "../assets/images/logo/himalogo.png";
import fosrocLogo from "../assets/images/logo/Fosroclogo.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-ashoka-blue to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Hardware Solutions
            </h1>
            <p className="text-xl mb-8">
              Ashoka International Ltd offers a complete range of quality
              hardware products and construction materials under one roof.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-ashoka-orange hover:bg-white hover:text-ashoka-orange text-white"
                asChild
              >
                <Link to="/products">Browse Products</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-ashoka-blue"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Hardware Solutions
            </h1>
            <p className="text-xl mb-8">
              Ashoka International Ltd offers a complete range of quality
              hardware products and construction materials under one roof.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-ashoka-orange hover:bg-white hover:text-ashoka-orange text-white"
                asChild
              >
                <Link to="/products">Browse Products</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-ashoka-blue"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ashoka-dark mb-2">
              Our Product Categories
            </h2>
            <p className="text-ashoka-gray max-w-2xl mx-auto">
              We provide a wide range of hardware and construction materials for
              all your building needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${constructionImg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold">
                    Construction & Building Materials
                  </h3>
                </div>
              </div>

              <CardContent className="p-6">
                <ul className="space-y-1 mb-4 text-ashoka-gray">
                  <li>Steel Bars</li>
                  <li>Cutting Discs</li>
                  <li>Welding Rods</li>
                  <li>BRC Mesh</li>
                  <li>Wire Nails</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-ashoka-blue text-ashoka-blue hover:bg-ashoka-blue hover:text-white"
                  asChild
                >
                  <Link to="/products#construction">View All</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Category 2 */}
            <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${paintingImg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold">
                    Paint & Finishing
                  </h3>
                </div>
              </div>

              <CardContent className="p-6">
                <ul className="space-y-1 mb-4 text-ashoka-gray">
                  <li>Plascon Paint</li>
                  <li>Paint Accessories</li>
                  <li>Cement</li>
                  <li>Wall Putty</li>
                  <li>Waterproofing Materials</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-ashoka-blue text-ashoka-blue hover:bg-ashoka-blue hover:text-white"
                  asChild
                >
                  <Link to="/products#construction">View All</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Category 3 */}
            <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${tool_and_equip_img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold">
                    Tools & Equipment
                  </h3>
                </div>
              </div>

              <CardContent className="p-6">
                <ul className="space-y-1 mb-4 text-ashoka-gray">
                  <li>Power Tools</li>
                  <li>Hand Tools</li>
                  <li>Measuring Tools</li>
                  <li>Electrical Tools</li>
                  <li>Safety Equipment</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-ashoka-blue text-ashoka-blue hover:bg-ashoka-blue hover:text-white"
                  asChild
                >
                  <Link to="/products#construction">View All</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-ashoka-dark mb-4">
                  About Ashoka International Ltd
                </h2>
                <div className="h-1 w-20 bg-ashoka-orange"></div>
              </div>
              <p className="text-ashoka-gray mb-6">
                Ashoka International Ltd is a trusted name in the hardware
                industry, providing high-quality construction and building
                materials for over 15 years. Our commitment to quality,
                competitive pricing, and excellent customer service has made us
                a preferred choice for contractors, builders, and homeowners.
              </p>
              <p className="text-ashoka-gray mb-6">
                We stock a comprehensive range of products including steel bars,
                paints, tools, cement, and much more - all under one roof for
                your convenience.
              </p>
              <Button
                className="bg-ashoka-blue hover:bg-ashoka-dark text-white"
                asChild
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="bg-gray-300 h-80 rounded-lg">
              <img
                src={aboutImage}
                alt="Inside Ashoka Warehouse"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Authorized Dealer Section */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ashoka-dark mb-4">
            Authorized Dealer Of
          </h2>

          {/* Scrolling container */}
          <div className="overflow-hidden whitespace-nowrap">
            <div
              className="inline-flex items-center space-x-20 animate-scroll" // increased space-x-12 to space-x-20
              style={{ minWidth: "max-content" }}
            >
              {[plasconLogo, steelTubeLogo, himaCementLogo, fosrocLogo].map(
                (logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt="Logo"
                    className="h-16 object-contain block"
                  />
                )
              )}

              {/* {[plasconLogo, steelTubeLogo, himaCementLogo, fosrocLogo].map(
                (logo, i) => (
                  <img
                    key={i + 4}
                    src={logo}
                    alt="Logo"
                    className="h-16 object-contain block"
                  />
                )
              )} */}
            </div>
          </div>

          {/* Add more margin-top here */}
          <p className="mt-10 text-ashoka-gray max-w-xl mx-auto">
            Ashoka International Ltd is an authorized dealer of leading
            construction brands including Plascon Paints, Steel & Tube, Hima
            Cement, and Fosroc Waterproofing, ensuring quality and reliability
            for every project.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-ashoka-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ashoka-dark mb-2">
              What Our Customers Say
            </h2>
            <p className="text-ashoka-gray max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-8 shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-ashoka-gray mb-6 italic">
                "Ashoka International has been our go-to supplier for all
                construction materials. Their products are top-notch and their
                staff is knowledgeable and helpful."
              </p>
              <div>
                <p className="font-semibold text-ashoka-dark">John Doe</p>
                <p className="text-sm text-ashoka-gray">Client</p>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-8 shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-ashoka-gray mb-6 italic">
                "I appreciate the wide range of products available at Ashoka.
                Their competitive pricing and prompt delivery service make them
                stand out from others."
              </p>
              <div>
                <p className="font-semibold text-ashoka-dark">Jane Smith</p>
                <p className="text-sm text-ashoka-gray">Client</p>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-8 shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-ashoka-gray mb-6 italic">
                "As a small contractor, I value the personalized service at
                Ashoka International. They understand my needs and always help
                me find the right materials for my projects."
              </p>
              <div>
                <p className="font-semibold text-ashoka-dark">Mike Johnson</p>
                <p className="text-sm text-ashoka-gray">Client</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ashoka-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-100">
              Browse our catalog or contact us for personalized assistance with
              your hardware and construction material needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-white text-ashoka-blue hover:bg-ashoka-orange hover:text-white"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>

              <a
                href="/const_catalogue.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="text-ashoka-blue border-ashoka-blue hover:bg-ashoka-blue hover:text-white flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Catalogue
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
