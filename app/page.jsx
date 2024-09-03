"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import {
  SiCsharp,
  SiDotnet,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiBootstrap,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sahil_J_Resume.pdf";
    link.download = "Sahil_J_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
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
        icon: <SiBootstrap />,
        name: "Bootstrap",
      }
    ],
  };


  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* Image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
          
          
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m
              <br /> <span className="text-accent">Sahil Jadhav</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
             A dedicated software developer skilled in both frontend and backend technologies, with a solid foundation in ASP.NET and the MERN stack. 
            </p>

            {/* Buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          
        </div>
        <div className="flex flex-col gap-[30px]">
                
        <ul className="grid grid-cols-4 gap-2 xl:grid-cols-8 xl:gap-[20px] justify-center">
  {skills.skillList.map((skill, index) => {
    return (
      <li key={index} className="flex justify-center items-center">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger
              className="h-[60px] bg-[#232329] rounded-xl flex justify-center items-center group"
            >
              <div
                className="text-6xl group-hover:text-accent transition-all duration-300"
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
      </div>

      <Stats />


      

      
    </section>
  );
};

export default Home;
