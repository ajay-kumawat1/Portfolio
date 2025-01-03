import { NavLinks } from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 mt-2 px-4">
      <div className="bg-background/95 backdrop-blur-md rounded-lg border shadow-lg p-4">
        <nav className="flex flex-col space-y-4" onClick={onClose}>
          <NavLinks orientation="vertical" />
        </nav>
      </div>
    </div>
  );
}