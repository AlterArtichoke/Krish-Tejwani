import { motion } from 'framer-motion'

const skills = [
  "Leadership", "Public Relations", "Teamwork",
  "Project Management", "Effective Communication"
]

export default function Skills() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2 className="text-4xl font-bold mb-8">Skills</motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 p-4 rounded-lg text-center"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}