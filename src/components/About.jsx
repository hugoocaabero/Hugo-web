import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import './About.css'

export default function About() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre Mí
        </motion.h2>

        <div className="about-wrapper">
          {/* Contenido */}
          <motion.div
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p className="about-intro" variants={itemVariants}>
              {portfolioData.about.description}
            </motion.p>

            <motion.div className="highlights" variants={containerVariants}>
              {portfolioData.about.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  className="highlight-item"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="highlight-icon">✓</div>
                  <p>{highlight}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="about-stats" variants={containerVariants}>
              <motion.div className="stat-item" variants={itemVariants}>
                <h4>Proyectos</h4>
                <p className="stat-number">10+</p>
              </motion.div>
              <motion.div className="stat-item" variants={itemVariants}>
                <h4>Certificaciones</h4>
                <p className="stat-number">5+</p>
              </motion.div>
              <motion.div className="stat-item" variants={itemVariants}>
                <h4>Años de Estudio</h4>
                <p className="stat-number">4</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Experiencia y Educación */}
          <motion.div
            className="about-timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Educación & Experiencia</h3>

            <motion.div className="timeline" variants={containerVariants}>
              {portfolioData.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="timeline-item education-item"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="timeline-marker education"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <p className="school">{edu.school}</p>
                    <p className="year">{edu.year}</p>
                    <p className="description">{edu.description}</p>
                  </div>
                </motion.div>
              ))}

              {portfolioData.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="timeline-item experience-item"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="timeline-marker experience"></div>
                  <div className="timeline-content">
                    <h4>{exp.position}</h4>
                    <p className="company">{exp.company}</p>
                    <p className="duration">{exp.duration}</p>
                    <p className="description">{exp.description}</p>
                    {exp.achievements.length > 0 && (
                      <ul className="achievements">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
