import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import GlowOrb from "@/components/three/GlowOrb";
import FloatingGeometry from "@/components/three/FloatingGeometry";
import FloatingParticles from "@/components/three/FloatingParticles";
import CameraRig from "@/components/three/CameraRig";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function HeroScene() {
  const pointer = useMousePosition();

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 4]} intensity={0.65} color="#cdbfff" />

      <Suspense fallback={null}>
        <GlowOrb />
        <FloatingGeometry />
        <FloatingParticles />
        <EffectComposer>
          <Bloom
            intensity={0.42}
            luminanceThreshold={0.3}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Suspense>

      <CameraRig pointer={pointer} />
    </Canvas>
  );
}
