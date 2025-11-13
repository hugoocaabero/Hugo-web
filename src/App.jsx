import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Hero />
      <Education />
        <Skills />
        <Projects />
      <Languages />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
