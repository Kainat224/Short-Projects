import React from "react";
import "./skills.css";

const DeveloperSkills = [
  {
    skill: "HTML5",
    level: "Advance",
    color: "lightGreen",
  },
  {
    skill: "CSS3",
    level: "Advance",
    color: "pink",
  },
  {
    skill: "Sass/Scss",
    level: "Basic",
    color: "yellow",
  },
  {
    skill: "Tailwind",
    level: "Advance",
    color: "Pink",
  },
  {
    skill: "Bootstrap",
    level: "Advance",
    color: "lightGreen",
  },
  {
    skill: "Javascript",
    level: "Intermediate",
    color: "Yellow",
  },
  {
    skill: "React",
    level: "Advance",
    color: "lightBlue",
  },
];

const Skills = () => {
  return DeveloperSkills.map((devskill) => (
    <>
      <div className="skillStyling" style={{ background: devskill.color }}>
        <h2>{devskill.skill}</h2>
        <h3>
          {devskill.level}
          <span>
            {devskill.level === "Basic" && "😉"}
            {devskill.level === "Intermediate" && "🤩"}
            {devskill.level === "Advance" && "😎"}
          </span>
          {/* <span>{devskill.level === "Advance" ? "😎" : "👌"} </span> */}
        </h3>
      </div>
    </>
  ));
};

export default Skills;
