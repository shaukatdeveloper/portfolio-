"use client"
import PageLayout from "@/components/PageLayout"
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Calendar, Code2, GraduationCap, User } from "lucide-react"
import { motion } from "motion/react";




const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase},
  { title: "Education", value: "education", icon: GraduationCap},
  { title: "Skills", value: "skills", icon: Code2},
  { title: "About me", value: "about", icon: User},

] ;



const tabContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Full-Stack Developer (Serverless & Frontend Specialist)",
        company: "NextlyFly Tech Solution",
        period: "2021 - Present",
        description: "Led the development of multiple React-based or Next.js-based web applications, focusing on serverless architecture with Vercel. Improved performance by 40%. Mentored junior developers and implemented best practices for code quality.",
        highlight: ["React", "Next.js", "TypeScript", "TailwindCSS", "Serverless", "Vercel", "Team Leadership"]
      },
      {
        role: "Freelance Full-Stack Developer",
        company: "Upwork & Fiverr",
        period: "2021 - Present",
        description: "Collaborated with international clients to design and develop responsive, high-performance web applications using React.js, Next.js, and modern serverless technologies like Vercel.",
        highlight: ["React", "Next.js", "TypeScript", "TailwindCSS", "Serverless", "Vercel", "Client Collaboration"]
      },
      {
        role: "Freelance Web Designer",
        company: "Upwork & Fiverr",
        period: "2021 - Present",
        description: "Designed modern, responsive, and user-friendly website interfaces for clients, focusing on clean design principles and UX/UI best practices.",
        highlight: ["Figma", "Responsive Design", "UX/UI Design"]
      }
    ]
  },
  education: {
    title: "Education Background",
    items: [
      {
        degree: "Web3.0 Metaverse and Artificial Intelligence",
        institution: "GIAIC ",
        period: "2024 - Present",
        description:
          "Focused on cutting-edge technologies including Web3.0, Metaverse development, and Artificial Intelligence.",
        achievements: [
          "99 Percentile",
          "Research on Public Demands",
          "Solution-Oriented Problem Solving",
          "Handling Complex Problems",
        ],
        
      },
      {
        degree: "Intermediate in Computer Science",
        institution: "Lyari Degree Science and Commerce College",
        period: "2015 - 2017",
        description:
          "Completed studies with a focus on fundamental computer science concepts and programming basics.",
        achievements: [
          "Introduced to Computer Basics",
          "Learned MS Office Tools: Word, Excel, PowerPoint",
          "Gained hands-on experience in computer operations",
        ],
        
      },
      {
        degree: "Matriculation",
        institution: "AL-Rahim School",
        period: "2013 - 2015",
        description:
          "Introduced to formal education with a focus on basic subjects, laying the foundation for future academic growth.",
        achievements: [
          "First generation in my family to complete Matriculation",
          "Achieved 74% score",
          "Overcame challenges as my father and grandfather had no formal education",
        ],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "Skilled in developing modern, responsive, and interactive web applications using leading frontend technologies.",
        skills: [
          "React.js",
          "Next.js",
          "TypeScript",
          "JavaScript (ES6+)",
          "HTML5",
          "CSS3",
          "TailwindCSS",
          "Responsive Design",
          "Framer Motion",
          "Shadcn",
          "Routing",
          "Dynamic Routing",
          "Two Layout System",
          "Authentication",
          "Image Optimization",
        ],
      },
      {
        name: "Design Tools",
        description:
          "Proficient in designing user interfaces and experiences, ensuring a smooth and visually appealing user journey.",
        skills: [
          "Figma",
          "UI/UX Design",
        ],
      },
      {
        name: "Microsoft Office",
        description:
          "Skilled in using Microsoft Office applications for a wide range of professional tasks including document processing, data analysis, and presentations.",
        skills: [
          "Microsoft Word",
          "Microsoft Excel",
          "Microsoft PowerPoint",
        ],
      },
      {
        name: "Version Control",
        description:
          "Experienced in using version control systems to track changes in code and collaborate with other developers.",
        skills: [
          "Git",
          "GitHub",
        ],
      },
      {
        name: "Web Development Tools",
        description:
          "Experienced in using a range of tools to optimize and automate the web development process.",
        skills: [
          "API Integration",
          "Team Collaboration Tools",
          "CMS (Sanity)",
          "Vercel Development",
          "Domain Management",
          "Hosting",
        ],
      },
      {
        name: "Leadership & Mentorship",
        description:
          "Strong leadership skills in mentoring junior developers and guiding teams to achieve project goals.",
        skills: [
          "Team Leadership",
          "Mentorship",
        ],
      },
    ],
  },
  about: {
    title: "About Me",
    bio:
      " passionate Software Developer with over 1 years of experience building scalable and high-performance web applications using modern frameworks like Next.js and React. I enjoy solving problems, mentoring others, and learning new technologies to enhance my skill set.",
      interests: [
        "Web Development",
        "UI/UX Design",
        "Open Source Contributions",
        "Learning New Technologies",
      ],
      languages: [
        "Urdu",
        "Hindi",
        "Pashto",
        "English ",
        "Arabic (Intermediate)",
        "Spanish (Basic)",
        "German (Basic)"
      ],
      
  },
};

const Resume = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
          <Tabs defaultValue="experience" className="w-full flex flex-col md:flex-row gap-6 md:gap-10">
            <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
              {tabMenu?.map((item)=>(
                <TabsTrigger key={item?.value} value={item?.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-1.5 md:[50%] md:gap-3">
                     <item.icon className="w-4 h-4 md:h-5 md:w-5 "/>
                    {item?.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 min-h-[400px]">
              <TabsContent value="experience">
                <motion.h2 
                initial={{opacity:0}}
                animate={{ opacity:1}}
                className="text-2xl font-bold mb-6 text-lightSky" >
                  {tabContent.experience.title}
                </motion.h2>
                <div className="space-y-6">
                  {
                    tabContent?.experience?.items.map((item,index)=>(
                      <motion.div 
                      initial={{opacity:0, y: 20}}
                      animate={{opacity:1, y:0}}
                      transition={{delay: index * 0.1}}
                      key={index}
                      className="border rounded-lg border-lightSky/20 p-6"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div >
                            <h3 className="text-lg font-semibold text-white">{item?.role}</h3>
                            <p className="text-muted-foreground">{item?.company}</p>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2"/>
                            {item?.period}
                          </div>
                        </div>
                        <p className="mb-4 text-white">{item?.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item?.highlight.map((highlight, i)=>(
                            <Badge key={i} variant="secondary">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))
                  }
                </div>
              </TabsContent>
              <TabsContent value="education">

  <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold mb-6 text-lightSky">
    {tabContent.education.title}
  </motion.h2>
  <div className="space-y-6">
    {tabContent?.education?.items.map((item, index) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        key={index}
        className="border rounded-lg border-lightSky/20 p-6"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{item?.degree}</h3>
            <p className="text-muted-foreground">{item?.institution}</p>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {item?.period}
          </div>
        </div>
        <p className="mb-4 text-white">{item?.description}</p>
        <div className="flex flex-wrap gap-2">
          {item?.achievements.map((achievement, i) => (
            <Badge key={i} variant="secondary">
              {achievement}
            </Badge>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
             </TabsContent>
             <TabsContent value="skills">
                <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold mb-6 text-lightSky">
                   {tabContent.skills.title}
                </motion.h2>
                <div className="space-y-6">
                   {tabContent?.skills?.categories.map((category, index) => (
                     <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: index * 0.1 }}
                       key={index}
                       className="border rounded-lg border-lightSky/20 p-6"
                     >
                         <h3 className="text-lg font-semibold text-white mb-2">{category?.name}</h3> 
                         <p className="text-muted-foreground mb-4">{category?.description}</p> 
                         <div className="flex flex-wrap gap-2 mt-4"> 
                           {category?.skills.map((skill, i) => (
                             <Badge key={i} variant="secondary">
                               {skill}
                             </Badge>
                           ))}
                         </div>
                       </motion.div>
                     ))}
                   </div>
             </TabsContent>
                 
            <TabsContent value="about">
                <motion.h2 
                initial={{opacity:0}}
                animate={{ opacity:1}}
                className="text-2xl font-bold mb-6 text-lightSky" >
                  {tabContent.about.title}
                </motion.h2>
                <div className="space-y-6">
                  {
                    tabContent &&
                      <motion.div 
                      initial={{opacity:0, y: 20}}
                      animate={{opacity:1, y:0}}
                      transition={{delay: 1 * 0.1}}
                      key={1}
                      className="border rounded-lg border-lightSky/20 p-6"
                      >

                   <p className="text-white/90 mb-6 text-lg">{tabContent.about.bio}</p>
                   <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Interests
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.interests.map((interests, i)=>(
                          <Badge key={i} variant="secondary">
                            {interests}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                         Languages
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((Languages, i)=>(
                          <Badge key={i} variant="secondary">
                            {Languages}
                          </Badge>
                        ))}
                      </div>
                    </div>
                   </div>
                      </motion.div>
                  
                  }
                </div>
              </TabsContent>






            </div>
          </Tabs>
      </PageLayout>
    </div>

  )
}
export default Resume