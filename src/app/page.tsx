import { Header } from "@/components/header";
import { CakeGallery } from "@/components/cake-gallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container px-4 py-8 md:py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl tracking-tight font-bold text-foreground">
            Welcome to Sweet Gallery
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Discover our handcrafted cakes for every occasion.
          </p>
        </div>
        <CakeGallery />
      </main>
    </div>
  );
}
