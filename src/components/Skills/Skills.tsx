import "./Skills.scss";
import ts from "../../images/icons/typescript.svg";
import js from "../../images/icons/js.svg";
import react from "../../images/icons/react_tr.svg";
import html from "../../images/icons/html.svg";
import css from "../../images/icons/css.svg";
import scss from "../../images/icons/sass.svg";
import node from "../../images/icons/node.svg";
import mongo from "../../images/icons/mongo_db.svg";
import git from "../../images/icons/git.svg";
import { SiExpress } from "react-icons/si";

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
          <li className="skills__item-wrapper">
            <figure className="skills__item">
              <div className="skills__img-wrapper">
                <img src={ts} alt="typescript" className="skills__img" />
                {/* <SiTypescript size="90px" color="#007acc"/> */}
              </div>
              <figcaption className="skills__description">
                TypeScript
              </figcaption>
            </figure>
          </li>
          <li className="skills__item-wrapper">
            <figure className="skills__item">
              <div className="skills__img-wrapper">
                <img src={js} alt="typescript" className="skills__img" />
              </div>
              <figcaption className="skills__description">
                JavaScript
              </figcaption>
            </figure>
          </li>
          <li className="skills__item-wrapper">
            <figure className="skills__item">
              <div className="skills__img-wrapper">
                <img src={react} alt="typescript" className="skills__img" />
              </div>
              <figcaption className="skills__description">React</figcaption>
            </figure>
          </li>
          <li className="skills__item-wrapper">
            <figure className="skills__item">
              <div className="skills__img-wrapper">
                <img src={html} alt="typescript" className="skills__img" />
              </div>
              <figcaption className="skills__description">HTML</figcaption>
            </figure>
          </li>
          <li className="skills__item-wrapper">
            <figure className="skills__item">
              <div className="skills__img-wrapper">
                <img src={css} alt="typescript" className="skills__img" />
              </div>
              <figcaption className="skills__description">CSS</figcaption>
            </figure>
          </li>
          <li className="skills__item-wrapper">
            <figure className="skills__item">
              <div className="skills__img-wrapper">
                <img src={scss} alt="typescript" className="skills__img" />
              </div>
              <figcaption className="skills__description">Sass</figcaption>
            </figure>
          </li>
          <li className="skills__item-wrapper">
            <figure className="skills__item">
              <div className="skills__img-wrapper">
                <img src={node} alt="typescript" className="skills__img" />
              </div>
              <figcaption className="skills__description">Node.js</figcaption>
            </figure>
          </li>
          <li className="skills__item-wrapper">
            <figure className="skills__item">
              <div className="skills__img-wrapper">
                <img src={mongo} alt="typescript" className="skills__img" />
              </div>
              <figcaption className="skills__description">MondoDB</figcaption>
            </figure>
          </li>
          <li className="skills__item-wrapper">
            <figure className="skills__item">
              <div className="skills__img-wrapper">
                {/* <img src={express} alt="typescript" className="skills__img" /> */}
                <SiExpress size="90px" color="#white" />
              </div>
              <figcaption className="skills__description">Express</figcaption>
            </figure>
          </li>
          <li className="skills__item-wrapper">
            <figure className="skills__item">
              <div className="skills__img-wrapper">
                <img src={git} alt="typescript" className="skills__img" />
              </div>
              <figcaption className="skills__description">GitHub</figcaption>
            </figure>
          </li>
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
