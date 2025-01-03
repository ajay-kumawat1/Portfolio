import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" }
] as const;

interface NavLinksProps {
  orientation?: 'horizontal' | 'vertical';
}

export function NavLinks({ orientation = 'horizontal' }: NavLinksProps) {
  return (
    <div className={cn(
      'flex',
      orientation === 'vertical' ? 'flex-col space-y-2' : 'gap-8'
    )}>
      {navItems.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            cn(
              'nav-link transition-all duration-300 block',
              orientation === 'vertical' ? 'py-2' : '',
              isActive && 'text-foreground font-medium'
            )
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}