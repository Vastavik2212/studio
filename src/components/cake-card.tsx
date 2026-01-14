import Link from "next/link";
import Image from "next/image";
import type { Cake } from "@/lib/cake-data";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

type CakeCardProps = {
  cake: Cake;
};

export function CakeCard({ cake }: CakeCardProps) {
  return (
    <Link href={`/cakes/${cake.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 bg-card/80 dark:bg-card/50">
        <CardHeader className="p-0">
          <div className="aspect-[3/2] relative">
            <Image
              src={cake.image.imageUrl}
              alt={cake.name}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={cake.image.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">{cake.category}</Badge>
          <h3 className="font-headline text-xl font-bold leading-snug truncate">{cake.name}</h3>
          <p className="mt-2 text-lg font-semibold text-primary">
            ${cake.price.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
