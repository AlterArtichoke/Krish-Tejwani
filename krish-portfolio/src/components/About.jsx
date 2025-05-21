import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hello! I’m Krish Tejwani, a passionate Full Stack Developer with a growing interest in Machine Learning and Blockchain technology. I’ve participated in several hackathons across domains like computer vision and data analysis, currently focusing on impactful projects that solve real-world problems.
      </motion.p>
    </section>
  )
}