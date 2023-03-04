import { useDrag } from '@/hooks'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'

const HomeThree: React.FC = () => {
  const threeRef = useRef(null)
  useDrag(threeRef)
  return (
    <div
      className="w-25vw h-25vw absolute left-5 top-25vh cursor-pointer"
      ref={threeRef}
    >
      <Canvas className="Canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Sphere visible args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#2c3e50"
              attach="material"
              distort={0.5}
              speed={1.5}
              roughness={0}
            />
          </Sphere>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HomeThree
