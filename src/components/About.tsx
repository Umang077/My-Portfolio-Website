// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Code, Palette, Zap, Users, GraduationCapIcon, GraduationCap, LucideGraduationCap, TrophyIcon } from "lucide-react";
// import { motion } from "framer-motion";
// import AnimatedSection from "@/components/AnimatedSection";

// const About = () => {
//   const skills = [
//     "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
//     "Tailwind CSS", "Figma", "Docker", "AWS", "GraphQL", "Next.js"
//   ];

//   const features = [
//     {
//       icon: <Code className="h-8 w-8" />,
//       title: "Full-Stack Development",
//       description: "Building end-to-end applications with modern technologies and best practices."
//     },
//     {
//       icon: <Palette className="h-8 w-8" />,
//       title: "UI/UX Design",
//       description: "Creating intuitive and beautiful user interfaces that users love to interact with."
//     },
//     {
//       icon: <Zap className="h-8 w-8" />,
//       title: "Performance Optimization",
//       description: "Ensuring fast, responsive applications that provide excellent user experiences."
//     },
//     {
//       icon: <Users className="h-8 w-8" />,
//       title: "Team Collaboration",
//       description: "Working effectively in agile teams to deliver high-quality software solutions."
//     }
//   ];
//   const featuresAboutMe = [
//     {
//       icon: <LucideGraduationCap className=" h-8 w-8" />,
//       title: "2025",
//       description: "B.Tech | Electronics and Communication engineering"
//     },
//     {
//       icon: <TrophyIcon className="h-8 w-8" />,
//       title: "98.4%",
//       description: "JEE Mains"
//     },
//     {
//       icon: <Zap className="h-8 w-8" />,
//       title: "19000 Rank",
//       description: "JEE Advanced"
//     },
//     {
//       icon: <Users className="h-8 w-8" />,
//       title: "Team Collaboration",
//       description: "Working effectively in agile teams to deliver high-quality software solutions."
//     }
//   ];


//   return (
//     <section id="about" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50"></div>
      
//       <div className="container mx-auto px-6 relative z-10">
//         <div className=" mb-16">
//           <h2 className="text-4xl text-center lg:text-6xl font-bold mb-5">
//             <span className="text-gradient text-center">About Me</span>
//           </h2>
//           <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Engineer, entrepreneur, and a passionate learner.
//           </p>
//            <p className="text-xl mt-5 text-muted-foreground mx-auto leading-relaxed">
// I'm Umang Gaur, a recent graduate from Punjab Engineering College with a B.Tech in Electronics and Communication Engineering and Specialization in Computer Science.

// Currently, I work as Co founder of Abizma, a Software Development company that is a global business collaboration platform  .

// My journey has been shaped by incredible experiences - from leading a team while being the Executive body member of entrepreneur incubation cell club to host Varun Singla CEO of Gate Smasher . These experiences taught me that innovation happens at the intersection of technology, teamwork, and purpose.

// When I'm not coding or optimizing business operations, you'll find me lost in books or playing around in parks.</p>
//         </div>
//        <div className="grid mb-20 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {featuresAboutMe.map((feature, index) => (
//             <AnimatedSection key={feature.title} delay={index * 0.1} direction="up">
//               <motion.div
//                 whileHover={{ 
//                   y: -10,
//                   scale: 1.05,
//                   rotateY: 5
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Card className="card-glass p-6 text-center hover:glow-effect transition-all duration-300 interactive-card">
//                   <motion.div 
//                     className="text-primary mb-4 flex justify-center"
//                     whileHover={{ 
//                       scale: 1.2,
//                       rotate: 360,
//                       color: "hsl(var(--accent))"
//                     }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     {feature.icon}
//                   </motion.div>
//                   <motion.h2 
//                     className="font-semibold text-lg mb-3 text-foreground text-4xl"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     {feature.title}
//                   </motion.h2>
//                   <motion.p 
//                     className="text-muted-foreground text-sm"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     {feature.description}
//                   </motion.p>
//                 </Card>
//               </motion.div>
//             </AnimatedSection>
//           ))}
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 mb-16">
//           {/* Skills section */}
//           <AnimatedSection direction="left">
//             <h3 className="text-2xl font-bold mb-6 text-foreground">Skills & Technologies</h3>
            // <div className="flex flex-wrap gap-3">
            //   {skills.map((skill, index) => (
            //     <motion.div
            //       key={skill}
            //       initial={{ opacity: 0, scale: 0.8, y: 20 }}
            //       animate={{ opacity: 1, scale: 1, y: 0 }}
            //       transition={{ 
            //         delay: index * 0.1,
            //         duration: 0.5,
            //         ease: "easeOut"
            //       }}
            //       whileHover={{ 
            //         scale: 1.1, 
            //         y: -3,
            //         boxShadow: "0 10px 20px hsl(var(--primary) / 0.3)"
            //       }}
            //       whileTap={{ scale: 0.95 }}
            //     >
            //       <Badge 
            //         variant="secondary" 
            //         className="px-4 py-2 text-sm bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors cursor-pointer hover-lift"
            //       >
            //         {skill}
            //       </Badge>
            //     </motion.div>
            //   ))}
            // </div>
//           </AnimatedSection>

//           Experience section
//           <AnimatedSection direction="right" delay={0.2}>
//             <h3 className="text-2xl font-bold mb-6 text-foreground">Experience</h3>
//             <div className="space-y-4">
//               {[
//                 {
//                   title: "Senior Full-Stack Developer",
//                   company: "TechCorp Inc. • 2022 - Present",
//                   description: "Leading development of scalable web applications serving 100k+ users."
//                 },
//                 {
//                   title: "Frontend Developer", 
//                   company: "StartupXYZ • 2020 - 2022",
//                   description: "Built responsive interfaces and improved user experience by 40%."
//                 }
//               ].map((job, index) => (
//                 <motion.div 
//                   key={index}
//                   className="card-glass rounded-lg p-6 hover-lift"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3 + index * 0.2 }}
//                   whileHover={{ 
//                     scale: 1.02,
//                     y: -5,
//                     boxShadow: "0 20px 40px hsl(var(--primary) / 0.2)"
//                   }}
//                 >
//                   <h4 className="font-semibold text-lg text-foreground">{job.title}</h4>
//                   <p className="text-primary mb-2">{job.company}</p>
//                   <p className="text-muted-foreground">{job.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </AnimatedSection>
//         </div>

//         {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <AnimatedSection key={feature.title} delay={index * 0.1} direction="up">
//               <motion.div
//                 whileHover={{ 
//                   y: -10,
//                   scale: 1.05,
//                   rotateY: 5
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Card className="card-glass p-6 text-center hover:glow-effect transition-all duration-300 interactive-card">
//                   <motion.div 
//                     className="text-primary mb-4 flex justify-center"
//                     whileHover={{ 
//                       scale: 1.2,
//                       rotate: 360,
//                       color: "hsl(var(--accent))"
//                     }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     {feature.icon}
//                   </motion.div>
//                   <motion.h3 
//                     className="font-semibold text-lg mb-3 text-foreground"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     {feature.title}
//                   </motion.h3>
//                   <motion.p 
//                     className="text-muted-foreground text-sm"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     {feature.description}
//                   </motion.p>
//                 </Card>
//               </motion.div>
//             </AnimatedSection>
//           ))}
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default About;


import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users, GraduationCapIcon, GraduationCap, LucideGraduationCap, TrophyIcon, Code2Icon } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  // const skills = [
  //   "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
  //   "Tailwind CSS", "Figma", "Docker", "AWS", "GraphQL", "Next.js"
  // ];

  const Skills = [
    {
      icon: <Code2Icon className="h-8 w-8" />,
      title: "Languages",
      skills: [
        "Java", "Python", "JavaScript", "SQL"
      ]
      // description: "Building end-to-end applications with modern technologies and best practices."
    },
    {
      icon: <Code2Icon className="h-8 w-8" />,
      title: "Frontend",
       skills: [
    "React", "TypeScript", "HTML5/CSS", "Framer Motion", "Redux", "Zustand",
    "TanStack Query", "WebSockets"]
      // description: "Creating intuitive and beautiful user interfaces that users love to interact with."
    },
    {
      icon: <Code2Icon className="h-8 w-8" />,
      title: "Backend",
       skills: [
    "Spring Boot", "Node.js", "Kafka", "Redis", "MySQL", "MongoDB",
    "RESTful APIs", "Distributed Systems", "State Management"
  ]
      // description: "Ensuring fast, responsive applications that provide excellent user experiences."
    },
    {
      icon: <Code2Icon className="h-8 w-8" />,
      title: "Tools",
       skills: [
    "AWS", "Docker", "Git", "GitHub Actions", "Copilot", "CI/CD Pipelines",
  ]
      // description: "Working effectively in agile teams to deliver high-quality software solutions."
    }
  ];
  const featuresAboutMe = [
    {
      icon: <LucideGraduationCap className=" h-8 w-8" />,
      title: "2025",
      description: "B.Tech | Electronics and Communication engineering"
    },
    {
      icon: <TrophyIcon className="h-8 w-8" />,
      title: "98.4%",
      description: "JEE Mains"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "19000 Rank",
      description: "JEE Advanced"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Working effectively in agile teams to deliver high-quality software solutions."
    }
  ];


  return (
    <section id="about" className=" relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className=" mb-16">
          <h2 className="text-4xl text-center lg:text-6xl font-bold mb-5">
            <span className="text-gradient text-center">About Me</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Engineer, entrepreneur, and a passionate learner.
          </p>
           <p className="text-xl mt-5 text-muted-foreground mx-auto leading-relaxed">
I'm Umang Gaur, a recent graduate from Punjab Engineering College with a B.Tech in Electronics and Communication Engineering and Specialization in Computer Science.

Currently, I work as Co founder of Abizma, a Software Development company that is a global business collaboration platform  .

My journey has been shaped by incredible experiences - from leading a team while being the Executive body member of entrepreneur incubation cell club to host Varun Singla CEO of Gate Smasher . These experiences taught me that innovation happens at the intersection of technology, teamwork, and purpose.

When I'm not coding or optimizing business operations, you'll find me lost in books or playing around in parks.</p>
        </div>
       <div className="grid mb-20 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresAboutMe.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 5
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="card-glass p-6 text-center hover:glow-effect transition-all duration-300 interactive-card">
                  <motion.div 
                    className="text-primary mb-4 flex justify-center"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      color: "hsl(var(--accent))"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h2 
                    className="font-semibold text-lg mb-3 text-foreground text-4xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {feature.title}
                  </motion.h2>
                  <motion.p 
                    className="text-muted-foreground text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-12 mb-16"> */}
          {/* Skills section */}
          <AnimatedSection direction="left">
            <h3 className="text-4xl text-center font-bold mb-12 text-foreground">Technical Skills</h3>
            <div className="grid mb-20 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Skills.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 5
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="card-glass p-6 text-center hover:glow-effect transition-all duration-300 interactive-card">
                  <div 
                    className="text-primary mb-4 flex justify-center"
                    
                  >
                    {feature.icon}{" "}
                    <motion.h2 
                    className="ml-2 font-semibold text-lg mb-3 text-foreground text-4xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                     {feature.title}
                  </motion.h2>
                  </div>
                  
              <div className="flex flex-wrap gap-3">
              {feature.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    boxShadow: "0 10px 20px hsl(var(--primary) / 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors cursor-pointer hover-lift"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
          </AnimatedSection>

          {/* Experience section
          <AnimatedSection direction="right" delay={0.2}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Experience</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Senior Full-Stack Developer",
                  company: "TechCorp Inc. • 2022 - Present",
                  description: "Leading development of scalable web applications serving 100k+ users."
                },
                {
                  title: "Frontend Developer", 
                  company: "StartupXYZ • 2020 - 2022",
                  description: "Built responsive interfaces and improved user experience by 40%."
                }
              ].map((job, index) => (
                <motion.div 
                  key={index}
                  className="card-glass rounded-lg p-6 hover-lift"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px hsl(var(--primary) / 0.2)"
                  }}
                >
                  <h4 className="font-semibold text-lg text-foreground">{job.title}</h4>
                  <p className="text-primary mb-2">{job.company}</p>
                  <p className="text-muted-foreground">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection> */}
        {/* </div> */}

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 5
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="card-glass p-6 text-center hover:glow-effect transition-all duration-300 interactive-card">
                  <motion.div 
                    className="text-primary mb-4 flex justify-center"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      color: "hsl(var(--accent))"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3 
                    className="font-semibold text-lg mb-3 text-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;