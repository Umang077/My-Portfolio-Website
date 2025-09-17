// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ExternalLink, Github } from "lucide-react";
// import { motion } from "framer-motion";
// import AnimatedSection from "@/components/AnimatedSection";
// import inventoryImage from "../assets/inventory-image.png";
// import ocrPdfApplication from "../assets/ocr-pdf-application.png";
// import testApplication from "../assets/test-management-application.png";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Inventory Management System",
//       description: "An inventory management system used for 1,000+ products, hosted on AWS with OTP-based auth. Created for Designing Team of Trident Group. Tech Stack used - React.js, Node.js, Express.js, AJV schemas RESTful Apis, AWS EC2 And S3. Features include user authentication and admin dashboard.",
//       image: {inventoryImage},
//       technologies: ["React", "Node.js", "AWS", "AWS Relational Database", "Restful APIs", "AJV"],
//       demoUrl: "https://github.com/Umang077/Web-Based-Inventory-Management-Application",
//       githubUrl: "#"
//     },
//     {
//       title: "Employee KPIs OCR/PDF Data Extractor Application",
//       description: "📄 OCR PDF Data Extraction System – Built for Trident Group A smart automation tool developed using Python and AWS Textract to extract key performance indicators (KPIs) from employee performance PDFs for streamlining HR data processing.",
//       image: {ocrPdfApplication},
//       technologies: ["Python", "AWS Textract"],
//       demoUrl: "https://github.com/Umang077/Employee-KPIs-OCR-PDF-Data-Extractor-Application",
//       githubUrl: "#"
//     },
//     {
//       title: "Member Entry Application",
//       description: "A Member Entry Application app for 11,000+ employees integrated with QR code scanning and cloud storage (AWS S3), and a React Native Android app, now available on the Play Store.",
//       image: {testApplication},
//       technologies: ["React Native", "Node.js", "MSSQL", "Express.js", "AWS S3"],
//       demoUrl: "https://github.com/Umang077/Test-Management-Mobile-Application",
//       githubUrl: "#"
//     },
//     {
//       title: "Real Time Orderbook Viewer with Order Simulation",
//       description: "This project visualizes a live cryptocurrency orderbook (bids/asks) for one or more trading venues (e.g., OKX, Bybit, Deribit). It uses WebSocket feeds to show real‐time depth updates and overlays simulated orders (limit or market) so you can see how your trade would interact with the current book.",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
//       technologies: ["Next.js", "TypeScript", "WebSockets", "Tailwind CSS", "Framer Motion", "Recharts"],
//       demoUrl: "https://github.com/Umang077/-Real-Time-Orderbook-Viewer-with-Order-Simulation",
//       githubUrl: "#"
//     },
    // {
    //   title: "Visiting Card Digitization Application",
    //   description: "An intelligent, cross-platform React Native app designed to replace outdated manual visiting card entry processes and launched in just 25 days to meet a strategic goal from the Chairman’s office.",
    //   image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop",
    //   technologies: ["React Native", "Node.js", "Express.js", "AWS Textract", "AWS S3", "AI/ML","Regex", "Flask APIs"],
    //   demoUrl: "https://github.com/Umang077/Visiting-Card-Digitization-Application",
    //   githubUrl: "#"
    // },
    // {
    //   title: "Dance website Project",
    //   description: "Dance Website Project – Where Design Meets Rhythm This is a sleek, animated, and responsive website crafted for a dance studio, built to reflect the energy and creativity of dance itself. Using Pug for fast and modular templating, CSS for fluid styling, and JavaScript for interactive elements, the site offers users a smooth and immersive browsing",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    //   technologies: ["Pug", "CSS", "JavaScript"],
    //   demoUrl: "https://github.com/Umang077/Dance-website-Project",
    //   githubUrl: "#"
    // }
//   ];

//   return (
//     <section id="projects" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
      
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="text-gradient">My Projects</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Here are some of my recent projects that showcase my skills in full-stack development, 
//             UI/UX design, and modern web technologies.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <AnimatedSection delay={index * 0.1} direction="up" key={project.title}>
//               <motion.div
//                 whileHover={{ 
//                   y: -10,
//                   scale: 1.02,
//                   rotateY: 2,
//                   rotateX: 2
//                 }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//               >
//                 <Card 
//                   className="card-glass overflow-hidden hover:glow-effect transition-all duration-300 interactive-card group"
//                 >
//                 <div className="relative overflow-hidden">
//                   <motion.img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover"
//                     whileHover={{ scale: 1.15, rotate: 1 }}
//                     transition={{ duration: 0.4, ease: "easeOut" }}
//                   />
//                   <motion.div 
//                     className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   ></motion.div>
                  
//                   {/* Project action overlay */}
//                   <motion.div 
//                     className="absolute inset-0 flex items-center justify-center gap-4"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileHover={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <motion.div
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <Button size="sm" className="bg-primary/90 hover:bg-primary backdrop-blur-sm">
//                         <ExternalLink className="w-4 h-4" />
//                       </Button>
//                     </motion.div>
//                     <motion.div
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <Button size="sm" variant="outline" className="border-foreground/20 text-foreground backdrop-blur-sm">
//                         <Github className="w-4 h-4" />
//                       </Button>
//                     </motion.div>
//                   </motion.div>
//                 </div>
              
//                 <div className="p-6">
//                   <motion.h3 
//                     className="text-xl font-bold mb-3 text-foreground"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     {project.title}
//                   </motion.h3>
//                   <motion.p 
//                     className="text-muted-foreground mb-4 text-sm leading-relaxed"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     {project.description}
//                   </motion.p>
                  
//                   <motion.div 
//                     className="flex flex-wrap gap-2 mb-6"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     {project.technologies.map((tech, techIndex) => (
//                       <motion.div
//                         key={tech}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: 0.5 + techIndex * 0.1 }}
//                         whileHover={{ scale: 1.1, y: -2 }}
//                       >
//                         <Badge 
//                           variant="outline" 
//                           className="text-xs border-primary/20 text-primary hover-lift"
//                         >
//                           {tech}
//                         </Badge>
//                       </motion.div>
//                     ))}
//                   </motion.div>
                  
//                   <motion.div 
//                     className="flex gap-3"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6 }}
//                   >
//                     <motion.div 
//                       className="flex-1"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift">
//                         <ExternalLink className="w-4 h-4 mr-2" />
//                         Demo
//                       </Button>
//                     </motion.div>
//                     <motion.div
//                       whileHover={{ scale: 1.05, rotate: 5 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Button size="sm" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/10 hover-lift">
//                         <Github className="w-4 h-4" />
//                       </Button>
//                     </motion.div>
//                   </motion.div>
//                 </div>
//                 </Card>
//               </motion.div>
//             </AnimatedSection>
//           ))}
//         </div>
        
//         <AnimatedSection delay={0.8} direction="up">
//           <div className="text-center mt-12">
//             <motion.div
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover-lift pulse-glow">
//                 View All Projects
//               </Button>
//             </motion.div>
//           </div>
//         </AnimatedSection>
//       </div>
//     </section>
//   );
// };

// export default Projects;


//second final code 

// import { useState } from "react"; // Import useState
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ExternalLink, Github } from "lucide-react";
// import { motion } from "framer-motion";
// import AnimatedSection from "@/components/AnimatedSection";
// import inventoryImage from "../assets/inventory-image.png";
// import ocrPdfApplication from "../assets/ocr-pdf-application.png";
// import testApplication from "../assets/test-management-application.png";
// import visitingApplication from "../assets/visiting-card-application.png";

// const Projects = () => {
//   // Define character limit for description
//   const DESC_CHAR_LIMIT = 150;

  // const projects = [
  //   {
  //     title: "Inventory Management System",
  //     description: "An inventory management system used for 1,000+ products, hosted on AWS with OTP-based auth. Created for Designing Team of Trident Group. Tech Stack used - React.js, Node.js, Express.js, AJV schemas RESTful Apis, AWS EC2 And S3. Features include user authentication and admin dashboard.",
  //     // --- IMAGE FIX ---
  //     image: inventoryImage,
  //     technologies: ["React", "Node.js", "AWS", "AWS Relational Database", "Restful APIs", "AJV"],
  //     demoUrl: "https://github.com/Umang077/Web-Based-Inventory-Management-Application",
  //     githubUrl: "#"
  //   },
  //   {
  //     title: "Employee KPIs OCR/PDF Data Extractor Application",
  //     description: "📄 OCR PDF Data Extraction System – Built for Trident Group A smart automation tool developed using Python and AWS Textract to extract key performance indicators (KPIs) from employee performance PDFs for streamlining HR data processing.",
  //     // --- IMAGE FIX ---
  //     image: ocrPdfApplication,
  //     technologies: ["Python", "AWS Textract"],
  //     demoUrl: "https://github.com/Umang077/Employee-KPIs-OCR-PDF-Data-Extractor-Application",
  //     githubUrl: "#"
  //   },
  //   {
  //     title: "Member Entry Application",
  //     description: "A Member Entry Application app for 11,000+ employees integrated with QR code scanning and cloud storage (AWS S3), and a React Native Android app, now available on the Play Store.",
  //     image: testApplication,
  //     technologies: ["React Native", "Node.js", "MSSQL", "Express.js", "AWS S3"],
  //     demoUrl: "https://github.com/Umang077/Test-Management-Mobile-Application",
  //     githubUrl: "#"
  //   },
  //   {
  //     title: "Real Time Orderbook Viewer with Order Simulation",
  //     description: "This project visualizes a live cryptocurrency orderbook (bids/asks) for one or more trading venues (e.g., OKX, Bybit, Deribit). It uses WebSocket feeds to show real‐time depth updates and overlays simulated orders (limit or market) so you can see how your trade would interact with the current book.",
  //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  //     technologies: ["Next.js", "TypeScript", "WebSockets", "Tailwind CSS", "Framer Motion", "Recharts"],
  //     demoUrl: "https://github.com/Umang077/-Real-Time-Orderbook-Viewer-with-Order-Simulation",
  //     githubUrl: "#"
  //   },
  //  {
  //     title: "Visiting Card Digitization Application",
  //     description: "An intelligent, cross-platform React Native app designed to replace outdated manual visiting card entry processes and launched in just 25 days to meet a strategic goal from the Chairman’s office.",
  //     image: visitingApplication,
  //     technologies: ["React Native", "Node.js", "Express.js", "AWS Textract", "AWS S3", "AI/ML","Regex", "Flask APIs"],
  //     demoUrl: "https://github.com/Umang077/Visiting-Card-Digitization-Application",
  //     githubUrl: "#"
  //   },
  //   {
  //     title: "Dance website Project",
  //     description: "Dance Website Project – Where Design Meets Rhythm This is a sleek, animated, and responsive website crafted for a dance studio, built to reflect the energy and creativity of dance itself. Using Pug for fast and modular templating, CSS for fluid styling, and JavaScript for interactive elements, the site offers users a smooth and immersive browsing",
  //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
  //     technologies: ["Pug", "CSS", "JavaScript"],
  //     demoUrl: "https://github.com/Umang077/Dance-website-Project",
  //     githubUrl: "#"
  //   }
  // ];

//   // State to manage expanded descriptions
//   const [expanded, setExpanded] = useState(projects.map(() => false));

//   const toggleExpand = (index) => {
//     setExpanded(
//       expanded.map((item, i) => (i === index ? !item : item))
//     );
//   };

//   return (
//     <section id="projects" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
      
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="text-gradient">My Projects</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Here are some of my recent projects that showcase my skills in full-stack development, 
//             UI/UX design, and modern web technologies.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => {
//             const isLongDescription = project.description.length > DESC_CHAR_LIMIT;
//             const isExpanded = expanded[index];

//             return (
//               <AnimatedSection delay={index * 0.1} direction="up" key={project.title}>
//                 <motion.div
//                   className="h-full" // Ensure the motion div takes full height of the grid cell
//                   whileHover={{ 
//                     y: -10,
//                     scale: 1.02,
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   transition={{ duration: 0.3, ease: "easeOut" }}
//                 >
//                   <Card 
//                     // --- CONSTANT CARD SIZE FIX ---
//                     className="card-glass overflow-hidden hover:glow-effect transition-all duration-300 interactive-card group h-full flex flex-col"
//                   >
//                     <div className="relative overflow-hidden">
//                       <motion.img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-48 object-cover"
//                         whileHover={{ scale: 1.15 }}
//                         transition={{ duration: 0.4, ease: "easeOut" }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
//                     </div>
                  
//                     {/* --- CONSTANT CARD SIZE FIX (Flex container) --- */}
//                     <div className="p-6 flex flex-col flex-grow">
//                       <h3 className="text-xl font-bold mb-3 text-foreground">
//                         {project.title}
//                       </h3>
                      
//                       {/* --- SHOW MORE/LESS LOGIC --- */}
//                       <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
//                         {isLongDescription && !isExpanded
//                           ? `${project.description.substring(0, DESC_CHAR_LIMIT)}...`
//                           : project.description}
//                       </p>

//                       {isLongDescription && (
//                         <button
//                           onClick={() => toggleExpand(index)}
//                           className="text-primary text-sm font-semibold hover:underline mb-4 self-start"
//                         >
//                           {isExpanded ? "Show less" : "Show more"}
//                         </button>
//                       )}
                      
//                       <div className="flex flex-wrap gap-2 mb-6">
//                         {project.technologies.map((tech) => (
//                            <Badge 
//                              key={tech}
//                              variant="outline" 
//                              className="text-xs border-primary/20 text-primary"
//                            >
//                              {tech}
//                            </Badge>
//                         ))}
//                       </div>
                      
//                       {/* --- CONSTANT CARD SIZE FIX (Pushes buttons to bottom) --- */}
//                       <div className="flex gap-3 mt-auto">
//                         <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift">
//                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
//                               <ExternalLink className="w-4 h-4 mr-2" /> Demo
//                            </a>
//                         </Button>
//                         <Button asChild size="sm" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/10 hover-lift">
//                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                               <Github className="w-4 h-4" />
//                            </a>
//                         </Button>
//                       </div>
//                     </div>
//                   </Card>
//                 </motion.div>
//               </AnimatedSection>
//             )
//           })}
//         </div>
        
//         <AnimatedSection delay={0.8} direction="up">
//           <div className="text-center mt-12">
//              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover-lift pulse-glow">
//                View All Projects
//              </Button>
//           </div>
//         </AnimatedSection>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import inventoryImage from "../assets/inventory-image.png";
import ocrPdfApplication from "../assets/ocr-pdf-application.png";
import testApplication from "../assets/test-management-application.png";
import visitingApplication from "../assets/visiting-card-application.png";
import danceApp from "../assets/dance-website.png";

const Projects = () => {
  const DESC_CHAR_LIMIT = 150;

  const projects = [
    {
      title: "Inventory Management System",
      description: "An inventory management system used for 1,000+ products, hosted on AWS with OTP-based auth. Created for Designing Team of Trident Group. Tech Stack used - React.js, Node.js, Express.js, AJV schemas RESTful Apis, AWS EC2 And S3. Features include user authentication and admin dashboard.",
      // --- IMAGE FIX ---
      image: inventoryImage,
      technologies: ["React.js", "Node.js", "AWS S3","AWS EC2", "AWS Relational Database", "Restful APIs", "AJV", "Redis"],
      demoUrl: "https://github.com/Umang077/Web-Based-Inventory-Management-Application",
      githubUrl: "#"
    },
    {
      title: "Employee KPIs OCR/PDF Data Extractor Application",
      description: "📄 OCR PDF Data Extraction System – Built for Trident Group A smart automation tool developed using Python and AWS Textract to extract key performance indicators (KPIs) from employee performance PDFs for streamlining HR data processing.",
      // --- IMAGE FIX ---
      image: ocrPdfApplication,
      technologies: ["Python", "AWS Textract"],
      demoUrl: "https://github.com/Umang077/Employee-KPIs-OCR-PDF-Data-Extractor-Application",
      githubUrl: "#"
    },
    {
      title: "Member Entry Application",
      description: "A Member Entry Application app for 11,000+ employees integrated with QR code scanning and cloud storage (AWS S3), and a React Native Android app, now available on the Play Store.",
      image: testApplication,
      technologies: ["React Native", "Node.js", "MSSQL", "Express.js", "AWS S3"],
      demoUrl: "https://github.com/Umang077/Test-Management-Mobile-Application",
      githubUrl: "#"
    },
    {
      title: "Real Time Orderbook Viewer with Order Simulation",
      description: "This project visualizes a live cryptocurrency orderbook (bids/asks) for one or more trading venues (e.g., OKX, Bybit, Deribit). It uses WebSocket feeds to show real‐time depth updates and overlays simulated orders (limit or market) so you can see how your trade would interact with the current book.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: [ "TypeScript", "WebSockets", "Tailwind CSS", "Framer Motion", "Recharts"],
      demoUrl: "https://github.com/Umang077/-Real-Time-Orderbook-Viewer-with-Order-Simulation",
      githubUrl: "#"
    },
   {
      title: "Visiting Card Digitization Application",
      description: "An intelligent, cross-platform React Native app designed to replace outdated manual visiting card entry processes and launched in just 25 days to meet a strategic goal from the Chairman’s office.",
      image: visitingApplication,
      technologies: ["React Native", "Node.js", "Express.js", "AWS Textract", "AWS S3", "AI/ML","Regex", "Flask APIs"],
      demoUrl: "https://github.com/Umang077/Visiting-Card-Digitization-Application",
      githubUrl: "#"
    },
    {
      title: "Dance website Project",
      description: "Dance Website Project – Where Design Meets Rhythm This is a sleek, animated, and responsive website crafted for a dance studio, built to reflect the energy and creativity of dance itself. Using Pug for fast and modular templating, CSS for fluid styling, and JavaScript for interactive elements, the site offers users a smooth and immersive browsing",
      image: danceApp,
      technologies: ["Pug", "CSS", "JavaScript"],
      demoUrl: "https://github.com/Umang077/Dance-website-Project",
      githubUrl: "#"
    }
  ];


  const [expanded, setExpanded] = useState(projects.map(() => false));
  const [selectedProject, setSelectedProject] = useState(null); // State for the modal

  const toggleExpand = (index) => {
    setExpanded(expanded.map((item, i) => (i === index ? !item : item)));
  };

return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>

      <div className="container mx-auto px-6 relative z-10">
         <div className="text-center mb-16">
           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
             <span className="text-gradient">My Projects</span>
           </h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             Here are some of my recent projects that showcase my skills in full-stack development, 
             System Design, and modern web technologies.
           </p>
         </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isLongDescription = project.description.length > DESC_CHAR_LIMIT;
            const isExpanded = expanded[index];

            return (
              <AnimatedSection delay={index * 0.1} direction="up" key={project.title}>
                <motion.div
                  className="h-full"
                  whileHover={{ y: -10, scale: 1.02, }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                <Card className="card-glass overflow-hidden transition-all duration-300 interactive-card group h-full flex flex-col">
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }} // keep subtle zoom
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button size="sm" className="bg-primary/90 hover:bg-primary">
                        Expand
                      </Button>
                      
                    </motion.div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {isLongDescription && !isExpanded
                        ? `${project.description.substring(0, DESC_CHAR_LIMIT)}...`
                        : project.description}
                    </p>
                    {isLongDescription && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-primary text-sm font-semibold hover:underline mb-4 self-start"
                      >
                        {isExpanded ? "Show less" : "Show more"}
                      </button>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-sm border-[hsl(214,60%,54%)]/50 text-[hsl(214,60%,54%)]"
                      >
                        {tech}
                      </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <Button
                        asChild
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground "
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" /> Project Link
                        </a>
                      </Button>
                      
                    </div>
                  </div>
                </Card>

                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
        <div className="text-center mt-12">
  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button /* ... */ >
      <a href="https://github.com/Umang077">View All Projects</a>
    </Button>
  </motion.div>
</div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background/80 card-glass border border-foreground/10 rounded-xl p-6 md:p-8 max-w-4xl w-full relative grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-lg w-full h-full object-cover max-h-[400px]"
                />
              </div>

              <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-foreground mb-3">{selectedProject.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.technologies.map((tech) => (
                    <Badge
                    key={tech}
                    variant="outline"
                    className="text-sm border-[hsl(214,60%,54%)]/50 text-[hsl(214,60%,54%)]"
                  >
                    {tech}
                  </Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <Button asChild className="w-full">
                    <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                  {/* <Button asChild variant="secondary" className="w-full">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> Source Code
                    </a>
                  </Button> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;