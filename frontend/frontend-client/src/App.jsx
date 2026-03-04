import React from 'react'
import './App.css'
import { Canvas } from "@react-three/fiber"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function Box() {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}
//i am going to study animation and 3d modeling to create more complex and interactive 3D scenes in the future. This simple rotating box is just the beginning of what I can create with React Three Fiber.
export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <Box />
    </Canvas>
  )
}