import "./SingleTech.scss";
import {Tech} from "../../models/ProjectModel";

interface SingleTechProps {
    tech: Tech  
  }

const SingleTech: React.FC<SingleTechProps> = ({tech}) => {
  return (
    <li className="tech">
      {tech.title}
    </li>
  );
};

export default SingleTech;
