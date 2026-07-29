export type ClassValue = string | number | boolean | null | undefined;

/**
 * Lightweight classname combinator — joins truthy class values with a space.
 * Kept dependency-free (no clsx/tailwind-merge) to match the requested stack.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}

/**
 * Splits body copy on **bold** markers and returns React-renderable segments.
 * Used to keep emphasis data-driven (see src/data) instead of hardcoded JSX.
 */
export function splitEmphasis(text: string): { value: string; strong: boolean }[] {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((chunk) => {
      const isStrong = chunk.startsWith("**") && chunk.endsWith("**");
      return {
        value: isStrong ? chunk.slice(2, -2) : chunk,
        strong: isStrong,
      };
    });
}
