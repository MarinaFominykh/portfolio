import React from "react";
import "./Project.scss";
import {ProjectModel} from "../../models/ProjectModel";
import SingleTech from "../SingleTech/SingleTech";

interface ProjectProps {
  project: ProjectModel;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <article className="project">
      <div className="project__img-wrapper">
        <img src={`../../images/${project.src}`} alt={project.title} />
      </div>
      <div className="project__text-clmn">
        <h3 className="project__title text-mrg">{project.title}</h3>
        <ul className="project__techs list">
          {project.techs.map((item) => {
            return <SingleTech key={item.id} tech={item}/>;
          })}
        </ul>
        <p className="project__description">{project.description}</p>
        <div className="project__btn-cntr">
            <a className="project__link link">Demo</a>
            <a className="project__link link">Code</a>
        </div>
      </div>
    </article>
  );
};

export default Project;
