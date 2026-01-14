import { Header } from "@/components/header";
import { CakeGallery } from "@/components/cake-gallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container px-4 py-8 md:py-12">
        <CakeGallery />
      </main>
    </div>
  );
}
