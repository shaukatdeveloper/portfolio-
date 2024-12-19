
'use client';

import { navbarData } from "@/constants";
import { Container } from "./Container";
import { Logo } from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu} from "lucide-react";

import { useState } from "react";
import Sidebar from "./Sidebar";

export const Header = () => {
  const pathname = usePathname() || ""; 
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  return (
    <header className="border-b  border-b-hoverColor/20 bg-bodyColor text-white sticky top-0 z-50" >
      <Container className="py-5 flex items-center justify-between">
        <Logo title="Shaukat" subtitle="." />
        <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {navbarData?.map((item) => (
            <Link
            key={item?.title}
            href={item?.href} 
              className={
                `hover:text-hoverColor hoverEffect relative group overflow-x-hidden
                 ${pathname === item?.href && 'text-hoverColor' }`
            }
            >
              {item?.title}
              <span 
              className={
              ` w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect 
                ${pathname === item?.href ? "translate-x-0":"-translate-x-[105%]"} `

              }
              >
              </span>
            </Link>
          ))}
          <Link href={'/resume.pdf'} target="_blank" className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect" rel="noopener noreferrer">Hire me</Link>
        </div>
        <button aria-label="Toggle menu" onClick={() =>    setIsSidebarOpen(!isSidebarOpen)}
        className="inline-flex md:hidden relative hover:text-hoverColor hoverEffect"><Menu/></button>
      </Container>
 
          <div className="md:hidden">
             <Sidebar
              isOpen={isSidebarOpen}
              onClose={()=> setIsSidebarOpen(false)}
              />
          </div>
      
    </header>
  );
};
