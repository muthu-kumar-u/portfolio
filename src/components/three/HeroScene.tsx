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
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 3, 4]} intensity={0.5} color="#a78bfa" />

      <Suspense fallback={null}>
        <GlowOrb />
        <FloatingGeometry />
        <FloatingParticles />
        <EffectComposer>
          <Bloom
            intensity={0.55}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Suspense>

      <CameraRig pointer={pointer} />
    </Canvas>
  );
}
