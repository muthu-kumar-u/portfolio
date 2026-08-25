import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh } from "three";

/** A kinetic systems core: layered data, service, and delivery orbits. */
export default function GlowOrb() {
  const core = useRef<Group>(null);
  const shell = useRef<Mesh>(null);
  const ringA = useRef<Mesh>(null);
  const ringB = useRef<Mesh>(null);
  const ringC = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (core.current) {
      core.current.rotation.y += delta * 0.11;
      core.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.09;
    }
    if (shell.current) {
      shell.current.rotation.x -= delta * 0.05;
      shell.current.rotation.y += delta * 0.08;
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.16;
    if (ringB.current) ringB.current.rotation.z -= delta * 0.11;
    if (ringC.current) ringC.current.rotation.y += delta * 0.13;
  });

  return (
    <group ref={core}>
      <mesh>
        <icosahedronGeometry args={[0.82, 3]} />
        <meshPhysicalMaterial
          color="#9b7cff"
          emissive="#7355dc"
          emissiveIntensity={0.65}
          roughness={0.18}
          metalness={0.38}
          transparent
          opacity={0.9}
        />
      </mesh>

      <mesh ref={shell} scale={1.45}>
        <icosahedronGeometry args={[0.82, 2]} />
        <meshBasicMaterial color="#c9ff63" wireframe transparent opacity={0.22} />
      </mesh>

      <mesh ref={ringA} rotation={[Math.PI / 2.2, 0.25, 0]}>
        <torusGeometry args={[1.38, 0.012, 12, 160]} />
        <meshBasicMaterial color="#c9ff63" transparent opacity={0.72} />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 2.85, -0.55, 0.4]}>
        <torusGeometry args={[1.72, 0.009, 12, 160]} />
        <meshBasicMaterial color="#ab92ff" transparent opacity={0.48} />
      </mesh>
      <mesh ref={ringC} rotation={[0.2, Math.PI / 2, -0.5]}>
        <torusGeometry args={[2.05, 0.006, 12, 160]} />
        <meshBasicMaterial color="#f4f2ec" transparent opacity={0.18} />
      </mesh>

      <pointLight color="#9b7cff" intensity={9} distance={5} />
      <pointLight position={[1.8, 1.2, 1.4]} color="#c9ff63" intensity={5} distance={4} />
    </group>
  );
}
