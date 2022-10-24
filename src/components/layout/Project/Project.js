import styles from './Project.module.css'

export default function Project({id, name, image, alt}) {
    return (
        <li className={styles.project_item} key={id}>
            <img className={styles.project_image} src={image} alt={alt} />
            <h2 className={styles.project_subtitle}>
                <span className={styles.code}>&lt;</span> {name} <span className={styles.code}>&#47;&gt;</span>
            </h2> 
        </li>
    )
}