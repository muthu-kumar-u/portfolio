import { Float } from "@react-three/drei";

const nodes: Array<{
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}> = [
  { position: [-2.15, 1.35, -0.4], scale: 0.14, color: "#c9ff63", speed: 1.1 },
  { position: [2.1, 1.05, -0.8], scale: 0.19, color: "#ab92ff", speed: 1.35 },
  { position: [-1.95, -1.5, -0.2], scale: 0.17, color: "#ab92ff", speed: 1.55 },
  { position: [2.2, -1.25, -0.5], scale: 0.12, color: "#c9ff63", speed: 1.25 },
  { position: [0.25, 2.15, -1.1], scale: 0.1, color: "#f4f2ec", speed: 1.4 },
  { position: [-0.35, -2.25, -0.9], scale: 0.1, color: "#c9ff63", speed: 1.2 },
];

export default function FloatingGeometry() {
  return (
    <group>
      {nodes.map((node, index) => (
        <Float
          key={index}
          speed={node.speed}
          rotationIntensity={0.65}
          floatIntensity={0.75}
          floatingRange={[-0.16, 0.16]}
        >
          <mesh position={node.position} scale={node.scale}>
            {index % 2 === 0 ? (
              <octahedronGeometry args={[1, 0]} />
            ) : (
              <boxGeometry args={[1, 1, 1]} />
            )}
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.5}
              roughness={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
