import styles from "./Portfolio.module.css";

import flatList from '../../../assets/expo/flatlist.png';
import passagemParametros from '../../../assets/expo/passagemParametros.png';
import netflix from '../../../assets/expo/netflix.png';
import layoutResponsivo from '../../../assets/expo/layoutResponsivo.png';

import Project from "../../layout/Project/Project";

export default function Portfolio() {

  const projects = [
    {
      id: 1,
      name: 'FlatList',
      image: flatList
    },
    {
      id: 2,
      name: 'Passagem de Parâmetros',
      image: passagemParametros
    },
    {
      id: 3,
      name: 'App Filmes/Séries',
      image: netflix
    },
    {
      id: 4,
      name: 'Layout Responsivo',
      image: layoutResponsivo
    }
  ]

  return (
    <section className={styles.portfolio}>
      <div className={styles.title}>
        <div className={styles.boxPortfolio}>
          <p> Portfólio</p>
        </div>
      </div>

      <div className={styles.projects}>
        <h2 className={styles.project_header}>
          Esses são alguns dos meus projetos
        </h2>

        <ul className={styles.project_column}>
            {projects.map((project) => (
              <Project 
                id={project.id}
                name={project.name}
                image={project.image}
              />
            ))}
        </ul>
      </div>
    </section>
  );
}
