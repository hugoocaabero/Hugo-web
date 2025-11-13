import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-section">
            <h3>Hugo Cabero Creus</h3>
            <p>Estudiante de Ingeniería de la Empresa</p>
          </div>

          <div className="footer-section">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>&copy; {currentYear} Hugo Cabero Creus. Todos los derechos reservados.</p>
          <p className="footer-credit">Diseñado y construido con React + Vite + Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  )
}
