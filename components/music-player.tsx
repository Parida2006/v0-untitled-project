"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Heart, Maximize2, ListMusic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState([70])
  const [progress, setProgress] = useState([30])

  return (
    <div className="py-3 px-4 flex items-center justify-between">
      {/* Song info */}
      <div className="flex items-center w-1/4 min-w-[180px]">
        <Avatar className="h-12 w-12 rounded-md">
          <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Album cover" />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <div className="ml-3 truncate">
          <div className="font-medium truncate">Blinding Lights</div>
          <div className="text-xs text-muted-foreground truncate">The Weeknd</div>
        </div>
        <Button variant="ghost" size="icon" className="ml-2">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Player controls */}
      <div className="flex flex-col items-center max-w-md w-1/2">
        <div className="flex items-center gap-2 mb-1">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Shuffle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            size="icon"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-8 w-8"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <SkipForward className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Repeat className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center w-full gap-2">
          <span className="text-xs text-muted-foreground w-10 text-right">1:23</span>
          <Slider value={progress} onValueChange={setProgress} max={100} step={1} className="w-full" />
          <span className="text-xs text-muted-foreground w-10">3:45</span>
        </div>
      </div>

      {/* Volume controls */}
      <div className="hidden md:flex items-center gap-2 justify-end w-1/4">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <ListMusic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Maximize2 className="h-4 w-4" />
        </Button>
        <Volume2 className="h-4 w-4 text-muted-foreground" />
        <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-24" />
      </div>
    </div>
  )
}
