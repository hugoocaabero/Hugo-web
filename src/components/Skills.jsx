import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { 
  FaProjectDiagram, FaBrain, FaNetworkWired, FaRobot, FaGithub, FaLaptopCode, FaCogs, FaChartBar, FaLightbulb, FaHandshake, FaUserFriends, FaBullseye, FaComments, FaLeaf, FaTruck,
  FaFileExcel
} from 'react-icons/fa'
import { SiLatex, SiRstudioide, SiOpenai, SiN8N } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
import { BiStats } from 'react-icons/bi'
import './Skills.css'

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  }

  const hardSkills = portfolioData.skills?.hardSkills || []
  const knowledgeAreas = portfolioData.skills?.knowledgeAreas || []
  const softSkills = portfolioData.skills?.softSkills || []

  // Map skill text to icon + optional external url
  const iconMap = {
    'Informática básica': { Icon: FaLaptopCode },
    'Hojas de Cálculo': { Icon: FaFileExcel, url: 'https://www.microsoft.com/es-es/microsoft-365/excel' },
    'Manejo de redes sociales': { Icon: FaNetworkWired },
    'Manejo básico de herramientas de IA': { Icon: FaRobot, url: 'https://openai.com' },
    'Automatización de procesos con IA': { Icon: FaRobot },
    'n8n': { Icon: SiN8N, url: 'https://n8n.io' },
    'n8n - Automatización': { Icon: SiN8N, url: 'https://n8n.io' },
    'RStudio': { Icon: SiRstudioide, url: 'https://posit.co/download/rstudio-desktop/' },
    'ERP': { Icon: FaCogs },
    'GitHub Copilot': { Icon: FaGithub, url: 'https://github.com/features/copilot' },
    'Github Copilot': { Icon: FaGithub, url: 'https://github.com/features/copilot' },
    'LaTeX': { Icon: SiLatex, url: 'https://www.latex-project.org/' },
    'ChatGPT': { Icon: SiOpenai, url: 'https://openai.com/chatgpt' }
  }

  const handleClick = (skill) => {
    const entry = iconMap[skill]
    if (entry?.url) {
      window.open(entry.url, '_blank', 'noopener,noreferrer')
    }
  }

  // Knowledge area icon map
  const knowledgeIconMap = {
    'Análisis de datos': FaChartBar,
    'Gestión de proyectos': FaCogs,
    'Análisis Estratégico y Económico': FaBrain,
    'Metodologías Ágiles': BiStats,
    'Gestión Logística': FaTruck,
    'Desarrollo Sostenible': FaLeaf
  }

  // Soft skill icon map
  const softIconMap = {
    'Trabajo en equipo': FaUserFriends,
    'Resolución de problemas': FaBrain,
    'Pensamiento crítico': FaBullseye,
    'Creatividad': FaLightbulb,
    'Habilidades interpersonales': FaComments
  }

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Habilidades y Conocimientos
        </motion.h2>

        <div className="skills-grid">
          {/* A. Habilidades Técnicas (Hard Skills) - Blue Pills */}
          <motion.div
            className="skills-category-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Habilidades Técnicas</h3>
            <motion.div className="skills-categories" variants={containerVariants}>
              {hardSkills.map((skill, i) => {
                const data = iconMap[skill] || {}
                const Icon = data.Icon
                const isClickable = Boolean(data.url)
                return (
                  <motion.button
                    key={i}
                    type="button"
                    className={`skill-badge-icon ${isClickable ? 'clickable' : ''}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleClick(skill)}
                    aria-label={isClickable ? `${skill} (abrir enlace)` : skill}
                    title={isClickable ? `${skill} (abrir enlace)` : skill}
                  >
                    {Icon && <Icon className="skill-icon" />}
                    <span className="skill-text">{skill}</span>
                    {isClickable && <FiExternalLink className="external-indicator" aria-hidden="true" />}
                  </motion.button>
                )
              })}
            </motion.div>
          </motion.div>

          {/* B. Áreas de Conocimiento - White Cards (KEY SECTION) */}
          <motion.div
            className="skills-category-section knowledge-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Áreas de Conocimiento</h3>
            <motion.div className="knowledge-grid" variants={containerVariants}>
              {knowledgeAreas.map((area, idx) => {
                const Icon = knowledgeIconMap[area] || FaBrain
                return (
                  <motion.div
                    key={idx}
                    className="knowledge-card"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <Icon className="knowledge-icon" />
                    <span className="knowledge-name">{area}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* C. Competencias (Soft Skills) - White Cards */}
          <motion.div
            className="skills-category-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Competencias</h3>
            <motion.div className="soft-skills-grid" variants={containerVariants}>
              {softSkills.map((skill, idx) => {
                const Icon = softIconMap[skill]
                return (
                  <motion.div
                    key={idx}
                    className="soft-skill-item"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    {Icon && <Icon className="soft-skill-icon" />}
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
