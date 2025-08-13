import React, { useState, useEffect, useRef } from "react";

interface ScrollIndicatorProps {
  currentSection: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ currentSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: window.innerWidth - 100, // default right side
    y: window.innerHeight * 0.5,
  });
  const [dismissed, setDismissed] = useState(false);

  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const savedPos = localStorage.getItem("scrollIndicatorPos");
    if (savedPos) {
      setPosition(JSON.parse(savedPos));
    }

    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsVisible(true);

        // If dismissed, bring back & snap to nearest edge
        if (dismissed) {
          setDismissed(false);
          setPosition((pos) => {
            const snapX =
              pos.x < window.innerWidth / 2 ? 0 : window.innerWidth - 60;
            const newPos = { x: snapX, y: pos.y };
            localStorage.setItem("scrollIndicatorPos", JSON.stringify(newPos));
            return newPos;
          });
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dismissed]);

  const handleDragStart = (clientX: number, clientY: number) => {
    isDragging.current = true;
    dragOffset.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!isDragging.current) return;
    setPosition({
      x: clientX - dragOffset.current.x,
      y: Math.max(20, Math.min(clientY - dragOffset.current.y, window.innerHeight - 120)),
    });
  };

  const handleDragEnd = () => {
    isDragging.current = false;

    // If swiped almost completely off screen → hide until scroll
    if (position.x < -40 || position.x > window.innerWidth - 40) {
      setDismissed(true);
      return;
    }

    // Snap to left or right edge with no gap
    setPosition((pos) => {
      const snapX = pos.x < window.innerWidth / 2 ? 0 : window.innerWidth - 60;
      const newPos = { x: snapX, y: pos.y };
      localStorage.setItem("scrollIndicatorPos", JSON.stringify(newPos));
      return newPos;
    });
  };

  if (!isVisible || dismissed) return null;

  const navItems = [
    { name: 'Home', path: '#' },
    { name: 'Education', path: '#education' },
    { name: 'Skills', path: '#skills' },
    { name: 'Services', path: '#services' },
    { name: 'Work Experience', path: '#work' },
    { name: 'Client Work', path: '#client-work' },
    { name: 'Contact', path: '#contact' },
  ];

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id.startsWith("#") ? id : `#${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 50,
        cursor: "grab",
        touchAction: "none",
        transition: isDragging.current ? "none" : "transform 0.2s ease, opacity 0.2s ease",
      }}
      className={`flex flex-col gap-2 items-center bg-white/10 backdrop-blur-md rounded-3xl p-10 pl-5 pr-5 opacity-70 hover:opacity-100 hover:bg-white/15`}
      onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
      onMouseMove={(e) => handleDragMove(e.clientX, e.clientY)}
      onMouseUp={handleDragEnd}
      onMouseLeave={() => {
        if (isDragging.current) handleDragEnd();
      }}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={handleDragEnd}
    >
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => handleScrollToSection(item.name.toLowerCase().replace(/\s+/g, "-"))}
          className={`flex flex-col items-center p-2 rounded-xl transition-all duration-300 mb-1 
            ${
              currentSection === item.name
                ? "bg-accent text-white scale-110"
                : "text-white hover:bg-accent/20 hover:scale-105"
            }
          `}
        >
          <span className="text-xs uppercase tracking-wider writing-mode-vertical">
            <a href={item.path} >{item.name}</a>
          </span>
        </button>
      ))}
    </div>
  );
};

export default ScrollIndicator;
