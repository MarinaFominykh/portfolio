import "./SingleTech.scss";
import { Tech } from "../../models/ProjectModel";

interface SingleTechProps {
  tech: Tech;
}

const SingleTech: React.FC<SingleTechProps> = ({ tech }) => {
  return (
    <li className="tech">
      <img
        className="tech__img"
        src={`${process.env.PUBLIC_URL}/images/icons/${tech.src}`}
        alt={tech.title}
      />
    </li>
  );
};

export default SingleTech;
