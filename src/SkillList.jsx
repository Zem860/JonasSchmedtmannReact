import Skill from './Skill';
import {skills} from './data.js';
const SkillList = () => {
  return (
    <ul className="skill-list">
      {skills.map((d, index) => (
        <Skill key={index} skill={d.skill} color={d.color} level={d.level} />
      ))}
    </ul>
  // <ul className="skill-list">
  //     <Skill skill={"HTML+CSS"} color={"#0153b0"} icon={"💪"}/>
  //     <Skill skill={"JavaScript"} color={"#fcf000"} icon={"💪"}/>
  //     <Skill skill={"Web Design"} color={"#7deb00"} icon={"👍"}/>
  //     <Skill skill={"Git and GitHub"} color={"#fc5757"} icon={"👍"}/>
  //     <Skill skill={"React"} color={"#00dcd6"} icon={"👍"}/>
  //     <Skill skill={"React"} color={"#f0a700"} icon={"🔥"}/>
  // </ul>
)};

export default SkillList;
