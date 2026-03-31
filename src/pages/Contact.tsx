import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  FileText,
  Clock
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import QuoteFormDialog from "@/components/QuoteFormDialog";

const Contact = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden">

      {/* HEADER */}
      <div className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>

          <p className="text-secondary-foreground/70 mt-2">
            We'd love to hear from you. Get in touch for inquiries and quotes.
          </p>
        </div>
      </div>


      {/* CONTACT CARDS */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-12">

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14
              }}
              className="group bg-muted rounded-2xl p-8 space-y-5
              border border-transparent hover:border-primary/20
              hover:shadow-xl transition-all"
            >

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300"/>
              </div>

              <h3 className="text-xl font-bold text-foreground">
                General Inquiries
              </h3>

              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Product information and specifications</li>
                <li>General questions about our services</li>
                <li>Partnership opportunities</li>
              </ul>

              <a
                href="mailto:info@akbariexim.com"
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Mail className="w-4 h-4"/>
                Send us an email →
              </a>

            </motion.div>


            {/* CARD 2 */}
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14
              }}
              className="group bg-muted rounded-2xl p-8 space-y-5
              border border-transparent hover:border-primary/20
              hover:shadow-xl transition-all"
            >

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300"/>
              </div>

              <h3 className="text-xl font-bold text-foreground">
                Request Quote
              </h3>

              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Detailed product quotations</li>
                <li>Custom packaging requirements</li>
                <li>Shipping and logistics planning</li>
              </ul>

              <button
                onClick={() => setQuoteOpen(true)}
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <FileText className="w-4 h-4"/>
                Fill the form →
              </button>

            </motion.div>


            {/* CARD 3 */}
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14
              }}
              className="group bg-muted rounded-2xl p-8 space-y-5
              border border-transparent hover:border-primary/20
              hover:shadow-xl transition-all"
            >

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300"/>
              </div>

              <h3 className="text-xl font-bold text-foreground">
                Call Manager
              </h3>

              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Real-time shipment tracking</li>
                <li>Documentation status updates</li>
                <li>Delivery confirmations</li>
              </ul>

              <a
                href="tel:+919865327410"
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Phone className="w-4 h-4"/>
                Call: +91 98653 27410 →
              </a>

            </motion.div>

          </div>
        </div>
      </section>


      {/* CONTACT FORM */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">

          <motion.form
            onSubmit={handleSubmit}
            className="bg-muted rounded-2xl p-8 space-y-6"
          >

            <h3 className="text-2xl font-bold">
              Get a Detailed Quote
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Full Name *" required />
              <Input placeholder="Company Name *" required />
              <Input type="email" placeholder="Email Address *" required />
              <Input placeholder="Phone Number *" required />
              <Input placeholder="Country *" required />
            </div>

            <Textarea
              className="h-[200px]"
              placeholder="Enter your requirements..."
            />

            <Button type="submit" className="gradient-primary">
              <Send className="w-4 h-4 mr-2"/>
              Send Request
            </Button>

          </motion.form>


          {/* CONTACT INFO */}
          <div className="space-y-6">

            <h2 className="text-2xl font-bold">
              Get In Touch
            </h2>

            {[
              { icon: MapPin, label: "Address", value: "Yogichowk, Surat, Gujarat, India" },
              { icon: Phone, label: "Phone", value: "+91 93164 90925" },
              { icon: Mail, label: "Email", value: "info@akbariexim.com" },
              { icon: Clock, label: "Office Hours", value: "Mon - Sat: 9AM – 6PM" }
            ].map((item) => (

              <div key={item.label} className="flex gap-4">

                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary"/>
                </div>

                <div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* GOOGLE MAP */}
      <div className="px-4 pb-20">
        <iframe
          className="w-full h-[400px] rounded-2xl shadow-lg"
          src="https://www.google.com/maps?q=Yogi%20Chowk%20Surat&output=embed"
          loading="lazy"
        />
      </div>


      {/* QUOTE POPUP */}
      <QuoteFormDialog
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />

    </div>
  );
};

export default Contact;