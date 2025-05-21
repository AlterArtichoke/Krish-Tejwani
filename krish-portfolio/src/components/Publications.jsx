import { motion } from 'framer-motion'

export default function Publications() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2 className="text-4xl font-bold mb-8">Publications</motion.h2>
      <motion.div
        className="bg-gray-800 p-6 rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold mb-2">TPM with Multiple CRTM and Graphical Logs</h3>
        <p className="mb-2">Proposed secure logging framework using TPM 2.0</p>
        <a
          href="https://ieeexplore.ieee.org/document/10574551"
          target="_blank"
          className="text-blue-400 underline"
        >
          View Publication
        </a>
      </motion.div>
    </section>
  )
}