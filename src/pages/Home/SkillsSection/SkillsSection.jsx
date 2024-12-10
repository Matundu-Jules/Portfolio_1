import { Element } from 'react-scroll'
import styles from './SkillsSection.module.scss'
import skills from '../../../assets/scripts/skills.js'

function SkillsSection() {
    return (
        <Element name="skills">
            <section id={styles.skills}>
                <h2>Compétences Techniques</h2>

                <div className={styles['skills-container']}>
                    {skills.map((skillCategory, index) => (
                        <div key={index} className="skill-card">
                            <h3>{skillCategory.category}</h3>
                            <ul>
                                {skillCategory.skills.map((skill, i) => (
                                    <li key={i}>
                                        <p>{skill}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <a href="/about" className="home-btn">
                    Plus d&rsquo;information sur mon parcours
                </a>
            </section>
        </Element>
    )
}

export default SkillsSection
