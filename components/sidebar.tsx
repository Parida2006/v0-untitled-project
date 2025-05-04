"use client"

import { Home, Search, Library, PlusSquare, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function Sidebar() {
  return (
    <div className="flex flex-col h-full py-4">
      <div className="px-4 mb-6">
        <h2 className="flex items-center text-2xl font-bold text-primary">
          <svg viewBox="0 0 16 16" height="32" width="32" fill="currentColor" className="mr-2">
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.669 11.538a.498.498 0 01-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 01-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 01.166.686zm.979-2.178a.624.624 0 01-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 01-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 01.206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 11-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 11-.764 1.288z"></path>
          </svg>
          Spotify
        </h2>
      </div>

      <nav className="space-y-1 px-3">
        <Link
          href="#"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-accent text-accent-foreground"
        >
          <Home className="mr-3 h-5 w-5" />
          Home
        </Link>
        <Link
          href="#"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50"
        >
          <Search className="mr-3 h-5 w-5" />
          Search
        </Link>
        <Link
          href="#"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50"
        >
          <Library className="mr-3 h-5 w-5" />
          Your Library
        </Link>
      </nav>

      <div className="mt-6 px-3">
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <PlusSquare className="mr-3 h-5 w-5" />
          Create Playlist
        </Button>
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <Heart className="mr-3 h-5 w-5" />
          Liked Songs
        </Button>
      </div>

      <Separator className="my-4" />

      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1">
          {playlists.map((playlist) => (
            <Link
              key={playlist}
              href="#"
              className="block px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              {playlist}
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

const playlists = [
  "Chill Vibes",
  "Workout Mix",
  "Study Session",
  "Road Trip",
  "Party Playlist",
  "Acoustic Covers",
  "Morning Coffee",
  "Throwback Hits",
  "Indie Discoveries",
  "Focus Flow",
  "Dinner Party",
  "Rainy Day",
  "Summer Hits",
  "Coding Session",
  "Relaxing Jazz",
]
