import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

export default function GlowOrb() {
  const meshRef = useRef<Mesh>(null);
  const haloRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
    }
    if (haloRef.current) {
      haloRef.current.rotation.z -= delta * 0.08;
    }
  });

  return (
    <group position={[1.4, 0.2, -1]}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.15, 2]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#8b5cf6"
          emissiveIntensity={0.9}
          roughness={0.15}
          metalness={0.4}
          wireframe
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.12} />
      </mesh>
      <mesh ref={haloRef} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[1.55, 0.008, 16, 100]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.35} />
      </mesh>
      <pointLight color="#22d3ee" intensity={12} distance={6} />
    </group>
  );
}
