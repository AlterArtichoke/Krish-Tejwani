import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2 className="text-4xl font-bold mb-8">Education</motion.h2>
      <motion.div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">VIT University, Chennai</h3>
          <p>BTech in Computer Science (2022 - Present) | GPA: 8.6</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Amarchand Singhvi International School</h3>
          <p>High School Graduate (2010 - 2022)</p>
        </div>
      </motion.div>
    </section>
  )
}