import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { 
  FaBrain, FaChartLine, FaCogs, FaLeaf, FaUsers, 
  FaLightbulb, FaHeart, FaFutbol, FaChartBar, FaHandshake 
} from 'react-icons/fa'
import { BiStats } from 'react-icons/bi'
import './Competencies.css'

export default function Competencies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const areaIcons = {
    'Análisis de datos': FaChartBar,
    'Gestión de proyectos': FaCogs,
    'Manejo de Sistemas de Información': FaBrain,
    'Análisis Estratégico y Económico': FaChartLine,
    'Desarrollo Sostenible': FaLeaf,
    'Metodologías Ágiles': BiStats,
    'Manejo básico de herramientas de IA': FaBrain,
    'Gestión Logística': FaCogs
  }

  const competencyIcons = {
    'Trabajo en equipo': FaUsers,
    'Habilidades interpersonales': FaHandshake,
    'Resolución de problemas': FaBrain,
    'Pensamiento crítico': FaLightbulb,
    'Creatividad': FaHeart
  }

  const hobbyIcons = {
    'Fútbol': FaFutbol,
    'Finanzas': FaChartLine,
    'Inversiones': FaChartBar
  }

  return (
    <section id="competencies" className="section competencies-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Áreas de Conocimiento & Competencias
        </motion.h2>

        <div className="competencies-grid">
          {/* Áreas de Conocimiento */}
          <motion.div
            className="comp-section areas-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Áreas de Conocimiento</h3>
            <div className="areas-grid">
              {portfolioData.areas.map((area, idx) => {
                const Icon = areaIcons[area] || FaBrain
                return (
                  <motion.div
                    key={idx}
                    className="area-card"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Icon className="area-icon" />
                    <p>{area}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Competencias */}
          <motion.div
            className="comp-section competencies-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Competencias</h3>
            <div className="comp-cards">
              {portfolioData.competencies.map((comp, idx) => {
                const Icon = competencyIcons[comp] || FaUsers
                return (
                  <motion.div
                    key={idx}
                    className="comp-card"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <Icon className="comp-icon" />
                    <p>{comp}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Habilidades */}
          <motion.div
            className="comp-section abilities-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Habilidades</h3>
            <div className="abilities-list">
              {portfolioData.abilities.map((ability, idx) => (
                <motion.div
                  key={idx}
                  className="ability-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bullet">•</span>
                  <p>{ability}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            className="comp-section hobbies-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Hobbies</h3>
            <div className="hobbies-grid">
              {portfolioData.hobbies.map((hobby, idx) => {
                const Icon = hobbyIcons[hobby] || FaHeart
                return (
                  <motion.div
                    key={idx}
                    className="hobby-card"
                    variants={itemVariants}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Icon className="hobby-icon" />
                    <p>{hobby}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
