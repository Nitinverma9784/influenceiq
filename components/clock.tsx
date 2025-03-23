import type React from "react"
import { ClockIcon } from "lucide-react"

export function Clock({ className, ...props }: React.ComponentProps<typeof ClockIcon>) {
  return <ClockIcon className={className} {...props} />
}

