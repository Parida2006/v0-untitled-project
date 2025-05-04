"use client"

import { Home, Search, Library } from "lucide-react"
import Link from "next/link"

export function MobileNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t flex justify-around py-2 z-10">
      <Link href="#" className="flex flex-col items-center p-2 text-primary">
        <Home className="h-6 w-6" />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link href="#" className="flex flex-col items-center p-2 text-muted-foreground">
        <Search className="h-6 w-6" />
        <span className="text-xs mt-1">Search</span>
      </Link>
      <Link href="#" className="flex flex-col items-center p-2 text-muted-foreground">
        <Library className="h-6 w-6" />
        <span className="text-xs mt-1">Library</span>
      </Link>
    </div>
  )
}
