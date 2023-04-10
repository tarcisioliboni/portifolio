import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiMongodb,
  DiSass,
  DiLinux,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "mongo", name: "MongoDB", icon: <DiMongodb /> },
  { id: "linux", name: "Linux", icon: <DiLinux /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
