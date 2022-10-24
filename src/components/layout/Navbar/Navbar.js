import styles from './Navbar.module.css';

import Container from '../Container/Container';

import {Link} from 'react-router-dom';

export default function Navbar (){
    return (
        <Container>
            <nav className={styles.navbar}>
                <div className={styles.backHome}>
                    <Link to="/"> &lt;&#47;&gt;</Link>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}> <Link to="/"> Home </Link> </li>
                    <li className={styles.item}> <Link to="/aboutme"> Sobre mim </Link></li>
                    <li className={styles.item}> <Link to="portfolio"> Portfólio </Link> </li>
                    <li className={styles.item}> <Link to="/skills"> Skills </Link> </li>
                    <li className={styles.item}> <Link to="/contact"> Contato </Link> </li>
                </ul>
            </nav>
        </Container>
    )
}

