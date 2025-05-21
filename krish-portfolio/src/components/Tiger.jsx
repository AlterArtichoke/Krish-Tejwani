import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'

export default function Tiger({ target }) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/sabertooth_tiger_animation_set.glb')
  const { actions } = useAnimations(animations, group)
  const [prevPos, setPrevPos] = useState({ x: 3, z: -3 }) // Initial

  useEffect(() => {
    if (group.current) {
      group.current.position.set(3, 0, -3) // Top right-ish
    }
    actions['Idle']?.play()
  }, [actions])

  useFrame(() => {
    if (!group.current || !target.current) return

    const tiger = group.current
    const { x, y } = target.current

    const ndcX = (x / window.innerWidth) * 2 - 1
    const ndcY = -(y / window.innerHeight) * 2 + 1

    const targetX = ndcX * 5
    const targetZ = ndcY * 5

    tiger.position.x += (targetX - tiger.position.x) * 0.05
    tiger.position.z += (targetZ - tiger.position.z) * 0.05

    const dx = tiger.position.x - prevPos.x
    const dz = tiger.position.z - prevPos.z
    const speed = Math.sqrt(dx * dx + dz * dz)

    if (speed < 0.001) {
      actions['Idle']?.play()
      actions['Walk']?.stop()
      actions['Run']?.stop()
    } else if (speed < 0.05) {
      actions['Idle']?.stop()
      actions['Walk']?.play()
      actions['Run']?.stop()
    } else {
      actions['Idle']?.stop()
      actions['Walk']?.stop()
      actions['Run']?.play()
    }

    setPrevPos({ x: tiger.position.x, z: tiger.position.z })
  })

  return <primitive object={scene} ref={group} scale={150} />
}

// import { useGLTF } from '@react-three/drei'
// import { useEffect, useRef } from 'react'

// export default function Tiger() {
//   const group = useRef()
//   const { scene } = useGLTF('/models/sabertooth_tiger_animation_set.glb')

//   useEffect(() => {
//     if (group.current) {
//       group.current.position.set(0, 0, 0)
//       console.log('🐯 Tiger added to scene at (0, 0, 0)')
//     }
//   }, [])

//   return <primitive object={scene} ref={group} scale={2.5} />
// }
