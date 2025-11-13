import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'
import './Contact.css'

export default function Contact() {
  const phoneLink = `tel:${(portfolioData.phone || '').replace(/\s+/g, '')}`
  const contactMethods = [
    { icon: FaPhone, title: 'Teléfono', value: portfolioData.phone, link: phoneLink },
    { icon: FaEnvelope, title: 'Email', value: portfolioData.email, link: `mailto:${portfolioData.email}` },
    { icon: FaMapMarkerAlt, title: 'Ubicación', value: portfolioData.location, link: '#' }
  ]

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

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ponerse en Contacto
        </motion.h2>

        <div className="contact-wrapper">
          {/* Información de Contacto */}
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>¡Hablemos!</h3>

            <motion.div className="contact-methods" variants={containerVariants}>
              {contactMethods.map((method, idx) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={idx}
                    href={method.link}
                    className="contact-method"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <div className="method-icon">
                      <Icon />
                    </div>
                    <div className="method-content">
                      <h4>{method.title}</h4>
                      <p>{method.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
