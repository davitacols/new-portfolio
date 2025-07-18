import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const { scene } = useGLTF('./planet/scene.gltf');
  return <primitive object={scene} scale={2.5} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      camera={{
        position: [-4, 3, 6],
        fov: 45,
        near: 0.1,
        far: 200,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;