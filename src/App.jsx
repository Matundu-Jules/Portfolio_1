import styles from './App.module.scss'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

function App() {
    return (
        <Router>
            <div className={`d-flex flex-column ${styles.appContainer}`}>
                <Header />
                <AnimatedRoutes />
                <Footer />
            </div>
        </Router>
    )
}

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <PageTransition>
                            <Home />
                        </PageTransition>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <PageTransition>
                            <About />
                        </PageTransition>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <PageTransition>
                            <Projects />
                        </PageTransition>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <PageTransition>
                            <Contact />
                        </PageTransition>
                    }
                />
            </Routes>
        </AnimatePresence>
    )
}

function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="d-flex"
        >
            {children}
        </motion.div>
    )
}

// Validation des props
PageTransition.propTypes = {
    children: PropTypes.node.isRequired, // Définition de la prop 'children'
}

export default App
