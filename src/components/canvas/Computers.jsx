import { Canvas } from '@react-three/fiber'
import { Preload, useGLTF, Stage, PresentationControls } from "@react-three/drei";


import CanvasLoader from '../Loader'
import { Suspense } from 'react';

const Computers = (props) => {
  const bmw = useGLTF('../bmw/scene.gltf')


  return (
    <mesh>
      <primitive
        object={bmw.scene}{...props} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 15 }}
      style={{ position: "absolute" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.2, Math.PI / 2]}
        >
          <Stage environment={"forest"}>
            <Computers scale={1.5} />
          </Stage>
        </PresentationControls>
      </Suspense>
      <Preload all />
    </Canvas>
    
  );
}

export default ComputersCanvas
