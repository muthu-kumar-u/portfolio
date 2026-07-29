import { useEffect } from "react";
import { initLenis, destroyLenis } from "@/lib/lenis";

/**
 * Initializes the shared Lenis smooth-scroll instance for the whole
 * document. Mount once near the root of the app. Automatically disabled
 * when the user prefers reduced motion (see lib/lenis.ts).
 */
export function useLenis(): void {
  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);
}
