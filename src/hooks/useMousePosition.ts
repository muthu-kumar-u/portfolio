import { useEffect, useRef, type RefObject } from "react";

export interface NormalizedPointer {
  x: number;
  y: number;
}

/**
 * Tracks the pointer position normalized to [-1, 1] on each axis, exposed
 * as a ref rather than state so consumers (e.g. R3F's useFrame) can read
 * the latest value every frame without triggering React re-renders.
 */
export function useMousePosition(): RefObject<NormalizedPointer> {
  const position = useRef<NormalizedPointer>({ x: 0, y: 0 });

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      position.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return position;
}
