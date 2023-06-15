import "./Dropdown.scss";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

interface DropdownProps {
  isOpen: boolean;
  handleToggleOpen: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, handleToggleOpen }) => {
  return (
    <aside className={`dropdown ${isOpen && "dropdown_open"} `}>
      <button
        className="dropdown__close"
        type="button"
        onClick={handleToggleOpen}
      >
        <MdClose size="32px" color="#ffffff" />
      </button>
      <nav className="dropdown__nav">
        <ul className="dropdown__nav-list list">
          <li className="dropdown__nav-item" onClick={handleToggleOpen}>
            <a className="link dropdown__link" href="#projects">
              <FaCode size="18px" />
              <p className="dropdown__link-txt text-mrg">Projects</p>
            </a>
          </li>
          <li className="dropdown__nav-item" onClick={handleToggleOpen}>
            <a className="link dropdown__link" href="#skills">
              <FaTools size="16px" />
              <p className="dropdown__link-txt text-mrg">Skills</p>
            </a>
          </li>
          <li className="dropdown__nav-item" onClick={handleToggleOpen}>
            <a className="link dropdown__link" href="#education">
              <FaUserGraduate size="16px" />
              <p className="dropdown__link-txt text-mrg">Education</p>
            </a>
          </li>
          <li className="dropdown__nav-item" onClick={handleToggleOpen}>
            <a className="link dropdown__link" href="#contacts">
              <FaEnvelope size="16px" />
              <p className="dropdown__link-txt text-mrg">Contacts</p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Dropdown;
