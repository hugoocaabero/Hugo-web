import { motion } from 'framer-motion'
import { FaCalendar, FaClock, FaTag } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'
import './Blog.css'

export default function Blog() {
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Blog & Artículos
        </motion.h2>

        <motion.div
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.blog.map((article) => (
            <motion.article
              key={article.id}
              className="blog-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="blog-header">
                <motion.span className="blog-category" whileHover={{ scale: 1.05 }}>
                  <FaTag /> {article.category}
                </motion.span>
              </div>

              <h3>{article.title}</h3>
              <p className="blog-excerpt">{article.excerpt}</p>

              <div className="blog-meta">
                <div className="meta-item">
                  <FaCalendar /> {article.date}
                </div>
                <div className="meta-item">
                  <FaClock /> {article.readTime}
                </div>
              </div>

              <motion.a
                href={article.link}
                className="read-more"
                whileHover={{ x: 10 }}
              >
                Leer más →
              </motion.a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="blog-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Suscribete para recibir nuevos artículos sobre tecnología y gestión empresarial</p>
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Tu email..." required />
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
            >
              Suscribirse
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
