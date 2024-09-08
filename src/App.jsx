import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import { AxesHelper } from 'three'
import './App.css'
import Plant from '../public/Plant'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Canvas camera={{position:[8,5,11]}}>
        <ambientLight/>
        <OrbitControls/>
        <Suspense fallback={null}>
          <Plant />
        </Suspense>
        <Environment preset='sunset'/>
      </Canvas> */}
      <Canvas camera={{position:[8,5,11]}}>
      {/* <AxesHelper args={[5]} /> */}
      <axesHelper args={[5]} />
      <ambientLight/>
      {/* <OrbitControls/> */}
      <Environment preset='sunset'/>
      <ScrollControls pages={6} damping={0.1} >
        <Plant />
      </ScrollControls>
      </Canvas>
    </>
  )
}

export default App
