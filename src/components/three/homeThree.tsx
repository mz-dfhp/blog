import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
const HomeThree: React.FC = () => {
  return (
    <div className="w-150px h-150px">
      <Canvas className="Canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Sphere visible={true} args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color="#2c3e50"
              attach="material"
              distort={0.3}
              speed={1.5}
              roughness={1}
            />
          </Sphere>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HomeThree
