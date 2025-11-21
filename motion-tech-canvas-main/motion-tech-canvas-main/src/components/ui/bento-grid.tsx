import { ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

interface BentoGridItemProps {
  className?: string;
  title: string;
  description: string;
  header: ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-gray-900 dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-1 md:col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-white/5 border border-white/10 shadow-lg",
        "dark:bg-black/70 dark:border-neutral-900 dark:shadow-[0_4px_32px_-2px_rgba(10,10,60,0.3)]",
        className
      )}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-6 transition-all duration-300 group-hover:-translate-y-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 w-fit">
          <Icon className="h-8 w-8 text-white transform-gpu transition-all duration-300 ease-in-out group-hover:scale-110" />
        </div>
        <h3 className="text-xl font-semibold text-gray-100 dark:text-gray-200 drop-shadow">{name}</h3>
        <p className="max-w-lg text-gray-400 dark:text-gray-400/90">{description}</p>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <Button variant="ghost" asChild size="sm" className="pointer-events-auto text-primary hover:bg-primary/15">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
