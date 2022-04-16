import React from "react";
import "./Experience.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPhp,
  SiMysql,
  SiPython,
} from "react-icons/si";

const Experience = () => {
  const experiencesFrontEnd = [
    {
      title: "HTML",
      experience: "Experienced",
      icon: <SiHtml5 className="experience__details-icon" />,
    },
    {
      title: "CSS",
      experience: "Intermediate",
      icon: <SiCss3 className="experience__details-icon" />,
    },
    {
      title: "JavaScript",
      experience: "Experienced",
      icon: <SiJavascript className="experience__details-icon" />,
    },
    {
      title: "Bootstrap",
      experience: "Experienced",
      icon: <SiBootstrap className="experience__details-icon" />,
    },
    {
      title: "Tailwind",
      experience: "Experienced",
      icon: <SiTailwindcss className="experience__details-icon" />,
    },
    {
      title: "React",
      experience: "Experienced",
      icon: <SiReact className="experience__details-icon" />,
    },
  ];
  const experiencesBackEnd = [
    {
      title: "Node js",
      experience: "Experienced",
      icon: <SiNodedotjs className="experience__details-icon" />,
    },
    {
      title: "MongoDb",
      experience: "Intermediate",
      icon: <SiMongodb className="experience__details-icon" />,
    },
    {
      title: "PHP",
      experience: "Intermediate",
      icon: <SiPhp className="experience__details-icon" />,
    },
    {
      title: "MySql",
      experience: "Basic",
      icon: <SiMysql className="experience__details-icon" />,
    },
    {
      title: "Python",
      experience: "Experienced",
      icon: <SiPython className="experience__details-icon" />,
    },
  ];
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {experiencesFrontEnd.map((item) => (
              <article className="experience__details">
                {item.icon}
                <div>
                  <h4>{item.title}</h4>
                  <small className="text-light">{item.experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {experiencesBackEnd.map((item) => (
              <article className="experience__details">
                {item.icon}
                <div>
                  <h4>{item.title}</h4>
                  <small className="text-light">{item.experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
