import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { scroller } from 'react-scroll'
import styles from './Home.module.scss'
import AboutSection from './AboutSection/AboutSection'
import SkillsSection from './SkillsSection/SkillsSection'
import ProjectsSection from './ProjectsSection/ProjectsSection'
import ContactSection from './ContactSection/ContactSection'

function Home() {
    const [currentSection, setCurrentSection] = useState(0)
    const [isDesktop, setIsDesktop] = useState(true)
    const sectionNames = useMemo(
        () => ['about', 'skills', 'projects', 'contact'],
        []
    )
    const isTrottled = useRef(false)
    const headerHeight = 101

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 1024)
        handleResize()
        window.addEventListener('resize', handleResize)
    }, [])

    const scrollToSection = useCallback(
        (index) => {
            const offset = index === 0 ? -headerHeight : 0
            scroller.scrollTo(sectionNames[index], {
                smooth: 'easeInOutQuint',
                duration: 1000,
                offset,
            })
        },
        [sectionNames, headerHeight]
    )

    const handleScroll = useCallback(
        (event) => {
            if (isTrottled.current || !isDesktop) return
            if (event.deltaY > 0 && currentSection < sectionNames.length - 1) {
                setCurrentSection((prev) => prev + 1)
            } else if (event.deltaY < 0 && currentSection > 0) {
                setCurrentSection((prev) => prev - 1)
            }
            isTrottled.current = true
            setTimeout(() => (isTrottled.current = false), 500)
        },
        [currentSection, sectionNames.length, isDesktop]
    )

    useEffect(() => {
        if (isDesktop) scrollToSection(currentSection)
    }, [currentSection, scrollToSection, isDesktop])

    useEffect(() => {
        if (isDesktop) {
            window.addEventListener('wheel', handleScroll, { passive: false })
        }
        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [handleScroll, isDesktop])

    return (
        <main className={styles['home-container']}>
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    )
}

export default Home
