import { Sparkles } from "@react-three/drei";

interface FloatingParticlesProps {
  count?: number;
}

export default function FloatingParticles({ count = 120 }: FloatingParticlesProps) {
  return (
    <>
      <Sparkles
        count={count}
        scale={[8, 5, 4]}
        size={2.2}
        speed={0.25}
        opacity={0.5}
        color="#67e8f9"
        noise={1}
      />
      <Sparkles
        count={Math.round(count / 3)}
        scale={[6, 4, 3]}
        size={3}
        speed={0.15}
        opacity={0.4}
        color="#a78bfa"
        noise={1.4}
      />
    </>
  );
}
