import { SweetGalleryIcon } from '@/components/icons';

export function Header() {
  return (
    <header className="py-8 text-center animate-fade-in">
      <div className="inline-flex items-center gap-3 sm:gap-4">
        <SweetGalleryIcon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl tracking-tight font-bold text-foreground">
          Sweet Gallery
        </h1>
      </div>
      <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
        Handcrafted cakes for every occasion.
      </p>
    </header>
  );
}
