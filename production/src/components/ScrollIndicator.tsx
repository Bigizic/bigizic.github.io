import React, { useState, useEffect, useRef } from "react";
import { RiMenuFill } from "react-icons/ri";

interface ScrollIndicatorProps {
  currentSection: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ currentSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<{ x: number; xx: number; y: number }>({
    x: window.innerWidth - 60, // menu icon
    xx: window.innerWidth - 200, // menu items container
    y: window.innerHeight * 0.5,
  });
  const [dismissed, setDismissed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const navItems = [
    { name: 'Home', path: '#' },
    { name: 'Education', path: '#education' },
    { name: 'Skills', path: '#skills' },
    { name: 'Services', path: '#services' },
    { name: 'Work Experience', path: '#work' },
    { name: 'Client Work', path: '#client-work' },
    { name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const savedPos = localStorage.getItem("scrollIndicatorPos");
    if (savedPos) setPosition(JSON.parse(savedPos));

    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsVisible(true);
        if (dismissed) {
          setDismissed(false);
          setPosition((pos) => ({
            x: pos.x < window.innerWidth / 2 ? 0 : window.innerWidth - 60,
            xx: pos.xx < window.innerWidth / 2 ? 0 : window.innerWidth - 200,
            y: pos.y
          }));
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const handleDragStart = (clientX: number, clientY: number) => {
    isDragging.current = true;
    dragOffset.current = {
      x: clientX - (menuOpen ? position.xx : position.x),
      y: clientY - position.y,
    };
  };

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!isDragging.current) return;
    let newX = clientX - dragOffset.current.x;
    newX = Math.max(0, Math.min(newX, menuOpen ? window.innerWidth - 200 : window.innerWidth - 60));
    setPosition({
      x: menuOpen ? position.x : newX,
      xx: menuOpen ? newX : position.xx,
      y: Math.max(20, Math.min(clientY - dragOffset.current.y, window.innerHeight - 120)),
    });
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    setPosition((pos) => ({
      x: menuOpen
        ? pos.x
        : pos.x < window.innerWidth / 2
        ? 0
      : window.innerWidth - 60,
      xx: menuOpen
        ? pos.xx < window.innerWidth / 2
        ? 0
        : window.innerWidth - 200
      : pos.xx,
      y: pos.y,
    }));
  };

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id.startsWith("#") ? id : `#${id}`);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  if (!isVisible || dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: menuOpen ? `${position.xx}px` : `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 50,
        cursor: "grab",
        touchAction: "none",
        transition: isDragging.current ? "none" : "transform 0.2s ease, opacity 0.2s ease",
      }}
      onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
      onMouseMove={(e) => handleDragMove(e.clientX, e.clientY)}
      onMouseUp={handleDragEnd}
      onMouseLeave={() => isDragging.current && handleDragEnd()}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={handleDragEnd}
    >
      {!menuOpen ? (
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white text-xl font-bold hover:scale-110 transition-all"
        >
          <RiMenuFill size={20}/>
        </button>
      ) : (
        <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-3xl p-4 opacity-90 w-48">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-white text-lg font-bold mb-2 hover:text-accent"
          >
            ✕
          </button>
          {navItems.map((item) => (
            <button
              data-aos={position.xx <= 0 ? "fade-right" : "fade-left"}
              key={item.name}
              onClick={() => handleScrollToSection(item.path)}
              className={`text-white uppercase text-xs mb-1 px-4 py-2 rounded hover:bg-accent/20 transition-all ${
                currentSection === item.name ? "bg-accent text-white scale-105" : ""
              }`}
            >
              <span>
                <a href={item.path} >{item.name}</a>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScrollIndicator;
