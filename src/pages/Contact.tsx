import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, FileText, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", product: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in required fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", product: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <motion.h1 className="text-3xl md:text-4xl font-extrabold" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <p className="text-secondary-foreground/70 mt-2">We'd love to hear from you. Get in touch for inquiries and quotes.</p>
        </div>
      </div>


      <motion.section
  className="py-16 bg-background"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <div className="container mx-auto px-4">

    <div className="grid md:grid-cols-3 gap-8">

      {/* General Inquiries */}
      <motion.div
        className="bg-muted rounded-2xl p-8 space-y-4 hover:shadow-lg transition flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <MessageCircle className="w-8 h-8 text-primary" />

        <h3 className="text-lg font-bold text-foreground">
          General Inquiries
        </h3>

        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>Product information and specifications</li>
          <li>General questions about our services</li>
          <li>Partnership opportunities</li>
        </ul>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@akbariexim.com" className="font-medium text-primary">Send us an email</a>
      </motion.div>


      {/* Request Quote */}
      <motion.div
        className="bg-muted rounded-2xl p-8 space-y-4 hover:shadow-lg transition flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <FileText className="w-8 h-8 text-primary" />

        <h3 className="text-lg font-bold text-foreground">
          Request Quote
        </h3>

        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>Detailed product quotations</li>
          <li>Custom packaging requirements</li>
          <li>Shipping and logistics planning</li>
        </ul>

        <a href="#" className="font-medium text-primary">Fill the form below</a>
      </motion.div>


      {/* Track Shipment */}
      <motion.div
        className="bg-muted rounded-2xl p-8 space-y-4 hover:shadow-lg transition flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Package className="w-8 h-8 text-primary" />

        <h3 className="text-lg font-bold text-foreground">
          Track Shipment
        </h3>

        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>Real-time shipment tracking</li>
          <li>Documentation status updates</li>
          <li>Delivery confirmations</li>
        </ul>

        <a href="#" className="font-medium text-primary pt-5">Contact your account manager</a>
      </motion.div>

    </div>

  </div>
</motion.section>


      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h2>
                <p className="text-muted-foreground">Reach out to us for product inquiries, pricing, or bulk orders. Our team responds within 24 hours.</p>
              </div>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "Yogichowk , Surat, Gujarat 395010, India" },
                  { icon: Phone, label: "Phone", value: "+91 93164 90925" },
                  { icon: Mail, label: "Email", value: "info@globalexim.com" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="rounded-xl border-primary text-primary hover:bg-green-50" asChild>
                <a href="https://wa.me/919316490925?text=Hello%2C%20I%20am%20interested%20in%20your%20products." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-muted rounded-2xl p-8 space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-2">Send Us a Message</h3>
              <Input placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-xl bg-background" required maxLength={100} />
              <Input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-xl bg-background" required maxLength={255} />
              <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-xl bg-background" maxLength={20} />
              <Input placeholder="Product of Interest" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className="rounded-xl bg-background" maxLength={100} />
              <Textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-xl bg-background resize-none" rows={5} maxLength={1000} />
              <Button type="submit" className="w-full gradient-primary text-primary-foreground rounded-xl border-0" size="lg">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </Button>
            </motion.form>
          </div>


                <motion.section
  className="py-16 bg-muted"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <div className="container mx-auto px-4">

    <div className="bg-background rounded-2xl p-10 md:p-14 text-center max-w-4xl mx-auto shadow-sm">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        Need Immediate Assistance?
      </h2>

      {/* Description */}
      <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
        For urgent inquiries or time-sensitive requirements, our team is available
        24/7 to provide immediate support and guidance.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

        {/* Call Button */}
        <a
          href="tel:+919687391793"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition"
        >
          <Phone className="w-5 h-5" />
          Call Now: +91 98765 43210
        </a>

        {/* Email Button */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@akbariexim.com"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary/10 transition"
        >
          <Mail className="w-5 h-5" />
          Urgent Email
        </a>

      </div>

    </div>

  </div>
</motion.section>



          {/* Google Map Section */}
          <div className="w-full px-4 mt-10">
            <div className="max-w-7xl mx-auto">
              
              {/* Heading */}
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">Our Location</h2>
                <p className="text-muted-foreground">Visit us or connect globally</p>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4290583498455!2d72.8885548!3d21.214828099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7a3077c639%3A0xb2a14f3ba5850acb!2sYogi%20Chowk!5e0!3m2!1sen!2sin!4v1774609597760!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
  
};

export default Contact;
