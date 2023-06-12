import React, { useState } from "react";
import "./Education.scss";
import diplomaEnP1 from "../../images/diploma_en_p1.png";
import diplomaEnP2 from "../../images/diploma_en_p2.png";
import diplomaRuP1 from "../../images/diploma_p1.png";
import diplomaRuP2 from "../../images/diploma_p2.png";
import AOS from "aos";

interface EducationProps {
    handleImageClick: (image: string) => void;
  }
const Education: React.FC<EducationProps> = ({handleImageClick}) => {
AOS.init({});
  return (
    <section className="education">
      <div className="education__wrapper" data-aos="zoom-in">
        <h2 className="education__title text-mrg">
          My&nbsp;
          <span className="education__title-span text-mrg">Education</span>
        </h2>
        <ul className="education__list list">
            <li className="education__list-item">
                <img src={diplomaEnP1} className="education__img" alt="Диплом веб-разработчика" onClick={(() => {
                  handleImageClick(diplomaEnP1)
                })}/>
            </li>
            <li className="education__list-item">
                <img src={diplomaEnP2} className="education__img" alt="Диплом веб-разработчика" onClick={(() => {
                  handleImageClick(diplomaEnP2)
                })}/>
            </li>
            <li className="education__list-item">
                <img src={diplomaRuP1} className="education__img" alt="Диплом веб-разработчика" onClick={(() => {
                  handleImageClick(diplomaRuP1)
                })}/>
            </li>
            <li className="education__list-item">
                <img src={diplomaRuP2} className="education__img" alt="Диплом веб-разработчика" onClick={(() => {
                  handleImageClick(diplomaRuP2)
                })}/>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
