import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useEffect } from 'react'
import MetaBalls from './addn/MetaBalls'
import StarBorder from './addn/StarBorder'
import RotatingText from './addn/RotatingText'

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        
        {/* <div className='absolute top-44 left-44 z-80'>
          <CircularText text="KAYTEE*424*" onHover="speedUp" spinDuration={20} className="custom-class" />
        </div> */}
        {/* Background MetaBalls */}
        <div className="absolute inset-0 z-0 opacity-30 blur-xs">
          <MetaBalls
            color="#0B06BD"
            cursorBallColor="#0B06BD"
            cursorBallSize={2}
            ballCount={18}
            animationSize={30}
            enableMouseInteraction={true}
            enableTransparency={true}
            hoverSmoothness={0.05}
            clumpFactor={1}
            speed={0.3}
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold">Krish Tejwani</h1>
          <p className="text-xl md:text-2xl mt-4">
            Full Stack Developer | Aspiring Blockchain Developer
          </p>
          <div className="mt-6">
            <StarBorder as="button" className="custom-class" color="cyan" speed="7s">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded transition"
              >
                Download Resume
              </a>
            </StarBorder>
          </div>
          {/* <div className='flex flex-row mt-10 text-3xl font-bold'>
            <p className='w-1/2'>Creative</p>
            <RotatingText
            texts={['React', 'Bits', 'Is', 'Cool!']}
            mainClassName=" w-1/2  px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "50%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          </div> */}
        </div>
      </section>
    </>
  )
}