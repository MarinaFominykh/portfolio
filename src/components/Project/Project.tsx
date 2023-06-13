import React from "react";
import "./Project.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProjectModel } from "../../models/ProjectModel";
import SingleTech from "../SingleTech/SingleTech";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

interface ProjectProps {
  project: ProjectModel;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  // AOS.init({ duration: 1000 });
  return (
    <article 
    // data-aos="fade-up" 
    className="project">
      <div className="project__img-wrapper">
        <img
          className="project__img"
          src={`../../images/${project.src}`}
          alt={project.title}
        />
      </div>
      <div className="project__text-clmn">
        <h3 className="project__title text-mrg">{project.title}</h3>
        <ul className="project__techs list">
          <p className="project__list-span text-mrg">Made with: </p>
          {project.techs.map((item) => {
            return <SingleTech key={item.id} tech={item} />;
          })}
        </ul>
        <p className="project__description text-mrg">{project.description}</p>
        <div className="project__btn-cntr">
          <a href={project.url} className="project__link blue-button link">
            <BsBoxArrowUpRight size="20px" />
            <p className="header__link-txt text-mrg">Live</p>
          </a>
          <a
            href={project.githubUrl}
            className="project__link transparent-button link"
          >
            <AiFillGithub size="20px" />
            <p className="header__link-txt text-mrg">Code</p>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
