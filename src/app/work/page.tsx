

import PageLayout from "@/components/PageLayout"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import one from "@/images/one.svg"
import two from "@/images/two.png"
import three from "@/images/three.png"
import four from "@/images/four.png"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TooltipContent } from "@radix-ui/react-tooltip"

export const metadata = {
  title: "Shaukat Khan | My Projects",
  description: "Explore the projects I've worked on, including full-stack and front-end web development, e-commerce platforms, and personal portfolios.",
  keywords: "web developer, portfolio, projects, full-stack development, front-end development, Next.js, ShadCN, CSS, Motion",
};

const Projects = [
  {
    id: "01", 
    title: "Food E-commerce Platform",
    category: "Full Stack ",
    description: "A responsive platform for ordering food and groceries online. Includes dynamic routing, API functionality, and integration with Sanity CMS.",
    stack: ["Next.js", "ShadCN", "Motion", " CMS", "CSS"],
    image: one,
    liveUrlVercel: "/",
    githubUrl: "https://github.com/shaukatdeveloper"
  },
  {
    id: "02",
    title: "Personal Portfolio Website",
    category: "Frontend ",
    description: "A sleek and animated portfolio showcasing projects, skills, and contact information with modern design principles.",
    stack: ["Next.js", "ShadCN"," Motion", "CSS"  ],
    image: two,
    liveUrlVercel: "https://www.shaukat.nextlyfly.online",
    githubUrl: "https://github.com/shaukatdeveloper"
  },
  {
    id: "03",
    title: "Clothes E-commerce Platform",
    category: "Full Stack",
    description: "An online shopping platform for clothing, featuring dynamic product pages, API connections, and Sanity CMS for content management.",
    stack: ["Next.js", "ShadCN", "Motion", " CMS", "CSS"],
    image: three,
    liveUrlVercel: "/",
    githubUrl: "https://github.com/shaukatdeveloper"
  },
  {
    id: "04",
    title: "Digital Solutions Platform",
    category: "Frontend",
    description: "A platform offering digital services, designed with a focus on responsive layouts and clean HTML5/CSS3 implementation.",
    stack: ["HTML5", "CSS3"],
    image: four,
    liveUrlVercel: "https://www.nextlyfly.online",
    githubUrl: "https://github.com/shaukatdeveloper"
  }
];




const Work = () => {

  return (
      <div className="py-6 md:py-12">
        <PageLayout>
          <Carousel opts={{align:"start", loop: true}} className="w-full">
            <CarouselContent>
             {
              Projects?.map((project)=>(
                <CarouselItem key={project.id}>
                  <Card className="bg-bodyColor border-lightSky/20">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
                        <div className="w-full md:w-1/2 order-2 md:order-1 md:mb-0 mb-0 ">
                          <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                            <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline">{project?.id}</h2>
                            <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">{project?.category} project</h3>
                            <p className="text-white/20 text-sm md:text-base leading-6 md:leading-normal">{project?.description}</p>
                            <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center ">
                              {
                                project?.stack.map((item,index)=>(
                                  <li key={index} className="text-xs md:text-base text-lightSky/20">
                                    {item}
                                    {index !== project?.stack?.length - 1 && ","}
                                    </li>
                                ))
                              }
                            </ul>
                            <Separator className="bg-gray-700" />
                            <div className="flex items-center space-x-4">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button 
                                      variant="outline" size="icon"
                                       className="bg-lightSky/5 hover:bg-hoverColor/20 border text-white/80 border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                       <Link href={project?.liveUrlVercel}
                                 
                                 >
                                 <ArrowUpRight/> 
                                 {" "}
                                 <span className="sr-only">View Live Project</span>
                                 </Link>
                                    </Button>

                                   </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="bg-white text-black font-semibold">
                                        View Live project
                                      </p>
                                    </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button 
                                      variant="outline" size="icon"
                                       className="bg-lightSky/5 hover:bg-hoverColor/20 border text-white/80 border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                       <Link href={project?.githubUrl}
                                 
                                 >
                                 <Github/> 
                                 {" "}
                                 <span className="sr-only">View Github Repositry </span>
                                 </Link>
                                    </Button>

                                   </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="bg-white text-black font-semibold">
                                        View Github Repositry 
                                      </p>
                                    </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w/12 order-1 md:order-2">
                          <div className="relative h-72 sm:h-96 bg-gray-700 rounded-lg overflow-hidden">
                            <Image src={project?.image} alt={project?.title} fill className="object-cover" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
             }
            </CarouselContent>
            <div className="absolute right-10 -bottom-8">
              <CarouselPrevious className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect"/>
              <CarouselNext className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect"/>
            </div>
          </Carousel>
        </PageLayout>
      </div>
  )
}

export default Work