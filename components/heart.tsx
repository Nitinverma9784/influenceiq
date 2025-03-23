import type React from "react"
import { HeartIcon } from "lucide-react"

export function Heart({ className, ...props }: React.ComponentProps<typeof HeartIcon>) {
  return <HeartIcon className={className} {...props} />
}

