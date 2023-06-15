import "./Footer.scss";
import { AiFillGithub } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <p className="footer__logo-name text-mrg">Marina&nbsp;Fominykh</p>
          <p className="footer__logo-prof text-mrg">frontend developer</p>
        </div>
        <ul className="footer__icons list">
          <li className="footer__icon">
            <a
              href="https://github.com/MarinaFominykh"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size="32px" color="#ffffff" />
            </a>
          </li>
          <li className="footer__icon">
            <a
              href="tg://resolve?domain=@FominykhM"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegramPlane size="32px" color="#ffffff" />
            </a>
          </li>
          <li className="footer__icon">
            <a
              href="mailto:fominykhmm@yandex.ru"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope size="32px" color="#ffffff" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
