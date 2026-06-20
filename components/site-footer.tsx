import * as React from "react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex items-center justify-between gap-4 py-10 md:h-24 md:py-0 border-t border-border/40">
        <p className="text-sm leading-loose text-muted-foreground text-center md:text-left">
          Built for Ready Nest — Week 1 Task.
        </p>
        <ModeToggle />
      </div>
    </footer>
  )
}