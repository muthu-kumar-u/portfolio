import { splitEmphasis } from "@/lib/utils";

interface RichTextProps {
  text: string;
  className?: string;
}

/** Renders copy authored with **bold** markers in data files as real <strong> emphasis. */
export default function RichText({ text, className }: RichTextProps) {
  const segments = splitEmphasis(text);
  return (
    <p className={className}>
      {segments.map((segment, index) =>
        segment.strong ? (
          <strong key={index} className="font-semibold text-ink-primary">
            {segment.value}
          </strong>
        ) : (
          <span key={index}>{segment.value}</span>
        ),
      )}
    </p>
  );
}
