import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useEffect } from 'react'
import Tiger from './Tiger'

export default function Hero() {
  const cursor = useRef({ x: window.innerWidth, y: 0 }) // top right

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursor.current.x = e.clientX
      cursor.current.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <Suspense fallback={null}>
          <Tiger target={cursor} />
        </Suspense>
      </Canvas>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold">Krish Tejwani</h1>
        <p className="text-xl md:text-2xl mt-4">
          Full Stack Developer | Aspiring ML Developer
        </p>
        <div className="mt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-500 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

// import { Canvas } from '@react-three/fiber'
// import { Suspense } from 'react'
// import Tiger from './Tiger'

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-black">
//       <Canvas camera={{ position: [0, 1, 8], fov: 50 }}>
//         <ambientLight intensity={0.6} />
//         <directionalLight position={[5, 10, 5]} intensity={1} />
//         <Suspense fallback={null}>
//           <Tiger />
//         </Suspense>
//       </Canvas>
//     </section>
//   )
// }
