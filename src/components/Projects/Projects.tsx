import React from "react";
import "./Projects.scss";
import { initialProjects } from "../../data/projects";
import Project from "../Project/Project";

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2 className="projects__title text-mrg">
        My&nbsp;
        <span className="projects__title-span text-mrg">Projects</span>
      </h2>
      {initialProjects.map((project) => {
       return <Project key={project.id} project={project} />;
      })}
    </section>
  );
};

export default Projects;
