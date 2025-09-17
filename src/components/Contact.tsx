// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, MapPin, Phone, Send } from "lucide-react";
// import { motion } from "framer-motion";
// import AnimatedSection from "@/components/AnimatedSection";

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-t from-background to-background/50"></div>
      
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="text-gradient">Get In Touch</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Let's connect and build something amazing together.
//             Whether you want to discuss technology, sustainable energy, or just say hello, I'd love to hear from you. Feel free to reach out through the form or connect on social media.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact information */}
//           <AnimatedSection direction="left">
//             <h3 className="text-2xl font-bold mb-8 text-foreground">Let's Talk</h3>
            
//             <div className="space-y-6">
//               {[
//                 { icon: <Mail className="w-6 h-6 text-primary" />, title: "Email", value: "umanggaur007@gmail.com", href: "mailto:umanggaur007@gmail.com" },
//                 // { icon: <Phone className="w-6 h-6 text-primary" />, title: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
//                 { icon: <MapPin className="w-6 h-6 text-primary" />, title: "Location", value: "India", href: null }
//               ].map((contact, index) => (
//                 <motion.div 
//                   key={contact.title}
//                   className="flex items-center gap-4"
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 + index * 0.1 }}
//                   whileHover={{ x: 10 }}
//                 >
//                   <motion.div 
//                     className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover-lift"
//                     whileHover={{ 
//                       scale: 1.1,
//                       backgroundColor: "hsl(var(--primary) / 0.3)",
//                       rotate: 5
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {contact.icon}
//                   </motion.div>
//                   <div>
//                     <p className="font-medium text-foreground">{contact.title}</p>
//                     {contact.href ? (
//                       <motion.a 
//                         href={contact.href} 
//                         className="text-muted-foreground hover:text-primary transition-colors"
//                         whileHover={{ scale: 1.02 }}
//                       >
//                         {contact.value}
//                       </motion.a>
//                     ) : (
//                       <p className="text-muted-foreground">{contact.value}</p>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* <motion.div 
//               className="mt-8 p-6 card-glass rounded-lg hover-lift"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               whileHover={{ scale: 1.02, y: -5 }}
//             >
//               <h4 className="font-semibold text-lg mb-3 text-foreground">Available for:</h4>
//               <ul className="space-y-2 text-muted-foreground">
//                 {[
//                   "Full-stack web development",
//                   "UI/UX design consultation", 
//                   "Technical mentoring",
//                   "Code reviews and audits"
//                 ].map((service, index) => (
//                   <motion.li 
//                     key={index}
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.6 + index * 0.1 }}
//                     whileHover={{ x: 5, color: "hsl(var(--primary))" }}
//                   >
//                     • {service}
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div> */}
//           </AnimatedSection>

//           {/* Contact form */}
//           <AnimatedSection direction="right" delay={0.2}>
//             <motion.div
//               whileHover={{ scale: 1.01, y: -5 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Card className="card-glass p-8 interactive-card hover-lift">
//                 <form className="space-y-6">
//                   <motion.div 
//                     className="grid sm:grid-cols-2 gap-4"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     <motion.div whileFocus={{ scale: 1.02 }}>
//                       <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                         Name
//                       </label>
//                       <Input
//                         id="name"
//                         placeholder="Your name"
//                         className="bg-background/50 border-border focus:border-primary transition-all focus:scale-105"
//                       />
//                     </motion.div>
//                     <motion.div whileFocus={{ scale: 1.02 }}>
//                       <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                         Email
//                       </label>
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="your@email.com"
//                         className="bg-background/50 border-border focus:border-primary transition-all focus:scale-105"
//                       />
//                     </motion.div>
//                   </motion.div>
                  
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 }}
//                     whileFocus={{ scale: 1.02 }}
//                   >
//                     <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
//                       Subject
//                     </label>
//                     <Input
//                       id="subject"
//                       placeholder="Project inquiry"
//                       className="bg-background/50 border-border focus:border-primary transition-all focus:scale-105"
//                     />
//                   </motion.div>
                  
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 }}
//                     whileFocus={{ scale: 1.02 }}
//                   >
//                     <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       placeholder="Tell me about your project..."
//                       rows={6}
//                       className="bg-background/50 border-border focus:border-primary resize-none transition-all focus:scale-105"
//                     />
//                   </motion.div>
                  
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6 }}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Button 
//                       type="submit" 
//                       size="lg" 
//                       className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect hover-lift pulse-glow"
//                     >
//                       <motion.div
//                         whileHover={{ x: 5 }}
//                         className="flex items-center justify-center"
//                       >
//                         <Send className="w-4 h-4 mr-2" />
//                         Send Message
//                       </motion.div>
//                     </Button>
//                   </motion.div>
//                 </form>
//               </Card>
//             </motion.div>
//           </AnimatedSection>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


//final code 1

// import { useRef, useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, MapPin, Send } from "lucide-react";
// import { motion } from "framer-motion";
// import AnimatedSection from "@/components/AnimatedSection";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const formRef = useRef<HTMLFormElement | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

//   const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     setLoading(true);
//     setStatus(null);

//     try {
//       await emailjs.sendForm(
//         "service_hilbza8",   // ✅ Your Service ID
//         "template_4djwug4",  // ✅ Your Template ID
//         formRef.current,
//         "yiucgFx9B-5j-BusG"  // ✅ Your Public Key
//       );

//       setStatus({ type: "success", message: "✅ Message sent successfully!" });
//       formRef.current.reset();
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       setStatus({ type: "error", message: "❌ Failed to send. Please try again later." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-t from-background to-background/50"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="text-gradient">Get In Touch</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Let's connect and build something amazing together.
//             Whether you want to discuss technology, sustainable energy, or just say hello, I'd love to hear from you.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact information */}
//           <AnimatedSection direction="left">
//             <h3 className="text-2xl font-bold mb-8 text-foreground">Let's Talk</h3>

//             <div className="space-y-6">
//               {[
//                 {
//                   icon: <Mail className="w-6 h-6 text-primary" />,
//                   title: "Email",
//                   value: "umanggaur007@gmail.com",
//                   href: "mailto:umanggaur007@gmail.com",
//                 },
//                 {
//                   icon: <MapPin className="w-6 h-6 text-primary" />,
//                   title: "Location",
//                   value: "India",
//                   href: null,
//                 },
//               ].map((contact, index) => (
//                 <motion.div
//                   key={contact.title}
//                   className="flex items-center gap-4"
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 + index * 0.1 }}
//                   whileHover={{ x: 10 }}
//                 >
//                   <motion.div
//                     className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center"
//                     whileHover={{
//                       scale: 1.1,
//                       backgroundColor: "hsl(var(--primary) / 0.3)",
//                       rotate: 5,
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {contact.icon}
//                   </motion.div>
//                   <div>
//                     <p className="font-medium text-foreground">{contact.title}</p>
//                     {contact.href ? (
//                       <motion.a
//                         href={contact.href}
//                         className="text-muted-foreground hover:text-primary transition-colors"
//                         whileHover={{ scale: 1.02 }}
//                       >
//                         {contact.value}
//                       </motion.a>
//                     ) : (
//                       <p className="text-muted-foreground">{contact.value}</p>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </AnimatedSection>

//           {/* Contact form */}
//           <AnimatedSection direction="right" delay={0.2}>
//             <motion.div whileHover={{ scale: 1.01, y: -5 }} transition={{ duration: 0.3 }}>
//               <Card className="card-glass p-8 interactive-card hover-lift">
//                 <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                         Name
//                       </label>
//                       <Input name="from_name" id="name" placeholder="Your name" required />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                         Email
//                       </label>
//                       <Input name="from_email" id="email" type="email" placeholder="your@email.com" required />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
//                       Subject
//                     </label>
//                     <Input name="subject" id="subject" placeholder="Project inquiry" required />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                       Message
//                     </label>
//                     <Textarea name="message" id="message" rows={6} placeholder="Tell me about your project..." required />
//                   </div>

//                   <div>
//                     <Button
//                       type="submit"
//                       size="lg"
//                       disabled={loading}
//                       className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
//                     >
//                       {loading ? "Sending..." : "Send Message"}
//                       <Send className="w-4 h-4 ml-2" />
//                     </Button>
//                   </div>

//                   {status && (
//                     <p
//                       className={`text-center mt-4 text-sm ${
//                         status.type === "success" ? "text-green-500" : "text-red-500"
//                       }`}
//                     >
//                       {status.message}
//                     </p>
//                   )}
//                 </form>
//               </Card>
//             </motion.div>
//           </AnimatedSection>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import emailjs from "@emailjs/browser";
import { ChevronDown, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  // --- MODIFIED: State for controlled form inputs ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  // --- MODIFIED: Handle change for all inputs ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // --- MODIFIED: Replaced with your preferred sendEmail function ---
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null); // Clear previous status

    emailjs
      .send(
        "service_hilbza8", // ✅ Your Service ID
        "template_4djwug4", // ✅ Your Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email, // Ensures reply-to works
        },
        "yiucgFx9B-5j-BusG" // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus({ type: "success", message: "✅ Message sent successfully!" });
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus({ type: "error", message: "❌ Failed to send. Please try again later." });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let’s create something impactful together. Whether it’s tech, ideas, or just a friendly chat, I’m always open to connect.
          </p>
        </div>
         

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact information */}
          <AnimatedSection direction="left">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Let's Talk</h3>
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-6 h-6 text-primary" />, title: "Email", value: "umanggaur026@gmail.com", href: "mailto:umanggaur026@gmail.com" },
                { icon: <MapPin className="w-6 h-6 text-primary" />, title: "Location", value: "India", href: null },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.3)", rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <div>
                    <p className="font-medium text-foreground">{contact.title}</p>
                    {contact.href ? (
                      <motion.a href={contact.href} className="text-muted-foreground hover:text-primary transition-colors" whileHover={{ scale: 1.02 }}>
                        {contact.value}
                      </motion.a>
                    ) : (
                      <p className="text-muted-foreground">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
           <div className="flex items-center mt-12 space-x-6">
            {[
              { icon: <Instagram size={24} />, href: "https://www.instagram.com/umang.gaur__007/" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/umang-gaur-u07/" },
              { icon: <Twitter size={24} />, href: "https://x.com/UmangGaur007" }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.3)", rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {contact.icon}
                </motion.div>
              </motion.a>
            ))}
          </div>

            {/* <div className="space-y-6 mt-12">
            <motion.div 
              className="flex gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { icon: <Instagram size={24} />, href: "https://www.instagram.com/umang.gaur__007/" },
                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/umang-gaur-u07/" },
                { icon: <Twitter size={24} />, href: "https://x.com/UmangGaur007" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className="text-muted-foreground hover:text-primary transition-colors magnetic-effect"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -3,
                    rotate: [0, -10, 10, 0]
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
            </div> */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-foreground">Want to know more about me? My CV's just a click away.</h2>

              <a
                href="/Umang_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  style={{
                    backgroundColor: "rgb(37 99 235 / var(--tw-bg-opacity, 1))",
                    borderColor: "rgb(37 99 235 / var(--tw-bg-opacity, 1))",
                    color: "white",
                  }}
                  // className="bg-primary hover:bg-primary/90 text-primary-foreground w-half"
                >
                  Download My CV Here!
                </Button>
              </a>
            </motion.div>
          </AnimatedSection>
          

          {/* Contact form */}
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div whileHover={{ scale: 1.01, y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="card-glass p-8 interactive-card hover-lift">
                <form onSubmit={sendEmail} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <Input name="name" id="name" placeholder="Your name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input name="email" id="email" type="email" placeholder="your@email.com" required value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <Input name="subject" id="subject" placeholder="Project inquiry" required value={formData.subject} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <Textarea name="message" id="message" rows={6} placeholder="Tell me about your project..." required value={formData.message} onChange={handleChange} />
                  </div>
                  <div>
                    <Button type="submit" size="lg" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      {loading ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  {status && (
                    <p className={`text-center mt-4 text-sm ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
                      {status.message}
                    </p>
                  )}
                </form>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";
// import AnimatedSection from "@/components/AnimatedSection";

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     emailjs
//       .send(
//         "service_hilbza8", // ✅ Your Service ID
//         "template_4djwug4", // ✅ Replace with your Template ID
//         {
//           name: formData.name,
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//           reply_to: formData.email, // ✅ ensures reply-to works
//         },
//         "yiucgFx9B-5j-BusG" // ✅ Replace with your Public Key
//       )
//       .then(
//         (result) => {
//           console.log("Email sent:", result.text);
//           alert("✅ Message sent successfully!");
//           setFormData({ name: "", email: "", subject: "", message: "" });
//         },
//         (error) => {
//           console.error("Error:", error.text);
//           alert("❌ Failed to send message. Try again.");
//         }
//       )
//       .finally(() => setLoading(false));
//   };

//   return (
//     <section id="contact" className="py-16 px-6 bg-gray-50">
//       <div className="max-w-2xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-primary">Contact Me</h2>
//         <p className="mt-2 text-gray-600">
//           Have a question or want to work together? Send me a message 🚀
//         </p>
//       </div>

//       <form onSubmit={sendEmail} className="max-w-xl mx-auto mt-8 space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
//         />
//         <input
//           type="text"
//           name="subject"
//           placeholder="Subject"
//           value={formData.subject}
//           onChange={handleChange}
//           required
//           className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           rows={5}
//           className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
//         ></textarea>

//         <motion.button
//           type="submit"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           disabled={loading}
//           className="w-full py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition"
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </motion.button>
//       </form>

//       {/* Bonus: Call to action */}
//       <AnimatedSection delay={0.8} direction="up">
//         <div className="text-center mt-12">
//           <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
//             <a
//               href="https://github.com/Umang077"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block"
//             >
//               <button className="border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg border shadow-md">
//                 View All Projects
//               </button>
//             </a>
//           </motion.div>
//         </div>
//       </AnimatedSection>
//     </section>
//   );
// };

// export default Contact;
