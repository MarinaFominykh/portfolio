import React from "react";
import "./Projects.scss";
import { initialProjects } from "../../data/projects";
import Project from "../Project/Project";
console.log(initialProjects)
const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__wrapper">
        <h2 className="projects__title text-mrg">
          My&nbsp;
          <span className="projects__title-span text-mrg">Projects</span>
        </h2>

        {initialProjects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
