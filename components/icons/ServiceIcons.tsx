// Simple geometric inline SVG icons matching the palette. No emoji, no icon
// library dependency.

type IconProps = {
  className?: string;
};

export function PlaneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M6 26L42 14L38 22L26 26L22 38L18 34L20 24L6 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <rect x="6" y="20" width="8" height="20" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="10" width="8" height="30" stroke="currentColor" strokeWidth="2" />
      <rect x="30" y="16" width="8" height="24" stroke="currentColor" strokeWidth="2" />
      <line x1="4" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function RoadIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M14 40L20 8H28L34 40" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="24" y1="12" x2="24" y2="18" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="22" x2="24" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="32" x2="24" y2="36" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function RingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <circle cx="18" cy="28" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="28" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M22 12L24 18L26 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <rect x="8" y="16" width="32" height="22" stroke="currentColor" strokeWidth="2" />
      <path d="M18 16V11a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" stroke="currentColor" strokeWidth="2" />
      <line x1="8" y1="26" x2="40" y2="26" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export const serviceIconMap = {
  plane: PlaneIcon,
  city: CityIcon,
  road: RoadIcon,
  ring: RingIcon,
  briefcase: BriefcaseIcon,
} as const;
