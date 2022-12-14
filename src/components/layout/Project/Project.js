import styles from "./Project.module.css";

export default function Project({ name, image, alt, link }) {
  return (
    <div className={styles.container}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <figure className={styles.project_item}>
          <img src={image} alt={alt} />
          <figcaption>
            <h2 className={styles.project_subtitle}>
              <span className={styles.code}>&lt;</span> {name}
              <span className={styles.code}>&#47;&gt;</span>
            </h2>
          </figcaption>
        </figure>
      </a>
    </div>
  );
}
