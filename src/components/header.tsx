import Link from 'next/link';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { SweetGalleryIcon } from '@/components/icons';

export function Header() {
  return (
    <header className="py-6 px-4 sm:px-8 container flex items-center justify-between animate-fade-in border-b">
      <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
        <SweetGalleryIcon className="h-10 w-10 sm:h-12 sm:w-12 text-primary transition-transform group-hover:scale-110" />
        <div>
          <h1 className="font-headline text-3xl sm:text-4xl tracking-tight font-bold text-foreground">
            Sweet Gallery
          </h1>
          <p className="hidden sm:block mt-1 text-sm text-muted-foreground">
            Handcrafted cakes for every occasion.
          </p>
        </div>
      </Link>
      <Button asChild>
        <Link href="/orders" className="flex items-center gap-2">
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Orders</span>
        </Link>
      </Button>
    </header>
  );
}
