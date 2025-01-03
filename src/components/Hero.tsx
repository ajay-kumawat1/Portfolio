import { Button } from '@/components/ui/button';
import { downloadResume } from '@/lib/download';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Gradient Orbs - Adjusted for mobile */}
      <div className="absolute top-1/4 -left-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-1/4 -right-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl w-full mx-auto text-center relative">
        <div className="space-y-6 sm:space-y-8">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Software Developer
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mt-4 sm:mt-6 px-4">
              Crafting elegant solutions to complex problems with clean, efficient code.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 animate-fade-in animation-delay-300">
            <Button 
              variant="outline" 
              size="lg"
              className="group relative overflow-hidden w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              View Projects
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 w-full sm:w-auto"
              onClick={downloadResume}
            >
              Hire Me
            </Button>
          </div>
          
          {/* <div className="flex justify-center gap-6 pt-6 sm:pt-8 animate-fade-in animation-delay-500">
            {['github', 'linkedin'].map((platform, index) => {
              const Icon = { github: Github, linkedin: Linkedin }[platform];
              return (
                <a
                  key={platform}
                  href={`https://${platform}.com/ajay-kumawat1`}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110",
                    "animate-fade-in",
                    `animation-delay-${700 + index * 100}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
}