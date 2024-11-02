import PropTypes from "prop-types";
const Skill = ({skill, color, icon}) => {
    return ( <li className="skill" style={{backgroundColor:color}}> 
        {skill} {icon}
    </li> );
}
 
export default Skill;
Skill.propTypes = {
    color: PropTypes.string.isRequired, // 假設 color 是必需的字串
    skill:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired,
  };