import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { label: 'Inicio', href: '#home' },
  { label: 'Formación', href: '#education' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
  { label: 'Idiomas', href: '#languages' },
    { label: 'Contacto', href: '#contact' }
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.div
          className="navbar-brand"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>HC</h2>
          <span className="subtitle">Hugo Cabero</span>
        </motion.div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <motion.ul
          className={`navbar-menu ${isOpen ? 'active' : ''}`}
          initial={false}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  )
}
