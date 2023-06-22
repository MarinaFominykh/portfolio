import "./SingleSkill.scss";

interface SingleSkillProps {
  icon: string;
  title: string;
}
const SingleSkill: React.FC<SingleSkillProps> = ({ icon, title }) => {
  return (
    <li className="skills__item-wrapper">
      <figure className="skills__item">
        <div className="skills__img-wrapper">
          <img src={icon} alt={title} className="skills__img" />
        </div>
        <figcaption className="skills__description">{title}</figcaption>
      </figure>
    </li>
  );
};

export default SingleSkill;
