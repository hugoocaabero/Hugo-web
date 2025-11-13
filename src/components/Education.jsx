import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa'
import './Education.css'

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const educationIcons = {
    "Grado en Ingeniería de la Empresa": FaUniversity,
    "Bachillerato Científico": FaSchool
  }

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Formación Académica
        </motion.h2>

        <motion.div
          className="education-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.education.map((edu) => {
            const Icon = educationIcons[edu.degree] || FaGraduationCap
            return (
              <motion.div
                key={edu.id}
                className="education-card"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="education-icon-wrapper">
                  <Icon className="education-icon" />
                </div>
                <div className="education-content">
                  <span className="education-year">{edu.year}</span>
                  <h3>{edu.degree}</h3>
                  <p className="education-school">{edu.school}</p>
                  {edu.description && (
                    <p className="education-description">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
