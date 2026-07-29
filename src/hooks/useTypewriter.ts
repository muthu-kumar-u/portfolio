import { useEffect, useState } from "react";

interface TypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

type Phase = "typing" | "pausing" | "deleting";

/**
 * Cycles through a list of words with a typing / pausing / deleting effect.
 * Returns the string to render for the current frame of the animation.
 */
export function useTypewriter(
  words: readonly string[],
  { typingSpeed = 90, deletingSpeed = 45, pauseDuration = 1800 }: TypewriterOptions = {},
): string {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const currentWord = words[wordIndex % words.length] ?? "";
    let timeoutId: number;

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        timeoutId = window.setTimeout(
          () => setText(currentWord.slice(0, text.length + 1)),
          typingSpeed,
        );
      } else {
        timeoutId = window.setTimeout(() => setPhase("pausing"), pauseDuration);
      }
    } else if (phase === "pausing") {
      timeoutId = window.setTimeout(() => setPhase("deleting"), pauseDuration);
    } else {
      if (text.length > 0) {
        timeoutId = window.setTimeout(
          () => setText(currentWord.slice(0, text.length - 1)),
          deletingSpeed,
        );
      } else {
        timeoutId = window.setTimeout(() => {
          setWordIndex((index) => (index + 1) % words.length);
          setPhase("typing");
        }, typingSpeed);
      }
    }

    return () => window.clearTimeout(timeoutId);
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}
