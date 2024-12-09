import { Element } from 'react-scroll'
import styles from './SkillsSection.module.scss'

function SkillsSection() {
    return (
        <Element name="skills">
            <section id={styles.skills}>
                <h2>Compétences Techniques</h2>
                <div className={styles['skills-container']}>
                    <div className="skill-card">
                        <h3>Développement Web</h3>
                        <ul>
                            <li>
                                <p>HTML, CSS, SASS</p>
                            </li>
                            <li>
                                <p>JavaScript, Node.js, React</p>
                            </li>
                            <li>
                                <p>Mongo DB, PostgreSQL</p>
                            </li>
                            <li>
                                <p>SEO, Optimisation, Accessibilité web</p>
                            </li>
                            <li>
                                <p>No-code, Wordpress</p>
                            </li>
                            <li>
                                <p>Tests (Mocha, Assert, Supertest)</p>
                            </li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <h3>Réseaux Informatiques</h3>
                        <ul>
                            <li>
                                <p>Linux, Ubuntu, Windows</p>
                            </li>
                            <li>
                                <p>
                                    Adressage IP, Routage, Cisco Packet Tracer
                                </p>
                            </li>
                            <li>
                                <p>Virtualisation</p>
                            </li>
                            <li>
                                <p>IoT, Home Assistant</p>
                            </li>
                            <li>
                                <p>
                                    Installation de caméras de
                                    vidéo-surveillance
                                </p>
                            </li>
                            <li>
                                <p>Protocoles de communications sans fil</p>
                            </li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <h3>Fibre optique</h3>
                        <ul>
                            <li>
                                <p>
                                    Raccordement aérien, souterrain,
                                    aero-souterrain
                                </p>
                            </li>
                            <li>
                                <p>SAV, PLP</p>
                            </li>
                            <li>
                                <p>Règlementations (ARCEP, ARCOM)</p>
                            </li>
                            <li>
                                <p>Diagnostics et réflectométrie</p>
                            </li>
                            <li>
                                <p>
                                    CACES R486 Nacelle, Habilitation électrique
                                </p>
                            </li>
                            <li>
                                <p>AIPR, Habilitation travaux en hauteur</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <a
                    href="/pages/about/about.html"
                    className={styles['home-btn']}
                >
                    Plus d&rsquo;information sur mon parcours
                </a>
            </section>
        </Element>
    )
}

export default SkillsSection
