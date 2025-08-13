import { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  pauseTime?: number;
}

export default function TypingEffect({
  texts,
  typingSpeed = 100,
  pauseTime = 1500,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < texts[textIndex].length) {
      // Typing forward
      typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } 
    else if (isDeleting && charIndex > 0) {
      // Deleting
      typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed / 2);
    } 
    else if (!isDeleting && charIndex === texts[textIndex].length) {
      // Pause before deleting
      typingTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } 
    else if (isDeleting && charIndex === 0) {
      // Move to next word
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, pauseTime]);

  return <span>{displayText}</span>;
}
