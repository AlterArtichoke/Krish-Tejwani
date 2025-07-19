import { motion } from 'framer-motion'
import TextPressure from './addn/TextPressure'

const projects = [
  {
    title: "Vandalism Detection for Indian Monuments",
    tools: "ML, OpenCV",
    details: "Detected individuals spitting or defacing walls. Finalist in regionals.",
  },
  {
    title: "SafeLink: Phishing Detection",
    tools: "Flask, Web Scraping",
    details: "95% accurate phishing detection using heuristic techniques.",
  },
  {
    title: "CryptoFlap - DeFi Game",
    tools: "Solidity, React.js",
    details: "1v1 Flappy Bird game with NFT-based blockchain rewards. HOD Hackathon winner.",
  }
]

export default function Projects() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div style={{position: 'relative', height: '280px'}}>
       <TextPressure text="Projects" flex={true} alpha={false} stroke={false} width={true} weight={true} italic={true} textColor="#ffffff" strokeColor="#ff0000" minFontSize={36} />
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{proj.tools}</p>
            <p>{proj.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}