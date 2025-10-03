import { useRef, useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/components/ui/use-toast";
import { toast } from "sonner";

const Contact = () => {
  // Refs for inputs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form data submitted:", formData);

  //   // Show toast notification
  //   toast.success("Message submitted successfully!");

  //   // Reset form
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if (!name || !email || !phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const collectedformData = {
      name,
      email,
      phone,
      message,
    };

    console.log("Contact Us Request Submitted:", collectedformData);
    toast.success("Message Send successfully!");
  };

  return (
    <div>
      {/* Header Section */}
      <section className="bg-ashoka-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with us for inquiries, quotes, or to learn more about
              our products.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <Card className="text-center shadow-md p-6">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-ashoka-blue rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-ashoka-dark mb-3">
                  Our Location
                </h3>
                <p>Plot No. 3, Mulwana (Kibira) road</p>
                <p>Industrial area, P.O.Box 20144</p>
                <p>Kampala Uganda</p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="text-center shadow-md p-6">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-ashoka-blue rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-ashoka-dark mb-3">
                  Contact Info
                </h3>
                {/* <p className="text-ashoka-gray mb-2">
                  <span className="font-medium">Phone:</span> +256 755 968455{" "}
                  {"             "} <br />
                  +256 755 344375
                </p> */}
                {/* <p className="text-ashoka-gray mb-2">
                  <div className="flex">
                    <span className="font-medium w-20">Phone:</span>
                    <span>+256 755 968455</span>
                  </div>
                  <div className="flex">
                    <span className="w-20"></span>
                    <span>+256 755 344375</span>
                  </div>
                </p> */}
                <p className="text-ashoka-gray">
                  <span className="font-medium">
                    Phone: <br />
                  </span>
                  +256 755 968455 <br />
                  +256 755 344375
                </p>
                <p className="text-ashoka-gray">
                  <span className="font-medium">Email:</span> <br />
                  ashokainternational07@gmail.com <br />
                  hemangjoshi10@gmail.com
                </p>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="text-center shadow-md p-6">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-ashoka-blue rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-ashoka-dark mb-3">
                  Business Hours
                </h3>
                <p className="text-ashoka-gray mb-2">
                  <span className="font-medium">Monday - Friday:</span>
                  <br />
                  8:00 AM - 6:00 PM
                </p>
                <p className="text-ashoka-gray">
                  <span className="font-medium">Saturday:</span>
                  <br />
                  8:00 AM - 4:00 PM
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-ashoka-dark mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" name="name" ref={nameRef} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" ref={phoneRef} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    ref={messageRef}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-ashoka-blue hover:bg-ashoka-dark"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-ashoka-dark mb-6">
                Our Location
              </h2>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1994.8791784566804!2d32.61193035537735!3d0.31412669636261137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747835533592!5m2!1sen!2sin"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
              <p className="mt-4 text-ashoka-gray">
                {/* <MapPin className="inline-block mr-2 h-5 w-5 text-ashoka-blue" /> */}
                {/* Plot No. 3, Mulwana (Kibira) road Industrial area, P.O.Box 20144
                Kampala Uganda */}
                Clients in the Democratic Republic of Congo, South Sudan,
                Rwanda, Burundi, and other parts of East Africa also procure our
                materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-ashoka-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ashoka-dark mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-ashoka-gray max-w-2xl mx-auto">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ Item 1 */}
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-ashoka-dark mb-2">
                  Do you offer delivery services?
                </h3>
                <p className="text-ashoka-gray">
                  Yes, we offer delivery services for orders above a certain
                  value. Delivery charges may apply based on your location and
                  order size. Please contact us for specific details.
                </p>
              </CardContent>
            </Card>

            {/* FAQ Item 2 */}
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-ashoka-dark mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-ashoka-gray">
                  We accept various payment methods including cash, credit/debit
                  cards, bank transfers, and mobile money. Corporate clients can
                  also set up credit accounts with proper documentation.
                </p>
              </CardContent>
            </Card>

            {/* FAQ Item 3 */}
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-ashoka-dark mb-2">
                  Can I return products if they don't meet my requirements?
                </h3>
                <p className="text-ashoka-gray">
                  We have a return policy for products in their original
                  condition. Returns must be made within 7 days of purchase with
                  a valid receipt. Please note that some products may not be
                  eligible for return.
                </p>
              </CardContent>
            </Card>

            {/* FAQ Item 4 */}
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-ashoka-dark mb-2">
                  Do you offer bulk discounts?
                </h3>
                <p className="text-ashoka-gray">
                  Yes, we offer discounts for bulk purchases. The discount rates
                  vary depending on the products and quantities. Please contact
                  our sales team to discuss your specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ashoka-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-100">
              Our customer service team is available to help you with any
              questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-white text-ashoka-blue hover:bg-ashoka-orange hover:text-white"
                asChild
              >
                <a href="tel:+256755968455">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-ashoka-blue"
                asChild
              >
                <a href="mailto:ashokainternational07@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
