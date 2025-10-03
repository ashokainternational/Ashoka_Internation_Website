import { Award, CheckCircle, Users, Warehouse } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import IMAGE1 from "../assets/images/IMAGE1.jpg"; // adjust path as needed

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-ashoka-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              About Ashoka International Ltd
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              A trusted name in hardware, serving clients with quality products
              for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className="h-80 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url(${IMAGE1})`,
              }}
            ></div>
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-ashoka-dark mb-4">
                  Our Story
                </h2>
                <div className="h-1 w-20 bg-ashoka-orange"></div>
              </div>
              <p className="text-ashoka-gray mb-6">
                Founded in 2007, Ashoka International Ltd started as a small
                hardware store with a big vision - to provide complete hardware
                solutions to the construction industry. Over the years, we have
                grown significantly, expanding our product range and customer
                base.
              </p>
              <p className="text-ashoka-gray mb-6">
                Today, we are proud to be one of the leading hardware suppliers
                in the region, known for our quality products, competitive
                pricing, and excellent customer service. Our extensive inventory
                includes everything from construction materials to painting
                supplies and tools.
              </p>
              <p className="text-ashoka-gray mb-6">
                At Ashoka International, we believe in building long-term
                relationships with our customers by consistently meeting their
                needs and exceeding their expectations.
              </p>
              <p className="text-ashoka-gray font-semibold">
                A trusted name in hardware, serving clients with quality
                products for more than 17 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-ashoka-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ashoka-dark mb-2">
              Our Mission & Values
            </h2>
            <p className="text-ashoka-gray max-w-2xl mx-auto">
              What drives us and the principles we uphold in our business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="p-8 shadow-md">
              <h3 className="text-2xl font-bold text-ashoka-blue mb-4">
                Our Mission
              </h3>
              <p className="text-ashoka-gray mb-6">
                To provide high-quality hardware and construction materials that
                meet the diverse needs of our customers, while offering
                excellent service, expert advice, and competitive pricing.
              </p>
              <p className="text-ashoka-gray">
                We aim to be the one-stop solution for all hardware
                requirements, making the construction and renovation process
                smoother and more efficient for our clients.
              </p>
            </Card>

            {/* Values */}
            <Card className="p-8 shadow-md">
              <h3 className="text-2xl font-bold text-ashoka-blue mb-4">
                Our Values
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-ashoka-orange mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ashoka-dark">Quality</p>
                    <p className="text-ashoka-gray">
                      We source only the best products from trusted
                      manufacturers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-ashoka-orange mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ashoka-dark">Integrity</p>
                    <p className="text-ashoka-gray">
                      We conduct our business with honesty and transparency.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-ashoka-orange mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ashoka-dark">
                      Customer Focus
                    </p>
                    <p className="text-ashoka-gray">
                      We prioritize customer satisfaction in everything we do.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-ashoka-orange mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ashoka-dark">Innovation</p>
                    <p className="text-ashoka-gray">
                      We continuously update our product range to meet changing
                      market needs.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ashoka-dark mb-2">
              Why Choose Ashoka International
            </h2>
            <p className="text-ashoka-gray max-w-2xl mx-auto">
              Here's what sets us apart from other hardware suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <Card className="text-center p-8 shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-ashoka-blue rounded-full">
                  <Warehouse className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-ashoka-dark mb-3">
                Comprehensive Inventory
              </h3>
              <p className="text-ashoka-gray">
                We stock a wide range of products, offering a one-stop solution
                for all your hardware and construction needs.
              </p>
            </Card>

            {/* Reason 2 */}
            <Card className="text-center p-8 shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-ashoka-blue rounded-full">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-ashoka-dark mb-3">
                Quality Guaranteed
              </h3>
              <p className="text-ashoka-gray">
                We source our products from trusted manufacturers, ensuring you
                receive only the best quality materials.
              </p>
            </Card>

            {/* Reason 3 */}
            <Card className="text-center p-8 shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-ashoka-blue rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-ashoka-dark mb-3">
                Expert Advice
              </h3>
              <p className="text-ashoka-gray">
                Our knowledgeable staff provides expert guidance to help you
                choose the right products for your projects.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-ashoka-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ashoka-dark mb-2">
              Our Team
            </h2>
            <p className="text-ashoka-gray max-w-2xl mx-auto">
              Meet the dedicated professionals behind Ashoka International Ltd.
            </p>
          </div> */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> */}
      {/* Team Member 1 */}
      {/* <div className="text-center">
              <div
                className="mb-4 h-64 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")',
                }}
              ></div>
              <h3 className="text-xl font-semibold text-ashoka-dark">
                John Smith
              </h3>
              <p className="text-ashoka-gray">Founder & CEO</p>
            </div> */}

      {/* Team Member 2 */}
      {/* <div className="text-center">
              <div
                className="mb-4 h-64 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")',
                }}
              ></div>
              <h3 className="text-xl font-semibold text-ashoka-dark">
                Sarah Johnson
              </h3>
              <p className="text-ashoka-gray">Operations Manager</p>
            </div> */}

      {/* Team Member 3 */}
      {/* <div className="text-center">
              <div
                className="mb-4 h-64 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")',
                }}
              ></div>
              <h3 className="text-xl font-semibold text-ashoka-dark">
                Michael Brown
              </h3>
              <p className="text-ashoka-gray">Sales Manager</p>
            </div> */}

      {/* Team Member 4 */}
      {/* <div className="text-center">
              <div
                className="mb-4 h-64 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")',
                }}
              ></div>
              <h3 className="text-xl font-semibold text-ashoka-dark">
                Emily Davis
              </h3>
              <p className="text-ashoka-gray">Customer Relations</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ashoka-dark mb-2">
              Our Certifications
            </h2>
            <p className="text-ashoka-gray max-w-2xl mx-auto">
              We pride ourselves on meeting industry standards and maintaining
              high-quality operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-gray-200 h-32 w-full rounded flex items-center justify-center">
              <span className="text-ashoka-gray font-semibold">
                Certification 1
              </span>
            </div>
            <div className="bg-gray-200 h-32 w-full rounded flex items-center justify-center">
              <span className="text-ashoka-gray font-semibold">
                Certification 2
              </span>
            </div>
            <div className="bg-gray-200 h-32 w-full rounded flex items-center justify-center">
              <span className="text-ashoka-gray font-semibold">
                Certification 3
              </span>
            </div>
            <div className="bg-gray-200 h-32 w-full rounded flex items-center justify-center">
              <span className="text-ashoka-gray font-semibold">
                Certification 4
              </span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
