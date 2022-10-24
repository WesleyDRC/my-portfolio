import styles from './AboutMe.module.css'

import Container from '../../layout/Container/Container'


export default function AboutMe() {
    return (
        <Container>
            <div className={styles.content}>
                <div className={styles.myImage}>
                    <div>
                        <img src="https://github.com/wesleydrc.png" alt="Foto de perfil do GitHub" />
                    </div>
                    
                </div>
                <div className={styles.aboutMe}>
                    <div className={styles.boxAboutMe}> <p> Sobre mim</p></div>
                    <h2> Wesley Luis dos Santos Miranda</h2>
                    <p> 👋 Opa, sou o Wesley, tenho 19 anos, sou de São José dos Campos-SP. Atualmente estudo Desenvolvimento de Sistema pela ETEC.  
                    </p>
                    <p> 🎓 Graduando Engenharia da Computação pela UNIVESP (Polo Parque Tecnológico - SJC )</p>
                    <p> Tenho interesse em ser um desenvolvedor FrontEnd. </p>
                    <p> Ando me especializando em React e React Native.</p>
                    <p> 🚀 Tentando ser um pouquinho melhor do que ontem! </p>
                </div>
            </div>
        </Container>
    )
}