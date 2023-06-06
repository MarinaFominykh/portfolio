import "./Header.scss";
import React from "react";
import { CgMenu } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import Particle from "../Particle/Particle";
const Header: React.FC = () => {
  return (
    <React.Fragment>
      
      <header className="header">
      <Particle />
        <div className="header__cntr">
          <div className="header__logo-cntr">
            <p className="header__logo-name text-mrg">Marina&nbsp;Fominykh</p>
            <p className="header__logo-prof text-mrg">frontend-developer</p>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a className="link header__link" href="/">
                  <FaCode size="18px" />
                  <p className="header__link-txt text-mrg">Projects</p>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="link header__link" href="/">
                  <FaTools size="16px" />
                  <p className="header__link-txt text-mrg">Skills</p>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="link header__link" href="/">
                  <FaUserGraduate size="16px" />
                  <p className="header__link-txt text-mrg">Education</p>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="link header__link" href="/">
                  <FaEnvelope size="16px" />
                  <p className="header__link-txt text-mrg">Contact</p>
                </a>
              </li>
            </ul>
          </nav>
          <CgMenu className="header-burger" size="32px"></CgMenu>
        </div>
        <h1 className="header__title text-mrg">
          Hi, I'm&nbsp;
          <span className="header__name">Marina</span>
        </h1>
        <p className="header__description text-mrg">
          I'm frontend developer. I spend my day-to-day developing projects with
          TypeScript, React and Node.js.
        </p>
        <div className="header__btns">
          <a className="button link projects-btn" href="/">
            <FaCode size="18px" />
            <p className="header__link-txt text-mrg">Projects</p>
          </a>
          <a className="button link github-btn" href="/">
            <AiFillGithub size="20px" />
            <p className="header__link-txt text-mrg">GitHub</p>
          </a>
        </div>
        <div className="seperator-skew">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
