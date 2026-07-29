import { useFrame, useThree } from "@react-three/fiber";
import type { RefObject } from "react";
import type { NormalizedPointer } from "@/hooks/useMousePosition";

interface CameraRigProps {
  pointer: RefObject<NormalizedPointer>;
  intensity?: number;
}

/**
 * Nudges the camera toward the pointer position each frame for a subtle
 * parallax effect, easing back toward center when the pointer is idle.
 */
export default function CameraRig({ pointer, intensity = 0.6 }: CameraRigProps) {
  const { camera } = useThree();

  useFrame((_, delta) => {
    const targetX = pointer.current.x * intensity;
    const targetY = pointer.current.y * intensity * 0.5;

    const ease = 1 - Math.pow(0.001, delta);
    // Mutating the camera in place inside useFrame is the standard R3F
    // pattern for per-frame animation (R3F's scene graph is imperative by
    // design) — safe to disable the generic immutability rule here.
    // eslint-disable-next-line react-hooks/immutability
    camera.position.x += (targetX - camera.position.x) * ease;
    camera.position.y += (targetY - camera.position.y) * ease;
    camera.lookAt(0, 0, 0);
  });

  return null;
}
