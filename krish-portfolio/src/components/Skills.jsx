import { motion } from 'framer-motion'
import PixelTransition from './addn/PixelTransition'

const skills = [
  "Leadership", "Public Relations", "Teamwork",
  "Project Management", "Effective Communication"
]

const altSkills = [
  "React.js", "Node.js", "Express.js",
  "MongoDB", "Solidity"
]

export default function Skills() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2 className="text-4xl font-bold mb-8">Skills</motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <PixelTransition
            key={index}
            firstContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#131275"
                }}
              >
                <p style={{ fontWeight: 600, fontSize: "1.8rem", color: "#ffffff", textAlign: "center" }}>
                  {skill}
                </p>
              </div>
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#131275"
                }}
              >
                <p style={{ fontWeight: 900, fontSize: "1.8rem", color: "#ffffff" }}>
                  {altSkills[index] || skill}
                </p>
              </div>
            }
            gridSize={20}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
        ))}
      </div>
    </section>
  )
}
