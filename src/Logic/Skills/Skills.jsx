import { 
  FaJava, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt,
  FaDatabase, 
  FaGitAlt, 
  FaReact, 
  FaLinux } from "react-icons/fa";
import { 
  SiJavascript, 
  SiC, 
  SiCplusplus,  
  SiFigma,
  SiAndroidstudio,
  SiIntellijidea, 
  SiNotion 
} from "react-icons/si";
import { IoTerminalSharp } from "react-icons/io5";
import { BiLogoVisualStudio } from "react-icons/bi";

import styles from "../../Styles/Skills.module.css";
import divider from "../../Styles/Intro.module.css";

export default function Skills() {
  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiC />, name: "C" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <IoTerminalSharp />, name: "Command Line" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <BiLogoVisualStudio />, name: "VS Code" },
    { icon: <SiIntellijidea />, name: "IntelliJ" },
    { icon: <SiNotion />, name: "Notion" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <SiAndroidstudio />, name: "Android Studio" }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>Skills &amp; Tools</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, idx) => (
          <div key={idx} className={styles.skill}>
            <span className={styles.icon}>{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <hr className={divider.sectionDivider} />
    </section>
  );
}