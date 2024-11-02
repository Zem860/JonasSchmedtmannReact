import PropTypes from 'prop-types';
const Skill = ({ skill, color, level }) => {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      {skill} {level === 'advanced' && '💪'}
      {level === 'intermediate' && '💪'}
      {level === 'beginner' && '🔥'}
    </li>
  );
};

export default Skill;
Skill.propTypes = {
  color: PropTypes.string.isRequired, // 假設 color 是必需的字串
  skill: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};
