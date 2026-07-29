// CSS-only placeholder "photo" for a vehicle card — no external image
// fetching. Each placeholder key maps to a distinct gradient so cards in a
// grid are visually distinguishable even without real photography.

const GRADIENTS: Record<string, string> = {
  "sedan-a": "linear-gradient(135deg, #C4622D 0%, #14231C 100%)",
  "sedan-b": "linear-gradient(135deg, #B99342 0%, #14231C 100%)",
  "sedan-c": "linear-gradient(135deg, #D98C2B 0%, #2F5233 100%)",
  "suv-a": "linear-gradient(135deg, #2F5233 0%, #14231C 100%)",
  "suv-b": "linear-gradient(135deg, #14231C 0%, #C4622D 100%)",
  "microbus-a": "linear-gradient(135deg, #B99342 0%, #2F5233 100%)",
  "microbus-b": "linear-gradient(135deg, #C4622D 0%, #B99342 100%)",
  "luxury-a": "linear-gradient(135deg, #14231C 0%, #B99342 60%, #C4622D 100%)",
  "luxury-b": "linear-gradient(135deg, #1B1B18 0%, #14231C 100%)",
};

export function VehicleImagePlaceholder({
  placeholderKey,
  alt,
  className,
}: {
  placeholderKey: string;
  alt: string;
  className?: string;
}) {
  const background = GRADIENTS[placeholderKey] ?? GRADIENTS["sedan-a"];

  return (
    <div
      role="img"
      aria-label={alt}
      className={className}
      style={{
        background,
        borderRadius: "var(--radius-media)",
      }}
    >
      <svg viewBox="0 0 120 60" className="w-full h-full opacity-40" aria-hidden="true">
        <path
          d="M10 42L18 24C20 20 24 18 28 18H72C78 18 82 20 84 24L100 34V42H92C92 46 88 50 84 50C80 50 76 46 76 42H44C44 46 40 50 36 50C32 50 28 46 28 42H10Z"
          stroke="#F6F1E7"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="36" cy="42" r="5" stroke="#F6F1E7" strokeWidth="2" fill="none" />
        <circle cx="84" cy="42" r="5" stroke="#F6F1E7" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}
