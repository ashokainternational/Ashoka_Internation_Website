import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState, useRef } from "react"; // add useRef import

const productsData = {
  "Construction & Building Materials": [
    "Cement",
    "White Cement (J.K Company)",
    "BRC",
    "Steel rods / TMT bars",
    "Wire Mesh",
    "Wire Nails",
    "Bricks & Blocks",
    "Aggregates (sand, gravel, stone chips)",
    "Binding wire",
    "Roofing sheets",
    "Waterproofing materials (Fosroc & Dr. Fixit)",
    "Grouts & tile adhesives",
    "Wall putty",
  ],
  "Paint & Finishing": [
    "Interior & exterior paints (Plascon)",
    "Primers & undercoats (Plascon)",
    "Wall textures & decorative finishes (Plascon)",
    "Wood coatings & varnishes (Plascon)",
    "Paint brushes & rollers",
    "Sandpaper & abrasives",
    "Sealants & fillers (Plascon Skim it)",
    "Waterproofing coatings (Plascon Dumpseal)",
    "Enamels & metal paints (Plascon Super Gloss)",
    "Spray paints",
  ],
  "Tools & Equipment": [
    "Power tools (Bosch & Incho)",
    "Hand tools",
    "Measuring tools",
    "Safety equipment",
    "Ladders & scaffolding",
    "Cutting & welding tools",
    "Concrete mixers",
    "Trowels & plastering tools",
    "Toolboxes & storage solutions",
    "Electrical tools & testers",
  ],
  Other: ["Other"],
};

const QuoteForm = () => {
  const [productRequests, setProductRequests] = useState([
    { category: "", product: "", quantity: "" },
  ]);

  // Refs for inputs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const handleChange = (index, field, value) => {
    const updated = [...productRequests];
    updated[index][field] = value;
    setProductRequests(updated);
  };

  const addProductRow = () => {
    setProductRequests([
      ...productRequests,
      { category: "", product: "", quantity: "" },
    ]);
  };
  const removeProductRow = (index) => {
    const updated = productRequests.filter((_, i) => i !== index);
    setProductRequests(updated);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const message = messageRef.current.value.trim();

    const allProductsValid = productRequests.every(
      (item) => item.category && item.product && item.quantity
    );

    if (!name || !email || !phone || !allProductsValid) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const formData = {
      name,
      email,
      phone,
      message,
      products: productRequests,
    };

    console.log("Quote Request Submitted:", formData);
    toast.success("Quote submitted successfully!");
  };

  return (
    <>
      <div>
        {/* Header Section */}
        <section className="bg-ashoka-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                Request a Product Quote
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Fill out the form below to receive a customized quote for
                construction materials and supplies.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* QUOTE CODE */}
      <div className="py-10">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
          <h2 className="text-2xl font-semibold mb-6 text-ashoka-blue">
            Request a Quote
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                ref={nameRef}
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                ref={phoneRef}
                type="tel"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-700">
                Select Products
              </h3>
              {productRequests.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-4 gap-y-4 gap-x-2 items-center"
                >
                  <div>
                    <label className="block text-sm text-gray-700">
                      Category
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={item.category}
                      onChange={(e) =>
                        handleChange(index, "category", e.target.value)
                      }
                    >
                      <option value="">Select Category</option>
                      {Object.keys(productsData).map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">
                      Product
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={item.product}
                      onChange={(e) =>
                        handleChange(index, "product", e.target.value)
                      }
                      disabled={!item.category}
                    >
                      <option value="">Select Product</option>
                      {item.category &&
                        productsData[item.category].map((prod) => (
                          <option key={prod} value={prod}>
                            {prod}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={item.quantity}
                      onChange={(e) =>
                        handleChange(index, "quantity", e.target.value)
                      }
                      min={1}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => removeProductRow(index)}
                      className="text-red-500 hover:text-red-700 text-2xl font-bold"
                      aria-label={`Remove product row ${index + 1}`}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}

              <Button
                type="button"
                className="bg-ashoka-blue text-white hover:bg-ashoka-orange"
                onClick={addProductRow}
              >
                + Add Another Product
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                ref={messageRef}
                className="w-full border border-gray-300 rounded px-3 py-2"
                rows={4}
              ></textarea>
            </div>

            <Button
              type="submit"
              className="bg-ashoka-orange hover:bg-ashoka-blue text-white"
            >
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuoteForm;
