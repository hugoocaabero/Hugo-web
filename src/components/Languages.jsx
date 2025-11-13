import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { FaGlobe, FaFlag } from 'react-icons/fa'
import './Languages.css'

export default function Languages() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="languages" className="section languages-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Idiomas
        </motion.h2>

        <motion.div
          className="languages-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.languages.map((lang, idx) => (
            <motion.div
              key={idx}
              className="language-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="language-icon-wrapper">
                {lang.name === 'Español' || lang.name === 'Gallego' ? (
                  <FaFlag className="language-icon" />
                ) : (
                  <FaGlobe className="language-icon" />
                )}
              </div>
              <h3>{lang.name}</h3>
              <p className="language-level">{lang.level}</p>
              <div className="level-indicator">
                <motion.div
                  className={`level-bar ${lang.level.toLowerCase().includes('nativo') ? 'native' : 'advanced'}`}
                  initial={{ width: 0 }}
                  whileInView={{ 
                    width: lang.level.toLowerCase().includes('nativo') ? '100%' : '70%' 
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
