import styles from './About.module.scss'
import IntroSection from './IntroSection/IntroSection.jsx'
import FormationsSection from './FormationsSection/FormationsSection.jsx'
import ExpSection from './ExpSection/ExpSection.jsx'
import SkillsSection from './SkillsSection/SkillsSection.jsx'
// import CvSection from './CvSection/CvSection.jsx'

function About() {
    return (
        <main className={styles['about-container']}>
            <h1 className={styles['about-main-title']}>À propos de moi</h1>

            <IntroSection />
            <FormationsSection />
            <ExpSection />
            <SkillsSection />
            {/*<CvSection /> */}
        </main>
    )
}

export default About
