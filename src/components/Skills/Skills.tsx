import "./Skills.scss";
import SingleSkill from "../SingleSkill/SingleSkill";
import ts from "../../images/icons/typescript.svg";
import js from "../../images/icons/js.svg";
import react from "../../images/icons/react_tr.svg";
import html from "../../images/icons/html.svg";
import css from "../../images/icons/css.svg";
import scss from "../../images/icons/sass.svg";
import node from "../../images/icons/node.svg";
import mongo from "../../images/icons/mongo_db.svg";
import git from "../../images/icons/git.svg";
import ex from "../../images/icons/ex.svg";
import { skillsList } from "../../data/skills";

const icons = [ts, js, react, html, css, scss, node, mongo, git, ex];
const skills = skillsList.map((item, i) => {
  return {
    id: item.id,
    title: item.title,
    icon: icons[i],
  };
});

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="seperator-skew-btm">
        <div className="seperator-skew-top">
          <svg
            x="0"
            y="0"
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              className="fill-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <div className="skills__wrapper" data-aos="fade-zoom-in">
        <h2 className="skills__title text-mrg">
          Technical&nbsp;
          <span className="skills__title-span text-mrg">Skills</span>
        </h2>
        <ul className="skills__list list">
          {skills.map((skill) => {
            return (
              <SingleSkill
                key={skill.id}
                icon={skill.icon}
                title={skill.title}
              />
            );
          })}
        </ul>
      </div>
      <div className="seperator-skew">
        <svg
          className="seperator-skew__svg"
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            className="fill-white"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
  );
};

export default Skills;
