// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Code, Palette, Zap, Users, GraduationCapIcon, GraduationCap, LucideGraduationCap, TrophyIcon } from "lucide-react";
// import { motion } from "framer-motion";
// import AnimatedSection from "@/components/AnimatedSection";

// const Work = () => {
// // 
//   return (
//     <section id="work" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50"></div>
      
//       <div className="container mx-auto px-6 relative z-10">
//         <div className=" mb-16">
//           <h2 className="text-4xl text-center lg:text-6xl font-bold mb-5">
//             <span className="text-gradient text-center">Experience</span>
//           </h2>
          
//         </div>
     

//         <div className="grid lg:grid-cols-2  mb-16">
          

//           <AnimatedSection direction="right" delay={0.2}>
//             {/* <h3 className="text-2xl font-bold mb-6 text-foreground">Experience</h3> */}
//             <div className="space-y-4">
//               {[
//                 {
//                   title: "Co Founder",
//                   company: "Abizma • Dec 2024 - Present",
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

//       </div>
//     </section>
//   );
// };

// export default Work;


// import { motion } from "framer-motion";
// import AnimatedSection from "@/components/AnimatedSection";

// const Work = () => {
//   return (
//     <section id="work" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="mb-16">
//           <h2 className="text-4xl text-center lg:text-6xl font-bold mb-5">
//             <span className="text-gradient text-center">Experience</span>
//           </h2>
//         </div>

//         {/* Centered work experience */}
//         <div className="flex justify-center">
//           <AnimatedSection direction="right" delay={0.2}>
//             <div className="space-y-6 max-w-lg">
//               {[
//                 {
//                   title: "Co Founder",
//                   company: "Abizma • Dec 2024 - Present",
//                   description:
//                     "Co-founder of Abizma, a next-generation platform revolutionizing how businesses discover and connect with each other. Launched our MVP in May 2025, already empowering 45+ businesses to build meaningful partnerships faster.",
//                 },
//                 {
//                   title: "Software Developer",
//                   company: "Trident Group India • Jan 2024 - July 2024",
//                   description:
//                     "Collaborated with a team of 4 to drive key digital transformation initiatives, including high-impact projects endorsed by the CEO and MD. Successfully delivered 3+ web and mobile applications that streamlined operations for over 11,000 employees, generating an estimated cost savings of ₹25–30 lakhs annually by reducing manual HR tasks, paperwork, and operational inefficiencies.

//  • Built a web-based product comparison platform enabling cross-company benchmarking, helping product teams align with market standards and improve competitiveness.

//  • Developed a test management mobile app (React Native + Node.js + MongoDB) that automated employee testing and tracking processes, reducing HR workload by ~60% and saving an estimated ₹10–15 lakhs/year in administrative overhead.

//  • Created an AI/ML-driven business card scanner app using AWS Textract, improving contact management and reducing data entry effort, which led to better CRM efficiency across teams.

//  • Contributed to the company’s long-term paperless goal, replacing manual documentation with digital workflows using React Native, ReactJS, and Python, estimated to reduce paper and printing costs by ₹5–7 lakhs annually",
//                 },
//                 {
//                   title: "Open Source Contributor",
//                   company: "GSSoC  • May 2023 - July 2023",
//                   description:
//                     "Open Source Program
// - Actively contributed to open-source projects under the mentorship of experienced developers.
// - Gained hands-on experience with version control (Git), issue tracking, and collaborative development workflows.
// - Implemented new features, fixed bugs, and optimized code across multiple repositories.
// - Engaged with a vibrant community to improve real-world projects while enhancing knowledge in frontend/backend development." },
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
//                     boxShadow: "0 20px 40px hsl(var(--primary) / 0.2)",
//                   }}
//                 >
//                   <h4 className="font-semibold text-lg text-foreground">
//                     {job.title}
//                   </h4>
//                   <p className="text-primary mb-2">{job.company}</p>
//                   <p className="text-muted-foreground">{job.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </AnimatedSection>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Work;

// correct code but with css adjustment

// import { useState } from "react";
// import { motion } from "framer-motion";
// import AnimatedSection from "@/components/AnimatedSection";

// const Work = () => {
//   // Define the character limit for truncation
//   const CHAR_LIMIT = 300;

//   // Function to split description into bullet points
//   const formatDescription = (description) => {
//     return description
//       .split("\n")
//       .map((line) => line.trim())
//       .filter((line) => line.length > 0);
//   };

//   const jobs = [
//     {
//       title: "Co Founder",
//       company: "Abizma • Dec 2024 - Present",
//       description:
//         "Co-founder of Abizma, a next-generation platform revolutionizing how businesses discover and connect with each other. Launched our MVP in May 2025, already empowering 45+ businesses to build meaningful partnerships faster.",
//     },
//     {
//       title: "Software Developer",
//       company: "Trident Group India • Jan 2024 - July 2024",
//       description:
//         "Collaborated with a team of 4 to drive key digital transformation initiatives, including high-impact projects endorsed by the CEO and MD. Successfully delivered 3+ web and mobile applications that streamlined operations for over 11,000 employees, generating an estimated cost savings of ₹25–30 lakhs annually by reducing manual HR tasks, paperwork, and operational inefficiencies.\n\n• Built a web-based product comparison platform enabling cross-company benchmarking, helping product teams align with market standards and improve competitiveness.\n\n• Developed a test management mobile app (React Native + Node.js + MongoDB) that automated employee testing and tracking processes, reducing HR workload by ~60% and saving an estimated ₹10–15 lakhs/year in administrative overhead.\n\n• Created an AI/ML-driven business card scanner app using AWS Textract, improving contact management and reducing data entry effort, which led to better CRM efficiency across teams.\n\n• Contributed to the company’s long-term paperless goal, replacing manual documentation with digital workflows using React Native, ReactJS, and Python, estimated to reduce paper and printing costs by ₹5–7 lakhs annually",
//     },
//     {
//       title: "Open Source Contributor",
//       company: "GSSoC • May 2023 - July 2023",
//       description:
//         "Open Source Program\n- Actively contributed to open-source projects under the mentorship of experienced developers.\n- Gained hands-on experience with version control (Git), issue tracking, and collaborative development workflows.\n- Implemented new features, fixed bugs, and optimized code across multiple repositories.\n- Engaged with a vibrant community to improve real-world projects while enhancing knowledge in frontend/backend development.",
//     },
//   ];

//   // Initialize state to keep track of which job description is expanded
//   const [expanded, setExpanded] = useState(jobs.map(() => false));

//   // Function to toggle the expanded state for a specific job
//   const toggleExpand = (index) => {
//     setExpanded((prev) =>
//       prev.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
//     );
//   };

//   return (
//     <section id="work" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="mb-16">
//           <h2 className="text-4xl text-center lg:text-6xl font-bold mb-5">
//             <span className="text-gradient text-center">Experience</span>
//           </h2>
//         </div>

//         {/* Centered work experience */}
//         <div className="flex justify-center">
//           <AnimatedSection direction="right" delay={0.2}>
//             <div className="space-y-6 max-w-lg">
//               {jobs.map((job, index) => {
//                 const isLongDescription = job.description.length > CHAR_LIMIT;
//                 const isExpanded = expanded[index];

//                 return (
//                   <motion.div
//                     key={index}
//                     className="card-glass rounded-lg p-6 hover-lift"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + index * 0.2 }}
//                     whileHover={{
//                       scale: 1.02,
//                       y: -5,
//                       boxShadow: "0 20px 40px hsl(var(--primary) / 0.2)",
//                     }}
//                   >
//                     <h4 className="font-semibold text-lg text-foreground">
//                       {job.title}
//                     </h4>
//                     <p className="text-primary mb-2">{job.company}</p>

//                     {/* Conditional rendering for description */}
//                     {isLongDescription && !isExpanded ? (
//                       <p className="text-muted-foreground">
//                         {job.description.substring(0, CHAR_LIMIT)}...
//                       </p>
//                     ) : (
//                       <ul className="list-disc list-inside text-muted-foreground space-y-2">
//                         {formatDescription(job.description).map((point, i) => (
//                           <li key={i}>{point.replace(/^[-•]/, "").trim()}</li>
//                         ))}
//                       </ul>
//                     )}

//                     {/* "Show more" / "Show less" button */}
//                     {isLongDescription && (
//                       <button
//                         onClick={() => toggleExpand(index)}
//                         className="text-primary mt-3 hover:underline text-sm font-semibold"
//                       >
//                         {isExpanded ? "Show less" : "Show more"}
//                       </button>
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </AnimatedSection>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Work;

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const Work = () => {
  // Define the character limit for truncation
  const CHAR_LIMIT = 300;

  // Function to split description into bullet points
  const formatDescription = (description) => {
    return description
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  };

  const jobs = [
    {
      title: "Co Founder",
      company: "Abizma • Dec 2024 - Present",
      description:
        "Co-founder of Abizma, a next-generation platform revolutionizing how businesses discover and connect with each other. Launched our MVP in May 2025, already empowering 45+ businesses to build meaningful partnerships faster.",
    },
    {
      title: "Software Developer",
      company: "Trident Group India • Jan 2024 - July 2024",
      description:
        "Collaborated with a team of 4 to drive key digital transformation initiatives, including high-impact projects endorsed by the CEO and MD. Successfully delivered 3+ web and mobile applications that streamlined operations for over 11,000 employees, generating an estimated cost savings of ₹25–30 lakhs annually by reducing manual HR tasks, paperwork, and operational inefficiencies.\n\n• Built a web-based product comparison platform enabling cross-company benchmarking, helping product teams align with market standards and improve competitiveness.\n\n• Developed a test management mobile app (React Native + Node.js + MongoDB) that automated employee testing and tracking processes, reducing HR workload by ~60% and saving an estimated ₹10–15 lakhs/year in administrative overhead.\n\n• Created an AI/ML-driven business card scanner app using AWS Textract, improving contact management and reducing data entry effort, which led to better CRM efficiency across teams.\n\n• Contributed to the company’s long-term paperless goal, replacing manual documentation with digital workflows using React Native, ReactJS, and Python, estimated to reduce paper and printing costs by ₹5–7 lakhs annually",
    },
    {
      title: "Open Source Contributor",
      company: "GSSoC • May 2023 - July 2023",
      description:
        " Actively contributed to open-source projects under the mentorship of experienced developers.\n Gained hands-on experience with version control (Git), issue tracking, and collaborative development workflows.\n Implemented new features, fixed bugs, and optimized code across multiple repositories.\n- Engaged with a vibrant community to improve real-world projects while enhancing knowledge in frontend/backend development.",
    },
  ];

  // Initialize state to keep track of which job description is expanded
  const [expanded, setExpanded] = useState(jobs.map(() => false));

  // Function to toggle the expanded state for a specific job
  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
    );
  };

  return (
    <section id="work" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl text-center lg:text-6xl font-bold mb-5">
            <span className="text-gradient text-center">Experience</span>
          </h2>
        </div>

        {/* Centered work experience */}
        <div className="flex justify-center">
          <AnimatedSection direction="right" delay={0.2}>
            {/* --- WIDTH INCREASED HERE --- */}
            <div className="space-y-6 max-w-3xl">
              {jobs.map((job, index) => {
                const points = formatDescription(job.description);
                const isLongDescription = job.description.length > CHAR_LIMIT;
                const isExpanded = expanded[index];

                return (
                  <motion.div
                    key={index}
                    className="card-glass rounded-lg p-6 hover-lift"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      boxShadow: "0 20px 40px hsl(var(--primary) / 0.2)",
                    }}
                  >
                    <h4 className="font-semibold text-lg text-foreground">
                      {job.title}
                    </h4>
                    <p className="text-primary mb-2">{job.company}</p>

                    {/* Conditional rendering for description */}
                    <div className="text-muted-foreground">
                      {isLongDescription && !isExpanded ? (
                        <p>{job.description.substring(0, CHAR_LIMIT)}...</p>
                      ) : // --- LOGIC FOR SINGLE/MULTIPLE POINTS ---
                      points.length === 1 ? (
                        <p>{points[0].replace(/^[-•]/, "").trim()}</p>
                      ) : (
                        <ul className="list-disc list-inside space-y-2">
                          {points.map((point, i) => (
                            <li key={i}>
                              {point.replace(/^[-•]/, "").trim()}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* "Show more" / "Show less" button */}
                    {isLongDescription && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-primary mt-3 hover:underline text-sm font-semibold"
                      >
                        {isExpanded ? "Show less" : "Show more"}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Work;