
"use client";

import Image from "next/image";
import type { Cake } from "@/lib/cake-data";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { BookingDialog } from "./booking-dialog";
import { CalendarDays } from "lucide-react";

type CakeCardProps = {
  cake: Cake;
};

export function CakeCard({ cake }: CakeCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 bg-card/80 dark:bg-card/50 flex flex-col">
      <CardHeader className="p-0">
        <div className="aspect-[3/2] relative">
          <Image
            src={cake.image.imageUrl}
            alt={cake.name}
            fill
            className="object-cover"
            data-ai-hint={cake.image.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex flex-col flex-1">
        <Badge variant="secondary" className="mb-2 w-fit">{cake.category}</Badge>
        <h3 className="font-headline text-xl font-bold leading-snug truncate">{cake.name}</h3>
        <p className="mt-2 text-lg font-semibold text-primary">
          ₹{cake.price.toFixed(2)}
        </p>
        <div className="mt-auto pt-4 flex justify-end">
          <BookingDialog cake={cake}>
            <Button size="sm">
              <CalendarDays className="mr-2 h-4 w-4" />
              Order
            </Button>
          </BookingDialog>
        </div>
      </CardContent>
    </Card>
  );
}
