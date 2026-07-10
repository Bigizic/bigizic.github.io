import React from 'react';

const Skills: React.FC = () => {
  const groups = [
    {
      title: 'Languages & Databases',
      description: 'Core languages and data stores used across production systems.',
      items: [
        { img: 'python-horizontal.svg', size: 'w-24 h-9' },
        { img: 'open-std_c-icon~alt.svg', size: 'w-9 h-9' },
        { img: 'dotnet-horizontal.svg', size: 'w-24 h-9' },
        { img: 'javascript-icon.svg', size: 'w-9 h-9' },
        { img: 'typescriptlang-icon.svg', size: 'w-9 h-9' },
        { img: 'mysql-horizontal.svg', size: 'w-24 h-9' },
        { img: 'postgresql-horizontal.svg', size: 'w-24 h-9' },
        { img: 'mongodb-ar21.svg', size: 'w-28 h-9' },
        { img: 'redis-ar21.svg', size: 'w-24 h-9' },
        { img: 'sqlite-ar21.svg', size: 'w-24 h-9' },
        { img: 'gnu_bash-ar21.svg', size: 'w-24 h-9' },
      ],
    },
    {
      title: 'Frameworks',
      description: 'Frontend and backend frameworks for APIs and product interfaces.',
      items: [
        { img: 'palletsprojects_flask-ar21~v2.svg', size: 'w-24 h-9' },
        { img: 'djangoproject-ar21.svg', size: 'w-24 h-9' },
        { img: 'reactjs-ar21.svg', size: 'w-24 h-9' },
        { img: 'js_redux-ar21.svg', size: 'w-24 h-9' },
        { img: 'nodejs-horizontal.svg', size: 'w-24 h-9' },
        { img: 'getbootstrap-ar21.svg', size: 'w-24 h-9' },
        { img: 'pytorch-ar21.svg', size: 'w-24 h-9' },
        { img: 'expressjs-ar21.svg', size: 'w-24 h-9' },
      ],
    },
    {
      title: 'Tools & Platforms',
      description: 'Cloud, deploy, and collaboration tools used in delivery.',
      items: [
        { img: 'git-scm-ar21.svg', size: 'w-24 h-9' },
        { img: 'amazon_aws-ar21.svg', size: 'w-24 h-9' },
        { img: 'google_cloud-ar21.svg', size: 'w-24 h-9' },
        { img: 'vercel-ar21.svg', size: 'w-24 h-9' },
        { img: 'mailgun-ar21.svg', size: 'w-24 h-9' },
        { img: 'trello-ar21.svg', size: 'w-24 h-9' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills py-12 md:py-16">
      <div className="mx-auto px-default max-w-6xl">
        <div className="mb-8 md:mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">Skills</h2>
          <p className="font-body text-muted max-w-2xl text-[15px]">
            Full-stack toolkit spanning backend APIs, modern frontends, databases, payments, and
            cloud delivery.
          </p>
        </div>

        <div className="space-y-6">
          {groups.map((group, gIdx) => (
            <div
              key={group.title}
              className="stack-card bg-surface border border-accent/15 rounded-3xl p-6 md:p-8 shadow-sm"
              style={{ zIndex: gIdx + 1 }}
            >
              <h3 className="font-display text-xl font-bold text-ink mb-1">{group.title}</h3>
              <p className="font-body text-sm text-muted mb-5">{group.description}</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
                {group.items.map((icon) => (
                  <div
                    key={icon.img}
                    className="flex items-center justify-center bg-secondary-color rounded-2xl p-3 border border-accent/10 min-h-[64px]"
                  >
                    <img
                      src={`/svg/logos/${icon.img}`}
                      alt={icon.img.replace(/\.(svg|png)$/, '')}
                      className={`${icon.size} object-contain`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
