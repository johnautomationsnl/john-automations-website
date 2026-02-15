"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon: React.ComponentType<{ className?: string }>;
  description: string;
  href?: string;
  cta?: string;
  children?: ReactNode;
  iconClassName?: string;
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  children,
  iconClassName,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl",
        "warm-card hover:-translate-y-0.5 transition-all duration-500",
        className
      )}
    >
      {background && (
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
          {background}
        </div>
      )}
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-1">
        <Icon className={cn("h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75", iconClassName)} />
        <h3 className="text-xl font-semibold text-warm-50 mt-2">{name}</h3>
        <p className="max-w-lg text-warm-400 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="pointer-events-none z-10 flex flex-col gap-2 p-6 pt-0">
        {children}
        {href && cta && (
          <a
            href={href}
            className="pointer-events-auto inline-flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300 transition-colors"
          >
            {cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
