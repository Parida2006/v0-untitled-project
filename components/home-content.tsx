"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeContent() {
  return (
    <div className="p-6 pb-24 md:pb-6">
      {/* Recently played section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recently Played</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {recentlyPlayed.slice(0, 6).map((item) => (
            <Card key={item.title} className="bg-card/50 hover:bg-card/80 transition-colors overflow-hidden group">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="relative w-full aspect-square mb-4 rounded-md overflow-hidden">
                  <Avatar className="h-full w-full rounded-md">
                    <AvatarImage
                      src={`/placeholder.svg?height=150&width=150&text=${encodeURIComponent(item.title)}`}
                      alt={item.title}
                    />
                    <AvatarFallback className="rounded-md">{item.title.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-10 w-10 shadow-lg"
                  >
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
                <h3 className="font-medium line-clamp-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Made for you section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Made For You</h2>
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {madeForYou.map((item) => (
              <Card
                key={item.title}
                className="w-[200px] flex-shrink-0 bg-card/50 hover:bg-card/80 transition-colors group"
              >
                <CardContent className="p-4">
                  <div className="relative aspect-square mb-3 rounded-md overflow-hidden">
                    <Avatar className="h-full w-full rounded-md">
                      <AvatarImage
                        src={`/placeholder.svg?height=150&width=150&text=${encodeURIComponent(item.title)}`}
                        alt={item.title}
                      />
                      <AvatarFallback className="rounded-md">{item.title.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-10 w-10 shadow-lg"
                    >
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                  <h3 className="font-medium line-clamp-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Popular playlists */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Playlists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularPlaylists.map((playlist) => (
            <Card
              key={playlist.title}
              className="flex overflow-hidden h-20 bg-card/50 hover:bg-card/80 transition-colors group"
            >
              <Avatar className="h-20 w-20 rounded-none">
                <AvatarImage
                  src={`/placeholder.svg?height=80&width=80&text=${encodeURIComponent(playlist.title)}`}
                  alt={playlist.title}
                />
                <AvatarFallback className="rounded-none">{playlist.title.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <CardContent className="flex-1 p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{playlist.title}</h3>
                  <p className="text-xs text-muted-foreground">{playlist.songs} songs</p>
                </div>
                <Button
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-10 w-10"
                >
                  <Play className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

const recentlyPlayed = [
  { title: "Daily Mix 1", description: "Kendrick Lamar, J. Cole, Drake and more" },
  { title: "Chill Vibes", description: "Relaxing beats for your day" },
  { title: "Workout Playlist", description: "High energy tracks to keep you moving" },
  { title: "Throwback Hits", description: "Classic songs from the 90s and 00s" },
  { title: "New Releases", description: "The latest music from your favorite artists" },
  { title: "Focus Flow", description: "Concentration-enhancing instrumental tracks" },
  { title: "Indie Discoveries", description: "Fresh indie tracks you'll love" },
  { title: "Hip Hop Essentials", description: "The best of hip hop, old and new" },
]

const madeForYou = [
  { title: "Discover Weekly", description: "Your weekly mixtape of fresh music" },
  { title: "Release Radar", description: "Catch all the latest music from artists you follow" },
  { title: "Time Capsule", description: "Songs to take you back in time" },
  { title: "Mood Booster", description: "Feel-good music to brighten your day" },
  { title: "On Repeat", description: "Songs you've been playing most" },
  { title: "Summer Mix", description: "The perfect soundtrack for sunny days" },
]

const popularPlaylists = [
  { title: "Today's Top Hits", songs: 50 },
  { title: "RapCaviar", songs: 50 },
  { title: "Rock Classics", songs: 75 },
  { title: "Chill Hits", songs: 60 },
  { title: "Hot Country", songs: 50 },
  { title: "Viva Latino", songs: 50 },
]
