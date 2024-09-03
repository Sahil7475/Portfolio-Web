"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FaJava,
  FaFigma,
  FaGit
} from "react-icons/fa";
import {
  SiCsharp,
  SiJquery,
  SiMongoose,
  SiDotnet,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiMicrosoftsqlserver,
  SiPostman,
  SiFirebase,
  SiBootstrap,
  SiVisualstudio,
  SiVisualstudiocode,
  SiGithub
} from "react-icons/si";

//about data
const about = {
  title: "About Me",
  description:
    "I'm a passionate software developer dedicated to continuous learning and innovation. With a strong educational background and practical experience, I thrive in dynamic environments, always aiming to deliver exceptional solutions and drive technological advancement.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sahil Jadhav",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 8104081285",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "sahilj5645@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Marathi ,  Hindi",
    },
    {
      fieldName: "Hobbies",
      fieldValue: "Trekking, Driving",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "My experience includes working on real production projects for companies, where I’ve developed and managed enterprise applications with a focus on efficient data handling. I have gained expertise in adhering to industry-specific coding standards and best practices, ensuring high-quality and reliable software solutions.",
  items: [
    {
      company: "General Diagnostics International Pvt. Ltd.",
      position: "Software Developer",
      duration: "July 2024 - Present",
    },
    {
      company: "Systenics Solutions.",
      position: "Dot Net Developer Intern",
      duration: "Dec 2023 - June 2024",
    },
    {
      company: "Creto Tech Services Private Limited.",
      position: "React Frontend Developer Intern",
      duration: "Sept 2023 - Nov 2023",
    }
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I earned my Bachelor of Engineering in IT from Mumbai University, where I developed a solid foundation in computer science and software engineering. My education has equipped me with the skills and knowledge to excel in the tech industry.",
  items: [
    {
      institution: "University Of Mumbai",
      degree: "Bachelor of Engineering in IT",
      result: "9.40 CGPA",
      duration: "Dec 2020 - July 2024",
    },
    {
      institution: "MSAS Junior College.",
      degree: "12th Science PCMB.",
      result: "86.62%",
      duration: "Feb 2019 - Feb 2020",
    },
    {
      institution: "Swami Vivekananda Sankul.",
      degree: "10th Standard.",
      result: "90.40%",
      duration: "Mar 2017 - Mar 2018",
    },
  ],
};

//skills data
const skills = {
  title: "My Skills",
  description:
   "My core expertise lies in building full-stack Web applications, encompassing both front-end and back-end development. I’m adept at using modern programming languages and frameworks, and my quick learning attitude ensures I stay ahead in the ever-evolving tech landscape. I have a strong ability to adapt to technologies that are both cutting-edge and proven, recognizing the value of both modern innovations and established technologies.",
  skillList: [
    {
      icon: <SiCsharp />,
      name: "CSharp",
    },
    {
      icon: <SiDotnet />,
      name: "Dot Net",
    },
    {
      icon: <SiMicrosoftsqlserver />,
      name: "SQL Server",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiExpress />,
      name: "Express JS",
    },
    {
      icon: <SiReact />,
      name: "React JS",
    },
    {
      icon: <SiNodedotjs />,
      name: "Node Js",
    },
    {
      icon: <SiJquery />,
      name: "Jquery",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiMysql />,
      name: "My Sql",
    },
    {
      icon: <SiVisualstudio />,
      name: "Visual Studio",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <SiVisualstudiocode />,
      name: "Visual Studio Code",
    },
    {
      icon: <SiGithub />,
      name: "Github",
    }
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
         

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[8px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
                <div className="mb-8 xl:mb-16"></div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.result}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
                <div className="mb-8 xl:mb-16"></div>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul
                  className="grid grid-cols-2 sm:grid-cols-3 
                md:grid-cols-4 gap-4 xl:gap-[30px]"
                >
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px]
                             bg-[#232329] rounded-xl flex 
                             justify-center items-center group"
                            >
                              <div
                                className="text-6xl
                               group-hover:text-accent 
                               transition-all duration-300"
                              >
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
                <div className="mb-8 xl:mb-16"></div>
              </div>
            </TabsContent>

            <TabsContent
              value="aboutme"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:gap-x-6 max-w-[750px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col sm:flex-row items-start sm:items-start gap-4 break-all"
                      >
                        <span className="text-white/60 min-w-[100px] text-left">
                          {item.fieldName}
                        </span>
                        <span className="text-xl text-left">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>

          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
