import { useState } from 'react';
import { NavLinks } from './navigation/NavLinks';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { MobileMenu } from './navigation/MobileMenu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="relative py-4">
        <div className="md:max-w-fit w-full mx-auto px-4 md:px-0">
          <div className="bg-background/80 backdrop-blur-sm px-6 py-2 rounded-full border shadow-sm">
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center gap-8">
              <NavLinks />
              <div className="w-px h-4 bg-border" />
              <ThemeToggle />
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center justify-between w-full">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </nav>
    </header>
  );
}