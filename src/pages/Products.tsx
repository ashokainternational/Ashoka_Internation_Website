import { useState } from "react";
import { Download, Filter, Link, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import paint_brush from "../assets/images/product/paint_brush.png";
import hallow_section from "../assets/images/product/hallow_section.png";
import tmt_bars from "../assets/images/product/tmt_bars.png";
import binding_wire from "../assets/images/product/binding_wire.png";
import paint from "../assets/images/product/paint.png";
import masking_tape from "../assets/images/product/masking_tape.png";
import putty_knife from "../assets/images/product/putty_knife.png";
import wire_brush from "../assets/images/product/wire_brush.png";
import ladder from "../assets/images/product/ladder.png";
import paint_roller from "../assets/images/product/paint_roller.png";
import electric_tool from "../assets/images/product/electric_tool.jpg";
import garden_tool from "../assets/images/product/garden_tool.png";
import hand_tool from "../assets/images/product/hand_tool.png";
import red_tape from "../assets/images/product/red_tape.jpg";

// Product data - this would typically come from an API or database
const productCategories = [
  {
    id: "construction",
    name: "Construction & Building Materials",
    products: [
      {
        id: 1,
        name: "Steel Bars",
        description: "High-quality steel bars for construction.",
        image: hallow_section,
      },
      {
        id: 2,
        name: "TMT Bars",
        description: "Thermo Mechanically Treated bars for superior strength.",
        image: tmt_bars,
      },
      {
        id: 3,
        name: "Binding Wire",
        description: "Galvanized binding wire for construction use.",
        image: binding_wire,
      },

      // {
      //   id: 2,
      //   name: "Cutting Discs",
      //   description: "Durable cutting discs for various materials.",
      // },
      // {
      //   id: 3,
      //   name: "Welding Rods",
      //   description: "Professional welding rods for strong joints.",
      // },
      // {
      //   id: 4,
      //   name: "Power Tools",
      //   description: "Reliable power tools for construction work.",
      // },
      // {
      //   id: 5,
      //   name: "BRC Mesh",
      //   description: "Standard BRC mesh for reinforcement.",
      // },
      // {
      //   id: 6,
      //   name: "Wire Nails",
      //   description: "Various sizes of wire nails available.",
      // },
      // {
      //   id: 7,
      //   name: "Binding Wire",
      //   description: "Galvanized binding wire for construction use.",
      // },
      // {
      //   id: 8,
      //   name: "Construction Adhesives",
      //   description: "Strong adhesives for building materials.",
      // },
    ],
  },
  {
    id: "paint",
    name: "Paint & Finishing",
    products: [
      // {
      //   id: 9,
      //   name: "Plascon Paint",
      //   description: "Premium quality Plascon paints in various colors.",
      // },
      {
        id: 4,
        name: "Paint",
        description: "Premium quality paint for all surfaces.",
        image: paint,
      },
      {
        id: 5,
        name: "Masking Tape",
        description: "Easy-peel masking tape for neat paint jobs.",
        image: masking_tape,
      },
      {
        id: 6,
        name: "Putty Knife",
        description: "Flexible putty knife for applying wall putty.",
        image: putty_knife,
      },
      {
        id: 7,
        name: "Wire Brush",
        description: "Strong wire brush for cleaning surfaces.",
        image: wire_brush,
      },

      {
        id: 8,
        name: "Paint Roller",
        description: "Smooth finish paint roller for walls and ceilings.",
        image: paint_roller,
      },
      {
        id: 9,
        name: "Paint Brushes",
        description: "Professional paint brushes for smooth application.",
        image: paint_brush,
      },
      // {
      //   id: 11,
      //   name: "Cement",
      //   description: "High-grade cement for construction projects.",
      // },
      // {
      //   id: 12,
      //   name: "Wall Putty",
      //   description: "Smooth wall putty for perfect finishing.",
      // },
      // {
      //   id: 13,
      //   name: "Waterproofing Materials",
      //   description: "Effective waterproofing solutions.",
      // },
      // {
      //   id: 14,
      //   name: "Paint Rollers",
      //   description: "Quality paint rollers for even application.",
      // },
      // {
      //   id: 15,
      //   name: "Sandpaper",
      //   description: "Various grades of sandpaper for surface preparation.",
      // },
      // {
      //   id: 16,
      //   name: "Varnish",
      //   description: "Protective varnish for wood surfaces.",
      // },
    ],
  },
  {
    id: "tools",
    name: "Tools & Equipment",
    products: [
      {
        id: 17,
        name: "Ladder",
        description: "Durable aluminum ladder for construction and home use.",
        image: ladder,
      },
      {
        id: 18,
        name: "Hand Tools",
        description: "Essential hand tools for various tasks.",
        image: hand_tool,
      },
      {
        id: 19,
        name: "Measuring Tools",
        description: "Precision measuring instruments.",
        image: red_tape,
      },
      {
        id: 20,
        name: "Electrical Tools",
        description: "Specialized tools for electrical work.",
        image: electric_tool,
      },
      // {
      //   id: 21,
      //   name: "Safety Equipment",
      //   description: "Essential safety gear for construction work.",
      // },

      // {
      //   id: 22,
      //   name: "Plumbing Tools",
      //   description: "Specialized tools for plumbing work.",
      // },
      {
        id: 23,
        name: "Gardening Tools",
        description: "Quality tools for gardening and landscaping.",
        image: garden_tool,
      },
      // {
      //   id: 24,
      //   name: "Tool Storage",
      //   description: "Organized storage solutions for tools.",
      // },
    ],
  },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = productCategories.flatMap((category) =>
    category.products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      {/* Header Section */}
      <section className="bg-ashoka-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our wide range of quality hardware and construction
              materials.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="flex items-center bg-ashoka-gray hover:bg-ashoka-dark">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <a
              href="/const_catalogue.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center bg-ashoka-orange hover:bg-ashoka-blue text-white">
                <Download className="mr-2 h-4 w-4" />
                Download Catalog
              </Button>
            </a>
          </div>

          {/* Product Tabs */}
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-8 flex flex-wrap gap-2">
              <TabsTrigger value="all">All Products</TabsTrigger>
              {productCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* All Products Tab */}
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>

            {/* Category Tabs */}
            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products
                    .filter(
                      (product) =>
                        product.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        product.description
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ashoka-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-ashoka-dark mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-ashoka-gray max-w-2xl mx-auto mb-8">
              We have a much wider range of products than what's shown here.
              Contact us for specific requirements or to check availability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button
                  className="bg-ashoka-blue hover:bg-ashoka-dark text-white"
                  asChild
                >
                  <a href="/contact">Contact Us</a>
                </Button>
              </Link>
              <a
                href="/const_catalogue.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-ashoka-blue text-ashoka-blue hover:bg-ashoka-blue hover:text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Catalog
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Product Card Component
const ProductCard = ({
  product,
}: {
  product: { id: number; name: string; description: string; image?: string };
}) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain bg-white p-2"
      />

      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-ashoka-dark mb-2">
          {product.name}
        </h3>
        <p className="text-ashoka-gray mb-4">{product.description}</p>
        <Button
          variant="outline"
          className="w-full border-ashoka-blue text-ashoka-blue hover:bg-ashoka-blue hover:text-white"
        >
          Enquire Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default Products;
