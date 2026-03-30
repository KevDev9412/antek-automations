"use client";

import { CALENDLY_URL } from "@/lib/calendly";

interface Props {
  children: React.ReactNode;
  className?: string;
}

/**
 * Fires the Calendly popup widget on click.
 * Renders as a <button> so it can be styled however needed via className.
 * The Calendly widget.js must already be loaded (added in layout.tsx).
 */
export function CalendlyButton({ children, className }: Props) {
  const open = (e: React.MouseEvent) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL });
  };

  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
