import React, { useState, useEffect, useRef } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHorizontalDragging = useRef(false);
  const horizDragStart = useRef(0);
  const horizScrollStart = useRef(0);

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
    if (!menuOpen) {
      isDragging.current = true;
      dragOffset.current = { x: clientX - position.x, y: clientY - position.y };
    }
  };

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!menuOpen && isDragging.current) {
      let newX = clientX - dragOffset.current.x;
      newX = Math.max(0, Math.min(newX, window.innerWidth - 60));
      setPosition({
        x: newX,
        xx: position.xx,
        y: Math.max(20, Math.min(clientY - dragOffset.current.y, window.innerHeight - 120)),
      });
    }
  };

  const handleDragEnd = () => {
    if (!menuOpen) {
      isDragging.current = false;
      setPosition((pos) => ({
        x: pos.x < window.innerWidth / 2 ? 0 : window.innerWidth - 60,
        xx: pos.xx,
        y: pos.y
      }));
    }
  };

  const handleHorizontalDragStart = (clientX: number) => {
    if (scrollRef.current) {
      isHorizontalDragging.current = true;
      horizDragStart.current = clientX;
      horizScrollStart.current = scrollRef.current.scrollLeft;
    }
  };

  const handleHorizontalDragMove = (clientX: number) => {
    if (isHorizontalDragging.current && scrollRef.current) {
      const delta = horizDragStart.current - clientX;
      scrollRef.current.scrollLeft = horizScrollStart.current + delta;
    }
  };

  const handleHorizontalDragEnd = () => {
    isHorizontalDragging.current = false;
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
        cursor: !menuOpen ? "grab" : "default",
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
          className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white text-xl font-bold hover:scale-110 transition-transform"
        >
          ☰
        </button>
      ) : (
        <div
          className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-3xl p-4 opacity-90 w-48"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-white text-lg font-bold mb-2 hover:text-accent"
          >
            ✕
          </button>
          <div
            className="flex overflow-x-auto w-full space-x-2"
            ref={scrollRef}
            onMouseDown={(e) => handleHorizontalDragStart(e.clientX)}
            onMouseMove={(e) => handleHorizontalDragMove(e.clientX)}
            onMouseUp={handleHorizontalDragEnd}
            onMouseLeave={handleHorizontalDragEnd}
            onTouchStart={(e) => handleHorizontalDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleHorizontalDragMove(e.touches[0].clientX)}
            onTouchEnd={handleHorizontalDragEnd}
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollToSection(item.path)}
                className={`text-white uppercase text-xs mb-1 px-4 py-2 rounded hover:bg-accent/20 flex-shrink-0 ${
                  currentSection === item.name ? "bg-accent scale-105" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollIndicator;
