import { cn } from "@/lib/utils"
import Link from "next/link"


interface Props{
    title: string  
    className?:string
    subtitle:string
}

export const Logo = ({className,title,subtitle}:Props) => {
  return (
   <div className="text-2xl group ">
        <Link href={"/"} >
         <h2 className={cn("hoverEffect font-semibold tracking-wide  hover:text-hoverColor ",className)}>
            {title}
          <span className="text-lightSky group-hover:text-white hoverEffect">{subtitle}</span>
         </h2>
       </Link>
   </div>
  )
}

