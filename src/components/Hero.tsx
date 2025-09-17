import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-image.jpg";
import profileImage from "../assets/profile-image-new.png"
import { useState } from "react";

const Hero = () => {
  const offsetY = useParallax();
    const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <motion.div 
        // className="absolute inset-0 hero-gradient parallax-bg"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      ></motion.div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Enhanced floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-32 right-20 w-16 h-16 bg-accent/20 rounded-full"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-20 w-12 h-12 bg-secondary/20 rounded-full"
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2 
        }}
      ></motion.div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                // className="text-gradient"
                className="text-gradient lg:text-2xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Hello, I'm
              </motion.span>
              <br />
              <motion.span 
                className="text-gradient lg:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                 Umang Gaur
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
            Full-Stack Developer | Co-Founder of Abizma | Passionate Learner
            </motion.p>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Driven by a deep curiosity for how things work. I enjoy getting my hands dirty with engineering and building new things from the ground up.
              Dedicated at creating Impactful systems that make a difference.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={() => scrollToSection('#projects')}
                    size="lg" className="bg-blue-600 hover:bg-blue-500 text-white glow-effect hover-lift">
                  Explore My Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                className="text-white border-foreground/20 hover:bg-foreground/10 hover:text-white"
              >
                Get In Touch
              </Button>
              </motion.div>
            </motion.div>
            
            {/* Social links */}
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
          </motion.div>
          
          {/* Hero image */}
          <motion.div 
  className="relative"
  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
>
  <motion.div 
    className="relative interactive-card h-[500px] w-full max-w-md mx-auto"
    whileHover={{ 
      scale: 1.05, 
      rotateY: 5, 
      rotateX: 5,
      transition: { duration: 0.3 }
    }}
  >
    <motion.img 
      src={profileImage} 
      alt="Portfolio Hero" 
      className="h-full w-full object-contain rounded-2xl shadow-2xl" 
      animate={{ 
        boxShadow: [ 
          "0 0 20px hsl(var(--primary) / 0.2)", 
          "0 0 40px hsl(var(--primary) / 0.4)", 
          "0 0 20px hsl(var(--primary) / 0.2)" 
        ] 
      }} 
      transition={{ duration: 2, repeat: Infinity }} 
    />

    <motion.div 
      className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 3, repeat: Infinity }}
    ></motion.div>
  </motion.div>
</motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      {/* <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer"
        >
          <ChevronDown className="text-foreground/60" size={32} />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;