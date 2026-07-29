import { useSyncExternalStore } from "react";

function subscribe(query: string, callback: () => void) {
  const mediaQueryList = window.matchMedia(query);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

/**
 * Subscribes to a CSS media query and returns whether it currently matches.
 * Used to scale back animation/3D complexity on small screens and to
 * respect prefers-reduced-motion. Built on useSyncExternalStore so it stays
 * correctly in sync with the browser API without any effect-driven setState.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => subscribe(query, callback),
    () => window.matchMedia(query).matches,
    () => false,
  );
}
