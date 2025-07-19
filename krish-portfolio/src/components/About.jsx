import { motion } from 'framer-motion'
import ScrambledText from './addn/ScrambledText'

export default function About() {
  return (
    <section className="py-20 px-1 max-w-5xl mx-auto font-Figtree">
      <motion.h2
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-xl leading-relaxed content-stretch"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >

        <ScrambledText  className="scrambled-text-demo"  radius={100}  duration={1.2}  speed={0.5}  scrambleChars=".:">
          Hello! I’m Krish Tejwani, a passionate Full Stack Developer with a growing interest in Machine Learning and Blockchain technology. I’ve participated in several hackathons across domains like computer vision and data analysis, currently focusing on impactful projects that solve real-world problems.
        </ScrambledText>
      </motion.p>
    </section>
  )
}
