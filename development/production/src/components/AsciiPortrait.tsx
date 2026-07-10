import React, { useCallback, useState } from 'react';

type Props = {
  className?: string;
};

const AsciiPortrait: React.FC<Props> = ({ className = '' }) => {
  const [revealed, setRevealed] = useState(false);

  const reveal = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setRevealed(true);
  }, []);

  const conceal = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    setRevealed(false);
  }, []);

  return (
    <div
      className={`ascii-portrait relative overflow-hidden rounded-2xl border border-accent/20 bg-surface touch-none cursor-pointer select-none ${className}`}
      role="img"
      aria-label="Isaac Olalekan Ajibola — hold to reveal photo"
      title="Hold to reveal photo"
      onPointerDown={reveal}
      onPointerUp={conceal}
      onPointerLeave={conceal}
      onPointerCancel={conceal}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src="/isaac-portrait.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover object-top pointer-events-none"
      />
      <img
        src="/ascii.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className={`absolute object-fill inset-0 z-10 h-full w-full object-cover object-top pointer-events-none transition-opacity duration-150 ${
          revealed ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};

export default AsciiPortrait;
