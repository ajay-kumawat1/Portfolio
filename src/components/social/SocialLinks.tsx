import { socialLinks } from '@/data/socialLinks';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex justify-center gap-6", className)}>
      {socialLinks.map(({ name, url, icon: Icon }) => (
        <a
          key={name}
          href={url}
          className={cn(
            "text-muted-foreground hover:text-foreground",
            "transition-all duration-300 hover:scale-110",
            "hover:text-blue-500 dark:hover:text-blue-400"
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      ))}
    </div>
  );
}