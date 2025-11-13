import { motion } from 'framer-motion'
import { useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import './Hero.css'

export default function Hero() {
  const [isSpinning, setIsSpinning] = useState(false)

  const handleAvatarClick = () => {
    if (!isSpinning) {
      setIsSpinning(true)
      setTimeout(() => setIsSpinning(false), 600)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-circle gradient-circle-1"></div>
        <div className="gradient-circle gradient-circle-2"></div>
      </div>

      <motion.div className="hero-content" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="hero-text">
          <motion.p className="greeting" variants={itemVariants}>
            Bienvenido, soy
          </motion.p>
          <motion.h1 variants={itemVariants}>
            {portfolioData.name}
          </motion.h1>
          <motion.p className="title" variants={itemVariants}>
            {portfolioData.title}
          </motion.p>
          <motion.p className="description" variants={itemVariants}>
            Universidad Intercontinental de la Empresa (UIE). Finalicé mi formación
            escolar en el Liceo La Paz y realicé un curso de inglés en Irlanda.
            Estoy buscando una oportunidad para iniciar mi carrera profesional,
            ganar experiencia y seguir aprendiendo mientras aplico mis
            conocimientos y me comprometo con los proyectos desde el primer día.
          </motion.p>


        </motion.div>

        <motion.div className="hero-visual" variants={itemVariants}>
          <motion.div
            className="hero-avatar"
            initial={{ rotate: 0 }}
            animate={{
              y: [0, -20, 0],
              rotate: 360
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 2, ease: "easeOut" }
            }}
          >
            <div 
              className={`avatar-container ${isSpinning ? 'spinning' : ''}`}
              onClick={handleAvatarClick}
            >
              <img
                src="/images/minecraft-avatar.png"
                alt="Minecraft Avatar"
                className="avatar-img minecraft-avatar"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
