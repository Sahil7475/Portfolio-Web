"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Momento",
    description:
      "A social media application where users can interact, upload photos and memories, and chat with their friends. Integrated real-time messaging with WebSockets to ensure smooth and immediate exchanges between users.",
    stack: [
      { name: "React JS" },
      { name: "Express Js" },
      { name: "Node Js" },
      { name: "Mongo DB" },
    ],
    image: "/assets/work/Momento.png",
    live: "https://momento-eosin.vercel.app/",
    github: "https://github.com/Sahil7475/Momento-Social_Media_Application",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Admin Dashboard",
    description:
      "Developed a comprehensive admin dashboard designed for efficient management of customer data, admin profiles, products, transactions, and sales metrics. Included features for tracking daily and monthly sales performance. Additionally, created an interactive geolocation tool to visualize user distribution effectively.",
    stack: [
      { name: "React JS" },
      { name: "Express Js" },
      { name: "Node Js" },
      { name: "Mongo DB" },
    ],
    image: "/assets/work/Admin_Dashoboard.png",
    live: "https://admin-dashboard-d7fp.vercel.app/",
    github: "https://github.com/Sahil7475/Admin-Dashboard",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Customization In AuctionWorx",
    description:
      "Implemented functionality allowing sellers to create and manage their own discount coupons, which buyers can apply at checkout and remove before finalizing payment. Developed an admin interface to oversee and manage coupons across various sellers, ensuring centralized control. Integrated custom business logic (BLL) and data access logic (DLL) to ensure seamless compatibility with existing project components.",
    stack: [
      { name: "ASP .Net MVC" },
      { name: "Jquery" },
      { name: "SQL Server" },
      { name: "Linq" },
      { name:"Dapper"}
    ],
    image: "/assets/work/AuctionWorx.png",

  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-0">
      <div className="container mx-auto">
        <div
          className="xl:gap-[30px]"
        >
              <div className="w-full">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[360px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[360px] relative group flex justify-center items-center rounded-4xl bg-pink/20 ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full rounded-xl bg-black/10 z10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt="proj-img"
                          layout="fill"
                          objectFit="contain"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 
              bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 
              w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary 
              text-[22px] w-[44px] h-[44px] rounded-xl flex justify-center 
              items-center transition-all"
              />
            </Swiper>
          </div>

          <div
            className="w-full py-[20px] xl:w-[100%] xl:h-[460px] 
          flex flex-col xl:gap-[30px] order-2 xl:order-none"
          >
            <div className="flex gap-[30px]">
              <div
                className="text-7xl xl:text-8xl leading-none font-extrabold
               text-transparent text-outline"
              >
                {project.num}
              </div>
              <h2
                className="text-[45px] py-[20px] xl:text-[46px] font-bold leading-none
               text-white group-hover:text-accent 
               transition-all duration-500 capitalize"
              >
                {project.title}
              </h2>
              <div className="flex items-center gap-4 ml-[auto]">

  {project.live && (
  <Link href={project.live}>
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Live Project</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Link>
)}

{project.github && (
  <Link href={project.github}>
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
          <BsGithub className="text-white text-3xl group-hover:text-accent" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Github Repository</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Link>
)}
  
</div>
              
              
              
            </div>
            <div className="flex flex-col gap-[10px]">
              <h3
                className="text-[28px] xl:text-[28px] font-bold leading-none
               text-white group-hover:text-accent 
               transition-all duration-500 capitalize"
              >
                {project.category} project
              </h3>
              <p className="text-white/60">{project.description}</p>
              <div className="border border-white/20"></div>
<ul className="flex flex-wrap gap-4">
  {project.stack.map((item, index) => {
    return (
      <li key={index} className="text-xl text-accent">
        {item.name}
        {index !== project.stack.length - 1 && ","}
      </li>
    );
  })}

  
</ul>



              </div>

          </div>

      
        </div>
        <div className="mb-8 xl:mb-16"></div>
      </div>
    </motion.section>
  );
};

export default Project;
