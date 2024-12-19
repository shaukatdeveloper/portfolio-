import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

const socialData = [
    {
        title: "Youtube",
        icon: <Youtube />,
        href: "https://www.youtube.com/@shaukatdeveloper"
    },
    {
        title: "Github",
        icon: <Github />,
        href: "https://github.com/shaukatdeveloper"
    },
    {
        title: "LinkedIn", // Fixed typo here
        icon: <Linkedin />,
        href: "https://www.linkedin.com/in/shaukatdeveloper/"
    },
    {
        title: "Facebook",
        icon: <Facebook />,
        href: "https://web.facebook.com/shaukatdeveloper/"
    },
    {
        title: "Instagram",
        icon: <Instagram />,
        href: "https://www.instagram.com/shaukatdeveloper/"
    }
]

const SocialLinks = () => {
    return (
        <TooltipProvider>
            <div className="flex items-center gap-3">
                {socialData?.map((item) => (
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                                <Link href={item?.href}
                                 target="_blank" 
                                 rel="noopener noreferrer" 
                                 aria-label={item?.title}
                                 
                                 >
                            <div className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect">
                                    <span>
                                        {item?.icon}
                                    </span>
                            </div>
                                </Link>
                        </TooltipTrigger>
                        <TooltipContent className="bg-hoverColor text-black font-semibold">
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    )
}

export default SocialLinks
