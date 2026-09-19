import { Testimonial } from "@/registry/testimonials-marquee";
import { Heart, Briefcase, MessageSquare } from "lucide-react";

import type { HighlightCard } from "../../types/testimonials";

export function HighlightCardItem({
  title,
  description,
  iconName,
}: HighlightCard) {
  const Icon =
    iconName === "Heart"
      ? Heart
      : iconName === "Briefcase"
      ? Briefcase
      : MessageSquare;

  return (
    <div className="block h-full transition-colors hover:bg-accent2">
      <Testimonial className="flex flex-col items-center justify-center space-y-3 p-6 text-center h-full">
        <div className="flex items-center justify-center rounded-full bg-accent p-4 text-accent-foreground mb-2">
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-balance text-muted-foreground">
          {description}
        </p>
      </Testimonial>
    </div>
  );
}
