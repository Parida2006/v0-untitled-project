import { MusicPlayer } from "@/components/music-player"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { HomeContent } from "@/components/home-content"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:flex md:w-64 md:flex-col border-r">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <div className="flex justify-between items-center p-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
            <h1 className="text-2xl font-bold">Spotify Redesign</h1>
            <ThemeToggle />
          </div>
          <HomeContent />
        </div>
      </div>

      {/* Music player - fixed at bottom */}
      <div className="border-t">
        <MusicPlayer />
      </div>

      {/* Mobile navigation - only visible on mobile */}
      <div className="md:hidden">
        <MobileNavigation />
      </div>
    </div>
  )
}
