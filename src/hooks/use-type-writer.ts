import { useEffect, useState } from "react";

export function useTypeWriter(
  text: string, 
  speed: number = 50
): { displayedText: string; isComplete: boolean } { 
  const [displayedText, setDisplayedText] = useState<string>(""); 
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        setIsComplete(true);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isComplete }; 
}
