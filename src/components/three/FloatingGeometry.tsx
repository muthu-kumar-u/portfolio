import { Float } from "@react-three/drei";

interface ShapeConfig {
  position: [number, number, number];
  geometry: "octahedron" | "tetrahedron" | "box" | "torus";
  scale: number;
  color: string;
  speed: number;
}

const shapes: ShapeConfig[] = [
  { position: [-2.6, 1.1, -0.5], geometry: "octahedron", scale: 0.22, color: "#8b5cf6", speed: 1.4 },
  { position: [-2.1, -1.3, -1.2], geometry: "tetrahedron", scale: 0.16, color: "#22d3ee", speed: 1.8 },
  { position: [2.6, -1.4, -0.8], geometry: "box", scale: 0.14, color: "#67e8f9", speed: 1.2 },
  { position: [0.4, 1.9, -1.6], geometry: "torus", scale: 0.13, color: "#a78bfa", speed: 2 },
  { position: [-0.6, -2, -1], geometry: "octahedron", scale: 0.1, color: "#22d3ee", speed: 1.6 },
];

function ShapeMesh({ geometry }: { geometry: ShapeConfig["geometry"] }) {
  switch (geometry) {
    case "octahedron":
      return <octahedronGeometry args={[1, 0]} />;
    case "tetrahedron":
      return <tetrahedronGeometry args={[1, 0]} />;
    case "box":
      return <boxGeometry args={[1, 1, 1]} />;
    case "torus":
      return <torusGeometry args={[0.8, 0.28, 8, 24]} />;
  }
}

export default function FloatingGeometry() {
  return (
    <group>
      {shapes.map((shape, index) => (
        <Float
          key={index}
          speed={shape.speed}
          rotationIntensity={1.1}
          floatIntensity={1.4}
          floatingRange={[-0.25, 0.25]}
        >
          <mesh position={shape.position} scale={shape.scale}>
            <ShapeMesh geometry={shape.geometry} />
            <meshStandardMaterial
              color={shape.color}
              emissive={shape.color}
              emissiveIntensity={0.4}
              wireframe
              roughness={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
