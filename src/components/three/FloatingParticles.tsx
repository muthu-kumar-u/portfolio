import { Sparkles } from "@react-three/drei";

interface FloatingParticlesProps {
  count?: number;
}

export default function FloatingParticles({ count = 75 }: FloatingParticlesProps) {
  return (
    <>
      <Sparkles count={count} scale={[6, 6, 4]} size={1.6} speed={0.18} opacity={0.34} color="#c9ff63" noise={1} />
      <Sparkles count={28} scale={[5, 5, 3]} size={2.2} speed={0.1} opacity={0.28} color="#ab92ff" noise={1.5} />
    </>
  );
}
