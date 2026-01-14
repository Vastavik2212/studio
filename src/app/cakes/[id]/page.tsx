
"use client";

import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cakeData } from "@/lib/cake-data";
import { Header } from "@/components/header";
import { BookingDialog } from "@/components/booking-dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, Dot, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

type CakePageProps = {
  params: { id: string };
};

export default function CakePage({ params }: CakePageProps) {
  const router = useRouter();
  const cake = cakeData.find((c) => c.id === params.id);

  // Since we are removing this page, we'll just redirect to the home page
  // in case someone accesses it directly. In a real app you might want to 
  // just delete this file.
  if (typeof window !== 'undefined') {
    router.replace('/');
    return null;
  }

  if (!cake) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container px-4 py-8 animate-fade-in">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Gallery
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative aspect-[4/3] md:aspect-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src={cake.image.imageUrl}
              alt={cake.name}
              fill
              className="object-cover"
              data-ai-hint={cake.image.imageHint}
            />
          </div>
          
          <div className="flex flex-col">
            <Badge variant="secondary" className="w-fit mb-2">{cake.category}</Badge>
            <h1 className="font-headline text-4xl lg:text-5xl font-bold">{cake.name}</h1>
            <p className="mt-4 text-3xl font-semibold text-primary">₹{cake.price.toFixed(2)}</p>
            
            <Separator className="my-6" />
            
            <p className="text-base text-muted-foreground leading-relaxed">{cake.description}</p>
            
            <div className="mt-6">
              <h2 className="text-lg font-semibold font-headline">Ingredients</h2>
              <ul className="mt-2 flex flex-wrap">
                {cake.ingredients.map((ingredient) => (
                  <li key={ingredient} className="flex items-center text-muted-foreground mr-4">
                    <Dot className="w-5 h-5 -ml-1.5" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto pt-8">
              <BookingDialog cake={cake}>
                <Button size="lg" className="w-full">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book for Pickup or Delivery
                </Button>
              </BookingDialog>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
