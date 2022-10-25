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
      image: flatList,
      link: 'https://snack.expo.dev/@wesleydrc/listaaaaa'
    },
    {
      id: 2,
      name: 'Passagem de Parâmetros',
      image: passagemParametros,
      link:'https://snack.expo.dev/@wesleydrc/passagemdeparametrosdupla'
    },
    {
      id: 3,
      name: 'App Filmes/Séries',
      image: netflix,
      link: 'https://snack.expo.dev/@wesleydrc/a03271'
    },
    {
      id: 4,
      name: 'Layout Responsivo',
      image: layoutResponsivo,
      link:'https://snack.expo.dev/@wesleydrc/6cba1a'
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
        <p className={styles.subtitle}> Todos esses projetos foram feitos durante a matéria de PROGRAMAÇÃO DE APLICATIVOS MOBILE I </p>
        <div className={styles.project_column}>
            {projects.map((project) => (
              <Project 
                key={project.id}
                id={project.id}
                name={project.name}
                image={project.image}
                link={project.link}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
