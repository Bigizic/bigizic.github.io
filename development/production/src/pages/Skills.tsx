import React from "react";

const Skills: React.FC = () => {
    return (
        <section id="skills" className="skills h-100 py-20 pt-32 md:pt-25">
        {/* Skills Section */}
        <div className="pl-10 pr-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 data-aos="fade-right" className="text-sm font-medium text-white-400 uppercase tracking-wider mb-4">
                My areas of expertise
                <span className="inline-block w-32 h-px bg-white bg-white-400 ml-4 align-middle"></span>
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase">Skills</h1>
          </div>

          {/* Languages and Databases */}
          <h3 className="text-white font-semibold mb-4" data-aos="fade-right">Languages and Databases</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { img: "python-horizontal.svg", size: "w-25 h-10" },
              { img: "open-std_c-icon~alt.svg", size: "w-10 h-10" },
              { img: "dotnet-horizontal.svg", size: "w-25 h-10" },
              { img: "javascript-icon.svg", size: "w-10 h-10" },
              { img: "typescriptlang-icon.svg", size: "w-10 h-10" },
              { img: "mysql-horizontal.svg", size: "w-25 h-10" },
              { img: "postgresql-horizontal.svg", size: "w-25 h-10" },
              { img: "mongodb-ar21.svg", size: "w-28 h-10" },
              { img: "redis-ar21.svg", size: "w-25 h-10" },
              { img: "sqlite-ar21.svg", size: "w-25 h-10" },
              { img: "gnu_bash-ar21.svg", size: "w-25 h-10" },
            ].map((icon, index) => (
              <div
                key={index}
                className="mb-4 flex items-center justify-center bg-third-color rounded-lg p-2"
                data-aos="zoom-in-up"
              >
                <img src={`/svg/logos/${icon.img}`} alt={icon.img} className={icon.size} />
              </div>
            ))}
          </div>

          {/* Frameworks */}
          <h4 className="text-white font-semibold mt-12 mb-4" data-aos="fade-right">Frameworks</h4>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              { img: "palletsprojects_flask-ar21~v2.svg", size: "w-25 h-10" },
              { img: "djangoproject-ar21.svg", size: "w-25 h-10" },
              { img: "reactjs-ar21.svg", size: "w-25 h-10" },
              { img: "js_redux-ar21.svg", size: "w-25 h-10" },
              { img: "nodejs-horizontal.svg", size: "w-25 h-10" },
              { img: "getbootstrap-ar21.svg", size: "w-25 h-10" },
              { img: "pytorch-ar21.svg", size: "w-25 h-10" },
              { img: "expressjs-ar21.svg", size: "w-25 h-10" },
            ].map((icon, index) => (
              <div
                key={index}
                className="mb-4 flex items-center justify-center bg-third-color rounded-lg p-2"
                data-aos="zoom-in-up"
              >
                <img src={`/svg/logos/${icon.img}`} alt={icon.img} className={icon.size} />
              </div>
            ))}
          </div>
          
          {/* Tools */}
          <h4 className="text-white font-semibold mt-12 mb-4" data-aos="fade-right">Tools</h4>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              { img: "git-scm-ar21.svg", size: "w-25 h-10" },
              { img: "amazon_aws-ar21.svg", size: "w-25 h-10" },
              { img: "google_cloud-ar21.svg", size: "w-25 h-10" },
              { img: "vercel-ar21.svg", size: "w-25 h-10" },
              { img: "mailgun-ar21.svg", size: "w-25 h-10" },
              { img: "trello-ar21.svg", size: "w-25 h-10" },
            ].map((icon, index) => (
              <div
                key={index}
                className="mb-4 flex items-center justify-center bg-third-color rounded-lg p-2"
                data-aos="zoom-in-up"
              >
                <img src={`/svg/logos/${icon.img}`} alt={icon.img} className={icon.size} />
              </div>
            ))}
          </div>
        </div>
        </section>
    )
}

export default Skills;
