import styles from "./Skills.module.css";

import logoCSS from "../../../assets/techs/CSS3.png";
import logoGitHub from "../../../assets/techs/Github.png";
import logoHTML from "../../../assets/techs/HTML5.png";
import logoJS from "../../../assets/techs/Javascript.png";
import logoReact from "../../../assets/techs/React.png";

import Container from "../../layout/Container/Container";

export default function Skills() {
  const techs = [
    {
      id: 1,
      name: "Logo Css",
      image: logoCSS,
    },
    {
      id: 2,
      name: "Logo GitHub",
      image: logoGitHub,
    },
    {
      id: 3,
      name: "Logo HTML5",
      image: logoHTML,
    },
    {
      id: 4,
      name: "Logo JavaScript",
      image: logoJS,
    },
    {
      id: 5,
      name: "Logo React",
      image: logoReact,
    },
  ];

  return (
    <Container>
      <section className={styles.skills}>
        <div className={styles.boxSkills}>
          <p> Skills</p>
        </div>

        <div className={styles.allSkills}>
          <div className={styles.hardSkills}>
            <h2 className={styles.skills_header}>Hard Skills</h2>
            <div className={styles.techs}>
              <h2> Techs que utilizo no dia a dia </h2>
              <ul className={styles.listTechs}>
                {techs.map((tech) => (
                  <li key={tech.id}>
                    <img src={tech.image} alt={tech.name} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.softSkills}>
            <h2 className={styles.skills_header}>Soft Skills</h2>
            <div className={styles.techs}>
              <h2> Habilidades comportamentais </h2>
              <ul className={styles.listSoftSkills}>
                <li>Trabalho em equipe</li>
                <li>Comunicação</li>
                <li>Proatividadde</li>
                <li>Empatia</li>
                <li>Produtividade</li>
                <li>Pensamento crítico</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
