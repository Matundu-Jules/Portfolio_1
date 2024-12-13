import styles from './SkillsSection.module.scss'
import skills from '../../../assets/scripts/skills.js'

function SkillsSection() {
    return (
        <section id={styles['about-skills']}>
            <h2>Compétences Techniques</h2>
            <div className={styles['about-skills-container']}>
                {skills.map((skillCategory, index) => (
                    <div key={index} className={styles['about-skill-category']}>
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
        </section>
    )
}

export default SkillsSection
