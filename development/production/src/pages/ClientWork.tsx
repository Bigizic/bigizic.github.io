import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, FolderOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';
import clientWorksData from '../data/clientWork.json';

type FolderGalleryProps = {
  title: string;
  screenshots: string[];
  stackIndex: number;
};

const FolderGallery: React.FC<FolderGalleryProps> = ({ title, screenshots, stackIndex }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const preview = screenshots.slice(0, 4);

  const next = () => setActive((i) => (i + 1) % screenshots.length);
  const prev = () => setActive((i) => (i - 1 + screenshots.length) % screenshots.length);

  return (
    <>
      <div
        className="folder-stack stack-card stack-card--images mt-4"
        style={{ zIndex: stackIndex + 10 }}
      >
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setActive(0);
          }}
          className="w-full text-left"
          aria-expanded={open}
        >
          <div className="folder-tab inline-flex items-center gap-2 bg-accent text-on-accent text-xs font-display font-semibold px-4 py-2 ml-4">
            <FolderOpen size={14} />
            {title} · {screenshots.length} shots
          </div>
          <div className="relative h-52 sm:h-60 md:h-72 bg-surface border border-accent/20 rounded-2xl overflow-hidden shadow-sm">
            {preview.map((src, idx) => (
              <div
                key={src}
                className="absolute inset-3 sm:inset-4 rounded-xl overflow-hidden border border-accent/15 bg-secondary-color shadow-md"
                style={{
                  transform: `translate(${idx * 12}px, ${idx * 10}px) rotate(${idx * 1.8}deg)`,
                  zIndex: preview.length - idx,
                }}
              >
                <img
                  src={src}
                  alt={`${title} preview ${idx + 1}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            ))}
            <div className="absolute inset-0 flex items-end justify-center pb-3 pointer-events-none">
              <span className="font-body text-xs bg-surface/95 text-ink px-3 py-1 rounded-full border border-accent/15">
                Open folder
              </span>
            </div>
          </div>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 backdrop-blur-sm"
          style={{ background: 'var(--overlay)' }}
        >
          <div className="w-full max-w-3xl bg-surface rounded-3xl border border-accent/20 overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 bg-third-color border-b border-accent/15">
              <div className="flex items-center gap-2 font-display text-sm font-semibold text-ink">
                <FolderOpen size={16} className="text-accent" />
                {title}
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-ink"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="relative bg-secondary-color p-4 md:p-6">
              <div className="folder-panel is-open rounded-2xl overflow-hidden border border-accent/15 bg-surface">
                <img
                  src={screenshots[active]}
                  alt={`${title} screenshot ${active + 1}`}
                  className="w-full max-h-[60vh] object-contain bg-lynx"
                />
              </div>

              <div className="flex items-center justify-between mt-4 gap-3">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex items-center gap-1 text-sm font-body text-ink bg-third-color px-3 py-2 rounded-full"
                >
                  <ChevronLeft size={16} /> Prev
                </button>
                <p className="font-body text-sm text-muted">
                  {active + 1} / {screenshots.length}
                </p>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-1 text-sm font-body text-ink bg-third-color px-3 py-2 rounded-full"
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>

              <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                {screenshots.map((src, idx) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 ${
                      idx === active ? 'border-accent' : 'border-transparent'
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ClientWork: React.FC = () => {
  return (
    <section id="client-work" className="client-work py-12 md:py-16">
      <div className="mx-auto px-default max-w-6xl">
        <div className="mb-8 md:mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">
            Client Work
          </h2>
          <p className="font-body text-muted max-w-2xl text-[15px]">
            Selected client platforms delivered end-to-end, commerce, booking, and event systems
            with real transactions and operational workflows.
          </p>
        </div>

        <div>
          {clientWorksData.map((work, index) => (
            <article key={work.id} className="relative pb-16 md:pb-24">
              <div className="bg-surface border border-accent/15 rounded-3xl p-6 md:p-8 shadow-sm mb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-ink mb-1">
                      {work.title}
                    </h3>
                    <p className="font-body text-sm font-semibold text-accent mb-2">{work.role}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted font-body">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} className="text-accent" />
                        {work.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} className="text-accent" />
                        {work.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start bg-accent text-on-accent text-sm font-display font-semibold px-4 py-2 rounded-full"
                  >
                    Visit project
                    <ExternalLink size={14} />
                  </a>
                </div>

                {work.overview && (
                  <p className="font-body text-sm text-muted leading-relaxed">{work.overview}</p>
                )}
              </div>

              <FolderGallery
                title={work.title}
                screenshots={work.screenshots}
                stackIndex={index}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWork;
