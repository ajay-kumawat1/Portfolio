import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'nav-link',
        'transition-all duration-300',
        'hover:scale-105'
      )}
    >
      {children}
    </a>
  );
}